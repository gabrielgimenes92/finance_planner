export const parseUTCDate = (dateString) => {
  return new Date(dateString + 'T00:00');
};

export const isDateValid = (dateStr) => {
  return !isNaN(new Date(dateStr));
};
