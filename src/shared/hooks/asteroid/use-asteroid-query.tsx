import { NearEarthObject, nasaApi } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import moment, { Moment } from 'moment';
import React from 'react';

type UseAsteroidsQueryReturn = {
  date: Moment;
  items: NearEarthObject[];
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  hasMore: boolean;
  loadMore: () => void;
  error: Error | null;
};

export const useAsteroidsQuery = (initialDate?: Moment): UseAsteroidsQueryReturn => {
  const currentDate = moment();
  const [date, setDate] = React.useState(initialDate || currentDate);
  const [hasMoreData, setHasMoreData] = React.useState(true);
  const [items, setItems] = React.useState<NearEarthObject[]>([]);

  const {
    data: asteroids,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery<NearEarthObject[], Error>({
    queryKey: ['asteroids', date],
    queryFn: () =>
      nasaApi.asteroids.getAsteroidsList({
        start_date: date.format('YYYY-MM-DD'),
        end_date: date.format('YYYY-MM-DD'),
      }),
  });

  React.useEffect(() => {
    if (asteroids) {
      setItems((prevItems) => [...prevItems, ...asteroids]);
      setHasMoreData(asteroids.length > 0);
    }
  }, [asteroids]);

  const loadMore = () => {
    const nextDate = date.clone().add(1, 'day');
    setDate(nextDate);
  };

  return {
    date,
    error,
    items,
    hasMore: hasMoreData,
    isLoading,
    isFetching,
    isError,
    loadMore,
  };
};
