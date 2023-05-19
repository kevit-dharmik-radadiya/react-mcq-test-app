import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Company from '../../assets/images/logos/Company';

interface LoaderProps {
  title?: string;
  text?: ReactNode;
}

const Loader = (props: LoaderProps) => {
  const { title, text } = props;
  return (
    <Box className="loader text-center">
      <Box className="loader-icon">
        <Company size="6em" circleFill="#00997880" />
      </Box>
      {title && <h2 className="text-secondary m-0">{title}</h2>}
      {text && <p className="text-secondary m-0">{text}</p>}
    </Box>
  );
};

Loader.defaultProps = {
  title: '',
  text: '',
};

export default Loader;
