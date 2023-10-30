import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import { Add, Close } from '@mui/icons-material'
import { CSVIcon, DeleteIcon, PDFIcon, EditIcon } from 'src/config/icons'

const Buttons = () => {
    return (
        <Box bgcolor={'background.default'} p={2}>
            <Typography variant="h5" gutterBottom color={'primary'}>
                Button
            </Typography>
            <Divider flexItem />
            <Box p={2} display={'flex'} gap={2}>
                <Button variant="contained">Submit</Button>
                <Button variant="outlined" color="secondary">
                    Cancel
                </Button>
                <Button color="primary" variant="contained" endIcon={<Add />}>
                    Add Face Profile
                </Button>
                <IconButton color="success">
                    <EditIcon />
                </IconButton>
                <IconButton color="error">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary">
                    <Close />
                </IconButton>
                <IconButton color="neutral">
                    <PDFIcon />
                </IconButton>
                <IconButton color="neutral">
                    <CSVIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Buttons
