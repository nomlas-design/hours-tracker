import { useState } from 'react';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';

type DropdownProps = {
  start: boolean
  handleTimeChange: Function
}

export default function Clock({ start, handleTimeChange }: DropdownProps) {

  const [time, setTime] = useState<Date | null>();

  const handleClockChange = (time: Date | null) => {
    setTime(time);
    handleTimeChange(time);
  };

  return (
    <TimePicker
      label={start ? 'Clock in' : 'Clock out'}
      value={time}
      onChange={handleClockChange}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}