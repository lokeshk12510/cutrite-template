import { Settings } from './types'
import palette from './palette'
import typography from './typography'

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'black' | 'white'

const themeOptions = (settings: Settings) => {
    const { mode, themeColor } = settings

    console.log(mode, themeColor)

    const themeConfig = {
        palette: palette(mode),
        typography,
        shape: {
            borderRadius: 0,
        },
        mixins: {
            toolbar: {
                minHeight: 50,
            },
        },
    }

    return themeConfig
}

export default themeOptions
