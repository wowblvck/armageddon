import moment, { Moment } from 'moment';

export const findNearestDate = (arrayOfDates: string[], findDate: string): null | string => {
  try {
    let nearestDate: Moment | undefined,
      momentsDate: Moment[] = [];

    if (moment(findDate).isValid()) {
      momentsDate = arrayOfDates
        .map((date) => {
          if (moment(date).isValid()) {
            const dateMoment = moment(date);
            const diff = dateMoment.diff(moment(findDate), 'days');
            if (diff >= 0) {
              if (!nearestDate || dateMoment.diff(nearestDate, 'days') < 0) {
                nearestDate = dateMoment;
              }
            }
            return dateMoment;
          }
          return null;
        })
        .filter((dateMoment) => dateMoment !== null) as Moment[];
    }

    if (!nearestDate) {
      nearestDate = moment.max(momentsDate) as Moment;
    }

    return nearestDate.format('YYYY-MM-DD');
  } catch (error) {
    console.error(`Ошибка поиска ближайшей даты ${error}`);
    return null;
  }
};
