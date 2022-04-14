import { SetStateAction, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import dayjs from 'dayjs'

type DropdownProps = {
  handleHoursChange: Function
}

export default function Clock({ handleHoursChange }: DropdownProps) {

  const [timeIn, setTimeIn] = useState<Date | null>();
  const [timeOut, setTimeOut] = useState<Date | null>();

  useEffect(() => {
    const hoursCalculated = calculateHours()
    handleHoursChange(hoursCalculated);
  }, [timeIn, timeOut])

  const handleInChange = (value: SetStateAction<Date | null | undefined>) => {
    setTimeIn(value);
  }

  const handleOutChange = (value: SetStateAction<Date | null | undefined>) => {
    setTimeOut(value);
  }

  function calculateHours() {
    const hours = dayjs(timeOut).diff(dayjs(timeIn), 'm', true) / 60;
    const hoursPrecision = Number((Math.abs(hours) * 100).toPrecision(15));
    const minutesRounded = Math.round(hoursPrecision) / 100 * Math.sign(hours);
    return minutesRounded > 0 ? minutesRounded : 0;
  }

  return (
    <div className="hours-cell">
      <TimePicker
        label='Clock in'
        value={timeIn}
        onChange={handleInChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <TimePicker
        label='Clock out'
        value={timeOut}
        onChange={handleOutChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>

  )
}