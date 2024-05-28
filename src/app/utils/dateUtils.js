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
  let monthPlusOne = currentDate.getMonth() + 1;
  let month = '';
  let day = '';
  if (currentDate.getDate < 10) {
    day = `${currentDate.getDate()}`;
    console.log(day);
  } else {
    day = `${currentDate.getDate()}`;
  }
  if (monthPlusOne < 10) {
    month = `0${monthPlusOne}`;
  } else {
    month = `${monthPlusOne}`;
  }

  return `${currentDate.getFullYear()}-${month}-${day}`;
};
