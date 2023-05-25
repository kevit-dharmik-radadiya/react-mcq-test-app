import { createTheme } from '@mui/material';

const COLOR_PALETTE = {
  PRIMARY: '#009978',
  SECONDARY: '#979797',
  WHITE: '#FFFFFF',
  BG_LIGHT: '#00997821',
  BORDER: '#00000014',
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLOR_PALETTE.PRIMARY,
      contrastText: COLOR_PALETTE.WHITE,
    },
    secondary: {
      main: COLOR_PALETTE.SECONDARY,
      contrastText: COLOR_PALETTE.WHITE,
    },
  },
  typography: {
    fontFamily: 'Poppins',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight: 0,
          padding: '10px',
          transition: 'all 0.3s',
          '&:hover': {
            backgroundColor: COLOR_PALETTE.BG_LIGHT,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          padding: '0 24px',
          height: '45px',
          fontSize: '1.125rem',
          whiteSpace: 'nowrap',
          boxShadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.16)',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: '6px',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            fontSize: '18px',
          },
          '&.MuiInputLabel-shrink': {
            fontSize: '18px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '20px',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontSize: '14px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          '.MuiInputAdornment-root': {
            color: COLOR_PALETTE.SECONDARY,
          },
          '&.Mui-focused': {
            '.MuiInputAdornment-root, .MuiSelect-select svg': {
              color: COLOR_PALETTE.PRIMARY,
            },
            '&.Mui-error': {
              '.MuiInputAdornment-root': {
                color: '#d32f2f',
              },
            },
          },
          '&.Mui-focused .MuiInputAdornment-root': {
            color: COLOR_PALETTE.PRIMARY,
          },
          '.MuiOutlinedInput-notchedOutline': {
            fontSize: '18px',
            borderColor: COLOR_PALETTE.BORDER,
            borderWidth: '2px',
          },
          '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d32f2f',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: COLOR_PALETTE.PRIMARY,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '.MuiInputAdornment-root': {
            margin: '8px',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          paddingTop: '5px',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: COLOR_PALETTE.SECONDARY,
          margin: '15px auto',
          borderRadius: '10px',
          '&.active': {
            backgroundColor: COLOR_PALETTE.BG_LIGHT,
            color: COLOR_PALETTE.PRIMARY,
            '.MuiListItemIcon-root svg': {
              fill: COLOR_PALETTE.PRIMARY,
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          paddingTop: '5px',
          paddingBottom: '5px',
          transition: 'all 0.3s',
          '&:hover': {
            backgroundColor: COLOR_PALETTE.BG_LIGHT,
            color: COLOR_PALETTE.PRIMARY,
            borderRadius: '10px',
            '.MuiListItemIcon-root svg': {
              fill: COLOR_PALETTE.PRIMARY,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '40px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          '.MuiTypography-root': {
            fontWeight: '500',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiDrawer-paper': {
            borderRight: 'none',
            transition: 'all 400ms cubic-bezier(0, 0, 0.2, 1) 0ms !important',
          },
          '&.MuiAutocomplete-paper': {
            color: '#263238',
            borderRadius: '10px',
            border: '2px solid #00000014',
            marginTop: '3px',
            boxShadow: 'none',
            '.MuiAutocomplete-listbox .MuiAutocomplete-option': {
              margin: '2px 5px',
              borderRadius: '10px',
              ' &[aria-selected="true"]': {
                backgroundColor: COLOR_PALETTE.BG_LIGHT,
                color: '#009978',
              },
            },
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR_PALETTE.BG_LIGHT,
          transform: 'scale(1)',
          '&::after': {
            background:
              'linear-gradient(90deg,transparent,#00997821,transparent)',
          },
          '&>*': {
            visibility: 'unset',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: '54px',
          height: '34px',
          padding: '5px',
          '.MuiSwitch-thumb': {
            width: '15px',
            height: '15px',
          },
          '.MuiSwitch-track': {
            backgroundColor: '#e9e9ea',
            borderRadius: '12px',
            opacity: 1,
          },
        },
      },
    },
  },
});

export default theme;
