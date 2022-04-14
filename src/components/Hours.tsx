import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import plusImg from '../assets/img/plus.svg';
import minusImg from '../assets/img/minus.svg'

type DropdownProps = {
  handleTotalHours: Function
}

export default function Hours({ handleTotalHours }: DropdownProps) {

  const [hours, setHours] = useState<Array<number>>([]);
  const [hoursList, setHoursList] = useState<Array<any>>([]);
  const [totalHours, setTotalHours] = useState<number>(0);

  useEffect(() => {
    let totalHours;
    if (hours.length > 0) {
      totalHours = hours?.reduce((val, total) => {
        return val + total;
      });
      setTotalHours(totalHours)
    }
    else {
      setTotalHours(0)
    }
  }, [hours]);

  useEffect(() => {
    console.log(totalHours)
    handleTotalHours(totalHours)
  }, [totalHours])

  function addHours(value: React.SetStateAction<any>) {
    const newHours = [...hours];
    newHours[hoursList.length] = value;
    newHours.length = hoursList.length + 1;
    setHours(newHours);
  }

  const incremenetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setHoursList([...hoursList, <div className='timepicker'><Clock key={hoursList.length} handleHoursChange={addHours} /></div>])
  };

  const decremenetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newHoursList = [...hoursList];
    newHoursList.pop();
    setHoursList(newHoursList);
    const newHours = [...hours];
    newHours.pop();
    setHours(newHours);
  };

  return (
    <div className='hours-wrapper'>
      <div className='timepickers'>
        <div className='hours-row'>{hoursList}</div>
        <button className='btn btn-hours' onClick={incremenetHandler}><img alt="add" src={plusImg} /></button>
        <button className='btn btn-hours' onClick={decremenetHandler}><img alt="subtract" src={minusImg} /></button>
      </div>
      <div className="total-hours">{totalHours} hrs</div>
    </div>
  )
}