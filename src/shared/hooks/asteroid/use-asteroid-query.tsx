import { type NearEarthObjectFull, nasaApi } from '@/shared/api';
import { DEFAULT_TIMEZONE } from '@shared/config';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment-timezone';
import React from 'react';

type UseAsteroidsQueryReturn = {
  error: Error | null;
  hasMore: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
  items: NearEarthObjectFull[];
  loadMore: () => void;
};

export const useAsteroidsQuery = (
  initialData?: NearEarthObjectFull[],
  initialDate?: string
): UseAsteroidsQueryReturn => {
  const startDate = moment(initialDate) || moment().tz(DEFAULT_TIMEZONE);

  const [currentDate, setCurrentDate] = React.useState(startDate);
  const [hasMoreData, setHasMoreData] = React.useState(true);
  const [items, setItems] = React.useState<NearEarthObjectFull[]>(initialData || []);
  const [fetchData, setFetchData] = React.useState(false);
  const [firstInit, setFirstInit] = React.useState(true);

  const fetchAsteroids = async (): Promise<NearEarthObjectFull[]> => {
    return await nasaApi.asteroids.getAsteroidsList({
      end_date: currentDate.format('YYYY-MM-DD'),
      start_date: currentDate.format('YYYY-MM-DD'),
    });
  };

  const { data, error, isError, isFetching, isLoading } = useQuery<NearEarthObjectFull[], Error>({
    enabled: fetchData,
    initialData,
    queryFn: () => fetchAsteroids(),
    queryKey: ['asteroids'],
  });

  React.useEffect(() => {
    if (data && !firstInit) {
      setItems((prevItems) => [...prevItems, ...data]);
      setHasMoreData(data.length > 0);
      setFetchData(false);
    }
  }, [data]);

  const loadMore = () => {
    const nextDate = currentDate.clone().add(1, 'day');
    setCurrentDate(nextDate);
    setFetchData(true);
    if (firstInit) setFirstInit(false);
  };

  return {
    error,
    hasMore: hasMoreData,
    isError,
    isFetching,
    isLoading,
    items,
    loadMore,
  };
};
