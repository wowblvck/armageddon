import { apiInstance } from './base';
import type { NEOFeed, NearEarthObject } from './models';
import { AxiosPromise } from 'axios';

const FEED_URL = `/feed`;
const NEO_URL = `/neo`;

export type GetAsteroidsListParams = {
  start_date: string;
  end_date?: string;
};

export const getAsteroidsList = (params: GetAsteroidsListParams): AxiosPromise<NEOFeed[]> => {
  return apiInstance.get(FEED_URL, { params });
};

export const getAsteroidById = (asteroidId: string): AxiosPromise<NearEarthObject> => {
  return apiInstance.get(`${NEO_URL}/${asteroidId}`);
};
