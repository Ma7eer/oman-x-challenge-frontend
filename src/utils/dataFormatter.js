export const generateDateWithCorrectFormat = (dateValue) => {
  let year = new Date(dateValue).getFullYear();
  let month = new Date(dateValue).getMonth();
  let day = new Date(dateValue).getDate();
  return day < 10 && month < 10
    ? `${year}-0${month}-0${day}`
    : month < 10
    ? `${year}-${month}-0${day}`
    : day < 10
    ? `${year}-${month}-0${day}`
    : `${year}-${month}-${day}`;
};
