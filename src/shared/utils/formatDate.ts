export const formatDate = (dateString: string) => {
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  const [year, month, day] = dateString.split('-');
  const monthIndex = parseInt(month, 10) - 1;

  return `${parseInt(day, 10)} ${months[monthIndex]} ${year}`;
};
