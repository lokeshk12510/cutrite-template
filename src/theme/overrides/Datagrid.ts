import { Theme } from '@mui/material'

export default function MuiDatagrid(theme: Theme) {
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[800],
                    '& .MuiDataGrid-cell:focus': {
                        outline: 'none',
                        boxShadow: 'none',
                    },
                },
                virtualScrollerContent: {
                    gap: 7,
                },

                columnSeparator: {
                    display: 'none',
                },
                columnHeaders: {
                    minHeight: '40px!important',
                    maxHeight: '40px!important',
                    backgroundColor: theme.palette.secondary.main,
                },
                columnHeaderTitle: {
                    color: theme.palette.secondary.contrastText,
                    '&:first-of-type': {
                        borderTopLeftRadius: theme.spacing(0.7),
                        borderBottomLeftRadius: theme.spacing(0.7),
                    },
                    '&:last-of-type': {
                        borderTopRightRadius: theme.spacing(0.7),
                        borderBottomRightRadius: theme.spacing(0.7),
                    },
                },
                iconButtonContainer: {
                    '& .MuiButtonBase-root': {
                        color: theme.palette.secondary.contrastText,
                    },
                },
            },
        },
    }
}
