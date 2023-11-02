// Mui
import { styled } from '@mui/material'
// Router
import { Outlet } from 'react-router-dom'
// Components
import Header from './header/Index'
import OrderAuthenticator from './OrderAuthenticator'
import Navbar from './header/Navbar'

const OrderLayout = () => {
    return (
        <Root>
            <OrderAuthenticator>
                <>
                    <Header />
                    <Navbar />
                    <main style={{ maxWidth: '1920px', margin: 'auto' }}>{<Outlet />}</main>
                </>
            </OrderAuthenticator>
        </Root>
    )
}

export default OrderLayout

const Root = styled('main')(({ theme }) => ({
    background: theme.palette.background.default,
    minWidth: 1280,
}))
