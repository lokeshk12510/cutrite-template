import { Box, CircularProgress } from '@mui/material'

const Loader = () => {
    return (
        <Box className="page-holder" sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}

export default Loader
