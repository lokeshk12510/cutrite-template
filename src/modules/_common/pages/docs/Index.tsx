// mui
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
// components
import Buttons from './Buttons'
import Typographies from './Typographies'
import Datagrid from './Datagrid'
import Dialogs from './Dialog'

const Docs = () => {
    return (
        <Box minHeight={'100vh'} p={2} bgcolor={'primary.light'}>
            <Container maxWidth="xl">
                <Box>
                    <Typography variant="h4" fontWeight={'bold'} color={'white'} gutterBottom>
                        Cut-Rite's Design Documentation
                    </Typography>
                </Box>
                <Paper sx={{ background: '#fff', height: '100%', p: 3, borderRadius: 2 }}>
                    <Stack spacing={3}>
                        {/* <Header /> */}
                        <Typographies />
                        <Buttons />
                        <Datagrid />
                        <Dialogs />
                        {/* <Footer /> */}
                    </Stack>
                </Paper>
            </Container>
        </Box>
    )
}

export default Docs
