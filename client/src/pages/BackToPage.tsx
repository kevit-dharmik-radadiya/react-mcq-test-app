import { ArrowBackIosNew } from '@mui/icons-material';
import { ButtonProps, IconButton } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

interface BackButtonProps extends ButtonProps {
  to: string;
  text: string;
}

const BackToPage = ({ to, text }: BackButtonProps) => {
  return (
    <div className="flex-center my-2 ">
      <IconButton
        color="primary"
        aria-label="Left"
        component={RouterLink}
        to={to}
        size="small"
        sx={{
          border: '2px solid #009978',
        }}
      >
        <ArrowBackIosNew fontSize="inherit" />
      </IconButton>
      <span className="text-secondary text-body mx-2">Back to the {text}</span>
    </div>
  );
};

export default BackToPage;
