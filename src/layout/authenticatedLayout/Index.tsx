import { Outlet } from 'react-router-dom'
import Header from './header/Index'
import Footer from './footer/Index'
import { styled } from '@mui/material'

const AuthenticatedLayout = () => {
    return (
        <Root>
            <Header />
            <main>{<Outlet />}</main>
            <Footer />
        </Root>
    )
}

export default AuthenticatedLayout

const Root = styled('main')(({ theme }) => ({
    '& main': {
        minHeight: 'calc(100vh - 93px)',
        padding: theme.spacing(1),
    },
    background: theme.palette.background.default,
}))
