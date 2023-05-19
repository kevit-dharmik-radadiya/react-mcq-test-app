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
  width?: string;
  placeholder: string;
  dataOptions: Option[];
  adornmentStart: ElementType;
  onChange: (event: SyntheticEvent, value: any) => void;
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
    ...restProps
  } = props;
  return (
    <Autocomplete
      id={id}
      value={value}
      options={dataOptions}
      placeholder={placeholder}
      popupIcon={<ExpandMore />}
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
      {...restProps}
    />
  );
};

CustomAutocomplete.defaultProps = {
  width: 'auto',
};

export default CustomAutocomplete;
