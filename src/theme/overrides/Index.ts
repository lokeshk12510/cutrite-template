import { Theme } from '@mui/material'
import MuiButton from './Button'
import MuiForm from './Form'
import MuiDatagrid from './Datagrid'

export default function componentsOverrides(theme: Theme) {
    return Object.assign(MuiButton(theme), MuiForm(theme), MuiDatagrid(theme))
}
