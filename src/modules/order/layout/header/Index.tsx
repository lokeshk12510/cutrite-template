// Mui
import { AppBar, Container, Toolbar } from '@mui/material'
// Router
import { Link } from 'react-router-dom'
// Config
import Images from 'src/config/images'

const Header = () => {
    return (
        <AppBar position="sticky">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <Link to="/">
                        <img src={Images.Logo} alt="logo" width={100} height={50} style={{ width: 100, height: 50 }} />
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
