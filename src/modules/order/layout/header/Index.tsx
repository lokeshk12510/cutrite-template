// Mui
import { AppBar, Container, Toolbar } from '@mui/material'
// Router
import { Link } from 'react-router-dom'
// Config
import Images from 'src/config/images'

const Header = () => {
    return (
        <AppBar position="sticky" elevation={0} sx={{ mb: 0.3 }}>
            <Container maxWidth={false} sx={{ px: { xs: 1, lg: 2 } }}>
                <Toolbar disableGutters sx={{ minHeight: 35 }}>
                    <Link to="/">
                        <img src={Images.Logo} alt="logo" width={100} height={35} style={{ width: 75, height: 35 }} />
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
