export default function MuiButton() {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: 100,
                    padding: '4px 10px',
                    fontWeight: 400,
                    '&.MuiButtonBase-root': {
                        textTransform: 'capitalize',
                    },
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
    }
}
