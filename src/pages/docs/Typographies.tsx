import { Box, Divider, Typography } from '@mui/material'

const Typographies = () => {
    return (
        <Box bgcolor={'background.default'} p={2}>
            <Typography variant="h5" gutterBottom color={'primary'}>
                Typography
            </Typography>
            <Divider flexItem />
            <Box p={2}>
                <Typography variant="h4" gutterBottom fontWeight={'600'}>
                    Online Orders
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Welcome Philip Scott
                </Typography>

                <Typography variant="body1" gutterBottom>
                    wayne.small@gmail.com.au
                </Typography>
                <Typography variant="body2" gutterBottom>
                    1/06/2023 2:20 pm
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    Submit
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    © Copyright 2023 Roof assess Pty Ltd | ABN 16 617 532 519
                </Typography>
            </Box>
        </Box>
    )
}

export default Typographies
