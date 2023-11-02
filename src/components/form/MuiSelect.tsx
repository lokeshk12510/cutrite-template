import { MenuItem, Select, SelectProps } from '@mui/material'

interface ISelectList {
    label: string | number
    value: string | number | readonly string[] | undefined
}

interface ISelectProps extends SelectProps {
    selectList: ISelectList[]
}

const MuiSelect = (props: ISelectProps) => {
    const { selectList, ...selectProps } = props

    return (
        <Select labelId="select-label" id="select" {...selectProps}>
            {selectList.map((item, index) => {
                return (
                    <MenuItem value={item.value} key={index} sx={{ pl: '8px', pr: '8px' }}>
                        {item.label}
                    </MenuItem>
                )
            })}
        </Select>
    )
}

export default MuiSelect
