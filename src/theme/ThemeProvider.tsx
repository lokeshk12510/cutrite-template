import { ReactNode } from 'react'
import themeOptions from './themeOptions'
import { Settings } from './types'
import GlobalStyling from './globalStyles'
import { CssBaseline, GlobalStyles, StyledEngineProvider, createTheme, responsiveFontSizes } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import componentsOverrides from './overrides/Index'

interface ThemeProps {
    children: ReactNode
}

const themeConfig: Settings = {
    mode: 'light',
    themeColor: 'primary',
}

const ThemeWrapper = (props: ThemeProps) => {
    const { children } = props

    const coreThemeConfig = themeOptions(themeConfig)
    let theme = createTheme(coreThemeConfig)

    theme = createTheme(theme)

    theme = responsiveFontSizes(theme)
    theme.components = componentsOverrides(theme)

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles styles={() => GlobalStyling()} />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default ThemeWrapper
