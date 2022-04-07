import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

type DatesProps = {
  handleChange: Function
  startDate: any
}

export default function Dropdown({ handleChange, startDate }: DatesProps) {

  const onChange = (newValue: any) => {
    handleChange(newValue);
  };

  return (
    <>
      <DatePicker
        label="Week Starting"
        openTo="day"
        views={['year', 'month', 'day']}
        value={startDate}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  )
}