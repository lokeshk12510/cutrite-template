import { AppBar, Container, Toolbar } from '@mui/material'
import Images from 'src/config/images'

const Header = () => {
    return (
        <AppBar position="sticky">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <img src={Images.Logo} alt="logo" width={100} height={50} style={{ width: 100, height: 50 }} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
