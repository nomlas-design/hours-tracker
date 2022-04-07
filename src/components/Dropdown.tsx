import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type DropdownProps = {
  handleChange: Function
  value: any
}

export default function Dropdown({ handleChange, value }: DropdownProps) {

  const onChange = (event: SelectChangeEvent) => {
    handleChange(event.target.value);
  };

  return (
    <>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
        <Select
          labelId="Frequency"
          id="frequency-select"
          value={value}
          label="Frequency"
          onChange={onChange}
        >
          <MenuItem value={8}>Weekly</MenuItem>
          <MenuItem value={16}>Fortnightly</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}