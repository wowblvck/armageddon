import { API_KEY, BASE_URL } from '@shared/config';
import { findNearestDate } from '@shared/utils';
import moment from 'moment';

import {
  ErrorCode,
  type NASAError,
  type NEOFeed,
  type NearEarthObject,
  type NearEarthObjectFull,
} from './models';

const FEED_URL = `/feed`;
const NEO_URL = `/neo`;

export type GetAsteroidsListParams = {
  end_date?: string;
  start_date: string;
};

export const getAsteroidsList = async ({
  end_date,
  start_date,
}: GetAsteroidsListParams): Promise<NearEarthObjectFull[]> => {
  const res = await fetch(
    `${BASE_URL}${FEED_URL}?api_key=${API_KEY}&start_date=${start_date}&end_date=${end_date}`,
    {
      cache: 'no-store',
    }
  );
  if (!res.ok) {
    const errorResponse: NASAError = await res.json();

    if ('error' in errorResponse) {
      switch (errorResponse.error.code) {
        case ErrorCode.API_KEY_INVALID:
          throw new Error('Неверный ключ API!');
        default:
          throw new Error('Неизвестная ошибка!');
      }
    } else {
      const { code, error_message } = errorResponse;
      if (code === 404) {
        throw new Error('Данные об астероидах не найдены');
      }
      throw new Error(`${error_message}`);
    }
  }
  const data: NEOFeed = await res.json();
  if (data.element_count === 0) {
    throw new Error('Данные не найдены!');
  }
  return Object.keys(data.near_earth_objects).flatMap((key) =>
    data.near_earth_objects[key].map((item) => {
      return { ...item, date: key };
    })
  );
};

export const getAsteroidById = async (asteroidId: string): Promise<NearEarthObjectFull> => {
  const res = await fetch(`${BASE_URL}${NEO_URL}/${asteroidId}?api_key=${API_KEY}`);

  if (!res.ok) {
    if (res.status === 404) throw new Error('Данные об астероиде не найдены!');
    const errorResponse: NASAError = await res.json();

    if ('error' in errorResponse) {
      switch (errorResponse.error.code) {
        case ErrorCode.API_KEY_INVALID:
          throw new Error('Неверный ключ API!');
        default:
          throw new Error('Неизвестная ошибка!');
      }
    }
  }
  const data: NearEarthObject = await res.json();

  const approachDates = data.close_approach_data.map((item) => item.close_approach_date);
  const date = findNearestDate(approachDates, moment().format('YYYY-MM-DD'));

  return { ...data, date: date ? date : '' };
};
