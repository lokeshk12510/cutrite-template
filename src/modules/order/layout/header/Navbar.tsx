import { AppBar, Container, OutlinedInput, Stack, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
    return (
        <AppBar position="relative" elevation={0}>
            <Container maxWidth={false} sx={{ px: { xs: 1, lg: 2 } }}>
                <Toolbar disableGutters sx={{ minHeight: 35, justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1">ONLINE ORDER FORM</Typography>

                    <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
                        <Typography variant="subtitle1">Job Name</Typography>
                        <OutlinedInput sx={{ background: '#fff', width: 270 }} />
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
