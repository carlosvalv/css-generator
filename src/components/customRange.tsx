import { Slider } from '@mui/material';

type CustomRangeProps = {
  defaultValue: number;
  maxValue: number;
  minValue: number;
  handleChange: (newValue: number) => void;
};

export default function CustomRange(props: CustomRangeProps) {
  const { defaultValue, maxValue, minValue, handleChange } = props;

  const handleOnChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) return;
    handleChange(newValue);
  };

  return (
    <Slider
      max={maxValue}
      min={minValue}
      defaultValue={defaultValue}
      aria-label="Default"
      valueLabelDisplay="auto"
      color="primary"
      onChange={handleOnChange}
    />
  );
}
