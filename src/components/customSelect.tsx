import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

type CustomSelectProps = {
  label?: string;
  defaultValue: string;
  values: string[];
  id?: string;
  handleChange: (newValue: string) => void;
};

export default function CustomSelect(props: CustomSelectProps) {
  const { label, defaultValue, values, id, handleChange } = props;
  const [value, setValue] = useState(defaultValue);

  return (
    <FormControl style={{ flex: 1 }}>
      {label && <InputLabel id={id}>{label}</InputLabel>}
      <Select
        labelId={id}
        label={label}
        onChange={(e: any) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
        value={value}
      >
        {values.map((x) => (
          <MenuItem key={x} value={x}>
            {x}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

CustomSelect.defaultProps = {
  label: '',
  id: '',
};
