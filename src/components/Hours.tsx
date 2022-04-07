import { useEffect, useState } from 'react';
import Clock from './Clock';
import dayjs from 'dayjs'

type DropdownProps = {
  frequency: number
}

export default function Hours({ frequency }: DropdownProps) {

  const [timeIn, setTimeIn] = useState<Date>(new Date());
  const [timeOut, setTimeOut] = useState<Date>(new Date());
  const [hours, setHours] = useState<number | undefined>();
  const [clockIns, setClockIns] = useState<number>(1);
  const [rows, setRows] = useState<Array<any>>([]);

  function calculateHours() {
    const hoursIn = dayjs(timeIn);
    const hoursOut = dayjs(timeOut);
    const hoursWorked = hoursOut.diff(hoursIn, 'h', true);
    const rounded = Math.round(hoursWorked * 10) / 10;
    rounded > 0 ? setHours(rounded) : setHours(0);
  }

  useEffect(() => {
    calculateHours();
  }, [timeIn, timeOut]);

  const listItems = rows.map((clockIns, id) =>
    <div className='hours-row'>
      <Clock key={id} handleTimeChange={(value: React.SetStateAction<any>) => setTimeIn(value)} start={true} />
    </div>);

  return (
    { listItems }
  )
}