import React from 'react';

const Countdate = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let dayCount = 0;
  while (end > start) {
    dayCount++;
    start.setDate(start.getDate() + 1);
  }
  return dayCount;
};

export default Countdate;
