import { useQuery } from '@tanstack/react-query';
import moment, { Moment } from 'moment';
import { NearEarthObject, nasaApi } from '@/shared/api';
import React from 'react';

export const useAsteroidsQuery = (initialDate?: Moment) => {
  const currentDate = moment();

  const [date, setDate] = React.useState(initialDate || currentDate);

  const [items, setItems] = React.useState<NearEarthObject[]>([]);

  const {
    data: asteroids,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['asteroids', date],
    queryFn: async () => {
      const response = await nasaApi.asteroids.getAsteroidsList({
        start_date: date.format('YYYY-MM-DD'),
        end_date: date.format('YYYY-MM-DD'),
      });
      return response;
    },
  });

  React.useEffect(() => {
    if (asteroids) {
      setItems((prevItems) => [...prevItems, ...asteroids]);
    }
  }, [asteroids]);

  const loadMore = () => {
    const nextDate = date.clone().add(1, 'day');
    setDate(nextDate);
  };

  return {
    date,
    items,
    isLoading,
    isFetching,
    loadMore,
  };
};
