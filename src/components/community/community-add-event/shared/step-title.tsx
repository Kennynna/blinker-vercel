import Typography from '@mui/material/Typography';

interface StepTitleProps {
  title: string;
  sx?: object; // Позволяет передавать любые стили
}

export const StepTitle = ({ title, sx }: StepTitleProps) => {
  return (
    <Typography sx={{ color: '#424242', fontSize: 20, fontWeight: 700, textAlign: 'center', ...sx }}>
      {title}
    </Typography>
  );
};
