import { Add } from '@mui/icons-material'
import { Box, Button, Divider, Typography } from '@mui/material'
import { useState } from 'react'
import MuiDialog, { IActionBtn } from 'src/components/dialog/Index'
import Form from './Form'

const Dialogs = () => {
    return (
        <Box bgcolor={'background.default'} p={2}>
            <Typography variant="h5" gutterBottom color={'primary'}>
                Dialog
            </Typography>
            <Divider flexItem />
            <Box p={2} display={'flex'}>
                <ButtonDialog />
            </Box>
        </Box>
    )
}

export default Dialogs

export const ButtonDialog = () => {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen((o) => !o)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const actions: IActionBtn[] = [
        {
            label: 'Close',
            variant: 'outlined',
            color: 'secondary',
            onClick: handleClose,
        },
        {
            label: 'Submit',
            variant: 'contained',
            onClick: () => console.log('clicked'),
        },
    ]
    return (
        <>
            <Button color="primary" variant="contained" endIcon={<Add />} onClick={handleToggle}>
                Add Face Profile
            </Button>
            <MuiDialog open={open} setOpen={setOpen} actions={actions} title="Edit - Tim barnes">
                <>
                    <Form />
                </>
            </MuiDialog>
        </>
    )
}
