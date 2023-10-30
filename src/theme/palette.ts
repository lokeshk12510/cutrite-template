import { PaletteMode, alpha, darken, lighten } from '@mui/material'

const themeColors = {
    primary: '#003D79',
    secondary: '#23282F',
    success: '#32a100',
    warning: '#F36F22',
    error: '#d80000',
    info: '#33C2FF',
    black: '#223354',
    white: '#ffffff',
}

const palette = (mode: PaletteMode) => {
    // ** Vars
    const lightColor = '58, 53, 65'
    const darkColor = '231, 227, 252'
    const mainColor = mode === 'light' ? lightColor : darkColor

    return {
        mode,
        common: {
            black: themeColors.black,
            white: themeColors.white,
        },
        primary: {
            lighter: alpha(themeColors.primary, 0.1),
            light: lighten(themeColors.primary, 0.3),
            main: themeColors.primary,
            dark: darken(themeColors.primary, 0.2),
        },
        secondary: {
            lighter: alpha(themeColors.secondary, 0.1),
            light: lighten(themeColors.secondary, 0.25),
            main: themeColors.secondary,
            dark: darken(themeColors.secondary, 0.2),
        },
        success: {
            lighter: alpha(themeColors.success, 0.1),
            light: lighten(themeColors.success, 0.3),
            main: themeColors.success,
            dark: darken(themeColors.success, 0.2),
        },
        warning: {
            lighter: alpha(themeColors.warning, 0.1),
            light: lighten(themeColors.warning, 0.3),
            main: themeColors.warning,
            dark: darken(themeColors.warning, 0.1),
            contrastText: themeColors.white,
        },
        error: {
            lighter: alpha(themeColors.error, 0.1),
            light: lighten(themeColors.error, 0.3),
            main: themeColors.error,
            dark: darken(themeColors.error, 0.2),
        },
        info: {
            lighter: alpha(themeColors.info, 0.1),
            light: lighten(themeColors.info, 0.3),
            main: themeColors.info,
            dark: darken(themeColors.info, 0.2),
        },
        neutral: {
            light: lighten(themeColors.black, 0.3),
            main: themeColors.black,
            dark: darken(themeColors.black, 0.2),
        },
        grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#060B10',
            900: '#212121',
            A100: '#D5D5D5',
            A200: '#AAAAAA',
            A400: '#616161',
            A700: '#303030',
            A800: '#000000',
            A900: '#000000B2',
        },
        text: {
            primary: `rgba(${mainColor}, 1)`,
            secondary: `rgba(${mainColor}, 0.68)`,
            disabled: `rgba(${mainColor}, 0.38)`,
        },
        divider: `rgba(${mainColor}, 0.24)`,
        background: {
            paper: mode === 'light' ? '#FFF' : '#312D4B',
            default: mode === 'light' ? '#F1F2F6' : '#28243D',
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.04)`,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.3)`,
            disabledBackground: `rgba(${mainColor}, 0.10)`,
            focus: `rgba(${mainColor}, 0.12)`,
        },
    }
}

export default palette
