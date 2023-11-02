import { Theme } from '@mui/material'

export default function MuiButton(theme: Theme) {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: 100,
                    padding: '4px 10px',
                    fontWeight: 400,
                },
                contained: {
                    border: `1px solid ${theme.palette.primary.main}`,
                },
                sizeSmall: {
                    padding: '1px 3px',
                    minWidth: 0,
                    fontSize: 10,
                },
                iconSizeSmall: {
                    marginRight: 1,
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: '4px',
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    minWidth: 20,
                    height: 20,
                },
            },
        },
    }
}
