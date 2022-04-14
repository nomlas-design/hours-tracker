import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Dates from './Dates'
import Hours from './Hours'
import dayjs from 'dayjs'
import Locale from '../lib/locale'

dayjs.locale(Locale)

export default function Table() {

  const [startDate, setStartDate] = useState<any>(dayjs());
  const [dateList, setDateList] = useState<Array<string>>([]);
  const [frequency, setFrequency] = useState<number>(8);
  const [totalHours, setTotalHours] = useState<Object>({});
  const [hoursSum, setHoursSum] = useState<number>(0);

  useEffect(() => {
    generateDates(startDate, frequency);
  }, [startDate, frequency]);

  useEffect(() => {
    calculateTotalHours();
  }, [totalHours])


  function generateDates(date: Date | string, number: number) {
    // Reset lists
    setDateList([])
    setTotalHours({})

    for (let i = 0; i < number - 1; i++) {
      let next: string = dayjs(date).add(i, 'day').format('ddd, MMM D');
      setDateList(list => [...list, next]);
      setTotalHours(totalHours => ({ ...totalHours, [next]: 0 }))
    }
  }

  function addDayHours(hours: React.SetStateAction<number>, date: string) {
    hours !== undefined && setTotalHours({ ...totalHours, [date]: hours })
    console.log(totalHours)
  }

  function calculateTotalHours() {
    // Check object isn't empty and calculate total hours
    const hours = Object.keys(totalHours).length !== 0 && Object.values(totalHours).reduce((val, total) => val + total);
    setHoursSum(hours);
  }

  return (
    <>
      <div className='app'>
        <div className='app-controls'>
          <Dropdown handleChange={(value: React.SetStateAction<number>) => setFrequency(value)} value={frequency} />
          <Dates handleChange={(date: React.SetStateAction<Date>) => setStartDate(date)} startDate={startDate} />
        </div>
        <div className='table'>
          <div className='grid'>
            {dateList.map((value: string, index: number) => {
              return <div className='date-row'>
                <div className='date-cell'>{value}</div>
                <Hours key={value} handleTotalHours={(hours: React.SetStateAction<number>) => addDayHours(hours, value)} />
              </div>
            })}
          </div>
          {hoursSum}
        </div>
      </div>
    </>
  )
}