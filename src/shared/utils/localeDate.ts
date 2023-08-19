import moment from 'moment';
import 'moment/locale/ru';

type monthAbbreviationsProps = {
  [key: string]: string;
};

const monthAbbreviations: monthAbbreviationsProps = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};

export const localeDate = (date: string) => {
  const parts = date.split('-');
  const year = parts[0];
  const month = monthAbbreviations[parts[1]];
  const day = parts[2].split(' ')[0];
  const time = parts[2].split(' ')[1];

  const formattedDate = `${year}-${month}-${day} ${time}`;
  const inputDate = moment(formattedDate, 'YYYY-MM-DD HH:mm');
  return inputDate.locale('ru').format('lll');
};
