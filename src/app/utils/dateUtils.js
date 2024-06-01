import { useState } from 'react';

export const parseUTCDate = (dateString) => {
  return new Date(dateString + 'T00:00');
};

export const isDateValid = (dateStr) => {
  return !isNaN(new Date(dateStr));
};

// export const currentDate = new Date();

export const formatedCurrentDate = (currentDate) => {
  // console.log(`This is in the Date Utils: ${currentDate}`);
  let localMonthPlusOne = currentDate.getMonth() + 1;
  let localDay = currentDate.getDate()
  let month = '';
  let day = '';
  // console.log(parseInt(currentDate.getDate()))
  if (localDay < 10) {
    day = `0${localDay}`;
  } else {
    day = `${localDay}`;
  }
  if (localMonthPlusOne < 10) {
    month = `0${localMonthPlusOne}`;
  } else {
    month = `${localMonthPlusOne}`;
  }
  return `${currentDate.getFullYear()}-${month}-${day}`;
};
