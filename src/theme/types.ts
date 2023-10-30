import { PaletteMode } from '@mui/material'
import { ThemeColor } from './themeOptions'

export type Settings = {
    mode: PaletteMode
    themeColor: ThemeColor
}

// Augment the palette to include an neutral color
declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary']
    }

    interface PaletteOptions {
        neutral?: PaletteOptions['primary']
    }
}

// Update the Button's color options to include an neutral option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        neutral: true
    }
}
