export const formatDate = (createdOn: string) => {
  const date = new Date(createdOn);
  const month = date.toLocaleString('ru-RU', { month: 'long' });
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const returnHours = (hours: number) => {
    if (hours < 10) {
      return `0${hours}`;
    }
    return hours;
  };

  const returnMinutes = (minutes: number) => {
    if (minutes < 10) {
      return `0${minutes}`;
    }
    if (minutes.toString().length < 2) {
      return `${minutes}0`;
    }

    return minutes;
  };

  const formattedDate = `${date.getDate()} ${month} в ${returnHours(
    hours,
  )}:${returnMinutes(minutes)}`;
  return formattedDate;
};
