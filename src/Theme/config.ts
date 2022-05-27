import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#1E88E5',
      main: '#2196F3',
      dark: '#0079ae',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#dddf47',
      main: '#a8ad00',
      dark: '#757e00',
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        whiteSpace: 'nowrap',
        minWidth: 'auto',
      },
      outlined: {
        background: '#FFF',
      },
    },
    MuiFormLabel: {
      asterisk: {
        color: red[500],
      },
    },
    MuiInputLabel: {
      asterisk: {
        color: red[500],
      },
      outlined: {
        backgroundColor: 'white',
        paddingLeft: 2,
        paddingRight: 2,
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: 'white',
      },
      adornedStart: {
        paddingLeft: 0,
      },
      adornedEnd: {
        paddingRight: 0,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
      },
    },
    MuiListItemText: {
      root: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
    MuiChip: {
      root: {
        margin: 0,
        maxWidth: '100%',
      },
    },
    MuiCardContent: {
      root: {
        padding: '8px',
        '&:last-child': {
          padding: '8px !important',
        },
      },
    },
    MuiFormControlLabel: {
      labelPlacementStart: {
        marginRight: 0,
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: '0 16px',
        minHeight: 'initial !important',
      },
      content: {
        margin: '0 !important',
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: '0 16px 8px',
        flexWrap: 'wrap',
      },
    },
    MuiTypography: {
      root: {
        wordBreak: 'break-word',
        padding: 0,
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'white',
        },
        '&$focused': {
          backgroundColor: 'white',
        },
        '&$disabled': {
          color: 'initial',
          opacity: 0.6,
          backgroundColor: 'white',
          '&:before': {
            borderBottomStyle: 'solid',
          },
        },
      },
      underline: {
        '&$disabled': {
          '&:before': {
            borderBottomStyle: 'solid',
          },
        },
      },
      adornedEnd: {
        paddingRight: 0,
      },
    },
    MuiSelect: {
      filled: {
        backgroundColor: 'white !important',
      },
    },
    MuiButtonGroup: {
      groupedTextHorizontal: {
        border: 'none !important',
      },
    },
  },
});
