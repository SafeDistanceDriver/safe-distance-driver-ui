export const formatDateToTime = (date: string) => {
  const convertedDate = new Date(date);
  return `${convertedDate.getHours()}:${convertedDate.getMinutes()}:${convertedDate.getSeconds()}.${convertedDate.getMilliseconds()}`;
};
