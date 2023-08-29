import { nasaApi, type NearEarthObjectFull } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react';

type UseAsteroidsQueryReturn = {
  items: NearEarthObjectFull[];
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  hasMore: boolean;
  loadMore: () => void;
  error: Error | null;
};

export const useAsteroidsQuery = (
  initialData?: NearEarthObjectFull[],
  initialDate?: string
): UseAsteroidsQueryReturn => {
  const startDate = moment(initialDate) || moment();

  const [currentDate, setCurrentDate] = React.useState(startDate);
  const [hasMoreData, setHasMoreData] = React.useState(true);
  const [items, setItems] = React.useState<NearEarthObjectFull[]>(initialData || []);
  const [fetchData, setFetchData] = React.useState(false);
  const [firstInit, setFirstInit] = React.useState(true);

  const fetchAsteroids = async (): Promise<NearEarthObjectFull[]> => {
    return await nasaApi.asteroids.getAsteroidsList({
      start_date: currentDate.format('YYYY-MM-DD'),
      end_date: currentDate.format('YYYY-MM-DD'),
    });
  };

  const { data, isLoading, isFetching, isError, error } = useQuery<NearEarthObjectFull[], Error>({
    queryKey: ['asteroids'],
    queryFn: () => fetchAsteroids(),
    initialData,
    enabled: fetchData,
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
    items,
    hasMore: hasMoreData,
    isLoading,
    isFetching,
    isError,
    loadMore,
  };
};
