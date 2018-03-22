export const formatDateToTime = (date: string): string => {
  const convertedDate = new Date(date);
  const hours = convertHourTo12Hour(convertedDate.getHours());
  const minutes = padTime(convertedDate.getMinutes());
  const seconds = padTime(convertedDate.getSeconds());
  return `${hours}:${minutes}:${seconds}.${convertedDate.getMilliseconds()}`;
};

const padTime = (time: number): string => time < 10 ? '0' + time : '' + time;
const convertHourTo12Hour = (hour: number): string => hour < 12 ? padTime(hour) : padTime(hour - 12);
