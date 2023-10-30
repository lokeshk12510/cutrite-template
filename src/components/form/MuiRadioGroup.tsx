import {
    Box,
    FormControlLabel,
    FormControlLabelProps,
    FormHelperText,
    Radio,
    RadioGroup,
    RadioGroupProps,
} from '@mui/material'

type OmitControlProp = Omit<FormControlLabelProps, 'control'>

interface MuiRadioGroupProps extends RadioGroupProps {
    radioList: OmitControlProp[]
    helperText?: string
}

const MuiRadioGroup = (props: MuiRadioGroupProps) => {
    const { radioList, helperText = ' ', ...rest } = props
    return (
        <Box>
            <RadioGroup {...rest}>
                {radioList.map((item, index) => {
                    return <FormControlLabel {...item} key={index} control={<Radio size="small" />} />
                })}
            </RadioGroup>
            {<FormHelperText>{helperText}</FormHelperText>}
        </Box>
    )
}

export default MuiRadioGroup
