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

  useEffect(() => {
    generateDates(startDate, frequency);
  }, [startDate, frequency]);

  function generateDates(date: Date | string, number: number) {
    // Reset list
    setDateList([])

    for (let i = 0; i < number - 1; i++) {
      let next: string = dayjs(date).add(i, 'day').format('ddd, MMM D');
      console.log(number)
      setDateList(list => [...list, next])
    }
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
            <div className='date-row'>
              {dateList.map((value: any, index: number) => {
                return <div className='date-cell' key={index}>{value}</div>
              })}
            </div>
            <Hours frequency={frequency} />
          </div>
        </div>
      </div>
    </>
  )
}