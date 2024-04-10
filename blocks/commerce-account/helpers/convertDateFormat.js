/* eslint-disable consistent-return */
function convertDateFormat(inputDate, stringDate = false) {
  if (!inputDate) return;

  const dateObj = new Date(inputDate);

  const monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();

  return stringDate ? `${monthsList[+month - 1]} ${day}, ${year}` : `${day}.${month}.${year}`;
}

export default convertDateFormat;
