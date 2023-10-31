// Mui
import { styled } from '@mui/material'
// Router
import { Outlet } from 'react-router-dom'
// Components
import Header from './header/Index'
import Footer from './footer/Index'
import AdminAuthenticator from './AdminAuthenticator'

const AdminLayout = () => {
    return (
        <AdminAuthenticator>
            <Root>
                <Header />
                <main>{<Outlet />}</main>
                <Footer />
            </Root>
        </AdminAuthenticator>
    )
}

export default AdminLayout

const Root = styled('main')(({ theme }) => ({
    '& main': {
        minHeight: 'calc(100vh - 93px)',
        padding: theme.spacing(1),
    },
    background: theme.palette.background.default,
}))
