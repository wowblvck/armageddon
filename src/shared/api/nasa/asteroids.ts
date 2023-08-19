import { isAxiosError } from 'axios';
import { apiInstance } from './base';
import type { NEOFeed, NearEarthObject } from './models';

const FEED_URL = `/feed`;
const NEO_URL = `/neo`;

export type GetAsteroidsListParams = {
  start_date: string;
  end_date?: string;
};

export const getAsteroidsList = async (
  params: GetAsteroidsListParams
): Promise<NearEarthObject[]> => {
  try {
    const { data } = await apiInstance.get<NEOFeed>(FEED_URL, { params });
    const nearEarthObjects = Object.values(data.near_earth_objects)
      .flat()
      .sort((a, b) =>
        a.close_approach_data[0].close_approach_date > b.close_approach_data[0].close_approach_date
          ? 1
          : a.close_approach_data[0].close_approach_date <
            b.close_approach_data[0].close_approach_date
          ? -1
          : 0
      );
    return nearEarthObjects;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        const response = error.response;
        if (response.status === 404) {
          throw new Error('Данные не найдены :(');
        }
      }
    }
    throw new Error('Произошла неизвестная ошибка!');
  }
};

export const getAsteroidById = async (asteroidId: string): Promise<NearEarthObject> => {
  try {
    const { data } = await apiInstance.get<NearEarthObject>(`${NEO_URL}/${asteroidId}`);
    return data;
  } catch (error) {
    throw new Error('Произошла неизвестная ошибка!');
  }
};
