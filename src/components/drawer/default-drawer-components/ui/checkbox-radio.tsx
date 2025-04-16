import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import { Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';

const CustomFormControlLabel = styled(FormControlLabel)({
  justifyContent: 'space-between',
  background: '#F9F9F9',
  padding: '16px',
  borderRadius: '16px',
  fontWeight: 600,
});

const RadioCheckbox = styled(Checkbox)({
  order: 1,
  borderRadius: '16px',
  outline: '1px solid #B7AEAE',
  color: 'white',
  '&.Mui-checked': {
    color: '#00A3FF',
    outline: 'none',
  },
});

interface CheckBoxRadioProps {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  name: string;
}

export const CheckBoxRadio = ({ checked, handleChange, title, name }: CheckBoxRadioProps) => {
  return (
    <CustomFormControlLabel
      control={
        <RadioCheckbox
          icon={<RadioButtonUnchecked />}
          checkedIcon={<CheckCircle />}
          checked={checked}
          onChange={handleChange}
          name={name}
        />
      }
      label={title}
    />
  );
};
