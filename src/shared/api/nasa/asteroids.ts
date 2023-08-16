import { apiInstance } from './base';
import type { NEOFeed, NearEarthObject } from './models';
import { AxiosPromise } from 'axios';

const FEED_URL = `/feed`;
const NEO_URL = `/neo`;

export type GetAsteroidsListParams = {
  start_date: string;
  end_date?: string;
};

export const getAsteroidsList = async (
  params: GetAsteroidsListParams
): Promise<NearEarthObject[]> => {
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
};

export const getAsteroidById = (asteroidId: string): AxiosPromise<NearEarthObject> => {
  return apiInstance.get(`${NEO_URL}/${asteroidId}`);
};
