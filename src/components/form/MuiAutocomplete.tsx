import { TextField } from '@mui/material'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'

interface CustomAutocompleteProps extends Omit<AutocompleteProps<unknown, boolean, boolean, boolean>, 'renderInput'> {
    // You can add any additional props you want to pass to the Autocomplete component
    placeholder?: string
}

const MuiAutocomplete = (props: CustomAutocompleteProps) => {
    return (
        <Autocomplete
            disablePortal
            {...props}
            renderInput={(params) => <TextField {...params} placeholder={props.placeholder} />}
        />
    )
}

export default MuiAutocomplete
