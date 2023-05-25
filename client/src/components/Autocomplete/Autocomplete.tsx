import _ from 'lodash';
import { ExpandMore } from '@mui/icons-material';
import {
  Autocomplete,
  Grow,
  InputAdornment,
  Paper,
  PaperProps,
  TextField,
} from '@mui/material';
import { ElementType, ForwardedRef, SyntheticEvent, forwardRef } from 'react';

type Option = {
  label: string;
  value: string;
};

interface AutocompleteProps {
  id: string;
  value: any;
  defaultValue?: any;
  width?: string;
  placeholder: string;
  dataOptions: Option[];
  adornmentStart: ElementType;
  onChange: (event: SyntheticEvent, value: any) => void;
  className?: string;
}

const PaperComponent = (
  paperProps: PaperProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Grow in>
      <Paper {...paperProps} ref={ref} />
    </Grow>
  );
};
const PaperComponentForward = forwardRef(PaperComponent);

const CustomAutocomplete = (props: AutocompleteProps) => {
  const {
    id,
    value,
    width,
    placeholder,
    dataOptions,
    adornmentStart: AdornmentStart,
    onChange,
    className,
  } = props;
  return (
    <Autocomplete
      id={id}
      value={value}
      options={dataOptions}
      placeholder={placeholder}
      popupIcon={<ExpandMore />}
      className={className}
      sx={{ width: { width } }}
      PaperComponent={PaperComponentForward}
      getOptionLabel={(option) => {
        return option?.label ?? option;
      }}
      isOptionEqualToValue={(option, optionValue: string | Option) => {
        if (_.isObject(optionValue)) {
          return option.value === optionValue.value;
        }
        return option.value === optionValue;
      }}
      onChange={(event, eventValues) => {
        onChange(event, eventValues);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <AdornmentStart />
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

CustomAutocomplete.defaultProps = {
  width: 'auto',
  defaultValue: '',
  className: '',
};

export default CustomAutocomplete;
