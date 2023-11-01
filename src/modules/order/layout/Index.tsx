// Mui
import { styled } from '@mui/material'
// Router
import { Outlet } from 'react-router-dom'
// Components
import Header from './header/Index'
import Footer from './footer/Index'
import OrderAuthenticator from './OrderAuthenticator'

const OrderLayout = () => {
    return (
        <Root>
            <OrderAuthenticator>
                <>
                    <Header />
                    <main>{<Outlet />}</main>
                    <Footer />
                </>
            </OrderAuthenticator>
        </Root>
    )
}

export default OrderLayout

const Root = styled('main')(({ theme }) => ({
    '& main': {
        minHeight: 'calc(100vh - 90px)',
        padding: theme.spacing(0.875),
    },
    background: theme.palette.background.default,
}))
