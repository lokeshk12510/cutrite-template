import { Close } from '@mui/icons-material'
import { Grid, IconButton, Stack, Typography } from '@mui/material'
import MuiAutocomplete from 'src/components/form/MuiAutocomplete'
import Images from 'src/config/images'
import StyledWrapper from '../StyledWrapper'

const DefaultSettings = () => {
    return (
        <StyledWrapper title="Order default settings">
            <Grid container columnSpacing={2} rowSpacing={0.5} p={2} pt={0}>
                <InputRow label="Range" />
                <InputRow label="Face Profile" />
                <InputRow label="Default Border Size" />
                <InputRow label="Edge Profile" />
                <InputRow label="Edge Handle" />
                <InputRow label="Material" />
                <InputRow label="Hinge Brand" />
                <InputRow label="Hinge Bottom Centre" />
                <InputRow label="Hinge Top Centre" />
                <InputRow label="Board Supplier" />
                <InputRow label="Board Colour" />
            </Grid>
        </StyledWrapper>
    )
}

export default DefaultSettings

const InputRow = ({ label }: { label: string }) => {
    return (
        <>
            <Grid item xs={2.4}>
                <Typography component={'p'} variant="body3" className="gridLabel" mt={1}>
                    {label}
                </Typography>
            </Grid>
            <Grid item xs={2.8}>
                <MuiAutocomplete size="large" options={[]} placeholder="Please select one" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <Stack direction={'row'} alignItems="center" justifyContent={'flex-start'}>
                    <img className="boxImg" src={Images.BoxImg1} alt="box" />{' '}
                    <IconButton color="primary">
                        <Close />
                    </IconButton>
                </Stack>
            </Grid>
        </>
    )
}
