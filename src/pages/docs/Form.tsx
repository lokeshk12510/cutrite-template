import { FormLabel, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import FileUpload from 'src/components/form/FileUpload'
import MuiAutocomplete from 'src/components/form/MuiAutocomplete'
import MuiRadioGroup from 'src/components/form/MuiRadioGroup'

const Form = () => {
    const [file, setFile] = useState<File | null>(null)

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <FormLabel className="gridLabel">First Name</FormLabel>
            </Grid>
            <Grid item xs={9}>
                <TextField fullWidth placeholder="Enter First Name" error helperText="Please Enter First Name" />
            </Grid>
            <Grid item xs={3}>
                <FormLabel className="gridLabel">Last Name</FormLabel>
            </Grid>
            <Grid item xs={9}>
                <TextField fullWidth placeholder="Enter Last Name" />
            </Grid>
            <Grid item xs={3}>
                <FormLabel className="gridLabel">Role</FormLabel>
            </Grid>
            <Grid item xs={9}>
                <MuiAutocomplete disablePortal multiple options={top100Films} placeholder={'Select Role'} />
            </Grid>
            <Grid item xs={3}>
                <FormLabel className="gridLabel">Discount (%)</FormLabel>
            </Grid>
            <Grid item xs={9}>
                <TextField placeholder="Enter Discount (%)" sx={{ maxWidth: 180 }} />
            </Grid>
            <Grid item xs={3}>
                <FormLabel className="gridLabel">Status</FormLabel>
            </Grid>
            <Grid item xs={9}>
                <MuiRadioGroup radioList={radioList} row />
            </Grid>
            <Grid item xs={12}>
                <FileUpload
                    value={file}
                    onChange={(e) => {
                        console.log(e)
                        setFile(e)
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Form

const radioList = [
    { label: 'Active', value: 1 },
    { label: 'Inactive', value: 0 },
]

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
]
