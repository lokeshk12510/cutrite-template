const GlobalStyles = () => {
    return {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        html: {
            width: '100%',
            height: 'auto',
            WebkitOverflowScrolling: 'touch',
        },
        '#root': {
            width: '100%',
            height: '100%',
        },
        textarea: {
            fontFamily:
                'Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        },
        input: {
            fontFamily:
                'Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            '&[type=number]': {
                MozAppearance: 'textfield',
                '&::-webkit-outer-spin-button': {
                    margin: 0,
                    WebkitAppearance: 'none',
                },
                '&::-webkit-inner-spin-button': {
                    margin: 0,
                    WebkitAppearance: 'none',
                },
            },
            '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 100px white inset !important;',
                '&:hover': {
                    WebkitBoxShadow: '0 0 0 100px white inset !important;',
                },
                '&:focus': {
                    WebkitBoxShadow: '0 0 0 100px white inset !important;',
                },
                '&:active': {
                    WebkitBoxShadow: '0 0 0 100px white inset !important;',
                },
            },
        },
        img: {
            display: 'block',
            maxWidth: '100%',
        },
        div: {
            '&.page-holder': {
                display: 'grid',
                placeItems: 'center',
                height: '70vh',
            },
        },
    }
}

export default GlobalStyles
