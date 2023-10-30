export default function MuiButton() {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: 100,
                    padding: '4px 10px',
                    textTransform: 'Capitalize',
                    fontWeight: 400,
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
