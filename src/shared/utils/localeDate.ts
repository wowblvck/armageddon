import moment from 'moment';
import 'moment/locale/ru';

type monthAbbreviationsProps = {
  [key: string]: string;
};

const monthAbbreviations: monthAbbreviationsProps = {
  Apr: '04',
  Aug: '08',
  Dec: '12',
  Feb: '02',
  Jan: '01',
  Jul: '07',
  Jun: '06',
  Mar: '03',
  May: '05',
  Nov: '11',
  Oct: '10',
  Sep: '09',
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
