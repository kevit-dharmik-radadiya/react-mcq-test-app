import { Box, Switch } from '@mui/material';
import CustomCheckbox from '../../components/Checkbox/Checkbox';

const Components = () => {
  return (
    <Box className="components">
      <Box className="box">
        <CustomCheckbox />
        <CustomCheckbox label="Label" />
        <Switch defaultChecked />
      </Box>
    </Box>
  );
};

export default Components;
