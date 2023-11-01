import { Close } from '@mui/icons-material'
import { Theme } from '@mui/material'

export default function MuiForm(theme: Theme) {
    return {
        MuiTextField: {
            defaultProps: {
                helperText: ' ',
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& input': {
                        padding: '2px 6px 2px',
                        minHeight: 21,
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 3,
                    fontSize: '0.6rem',
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                    fontWeight: '500',
                    '&.gridLabel': {
                        top: 4,
                    },
                },
            },
        },
        MuiAutocomplete: {
            defaultProps: {
                clearOnBlur: true,
                openOnFocus: true,
                autoHighlight: true,
            },
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        padding: 0,
                        '& .MuiAutocomplete-input': {
                            padding: '2px 6px 2px',
                        },
                    },
                    '& .MuiAutocomplete-listbox': {
                        backgroundColor: '#ccc',
                    },
                },
                endAdornment: {
                    top: 'calc(50% - 12px)',
                },
                popupIndicator: {
                    '& svg': {
                        fontSize: '1.2rem',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    '& .MuiAutocomplete-listbox': {
                        padding: '2px 0',
                        '& .MuiAutocomplete-option': {
                            fontSize: '0.85rem',
                        },
                    },
                },
            },
        },
        MuiChip: {
            defaultprops: {
                icon: Close,
            },
            styleOverrides: {
                root: {
                    '&.MuiAutocomplete-tag': {
                        borderRadius: 0,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        height: '25px',
                        '& .MuiChip-label': {
                            paddingLeft: 6,
                            paddingRight: 12,
                        },
                        '& .MuiChip-deleteIcon': {
                            color: theme.palette.primary.contrastText,
                            fontSize: 18,
                        },
                    },
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: 6,
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                },
            },
        },
    }
}
