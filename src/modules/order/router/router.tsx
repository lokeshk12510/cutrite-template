import { RouteObject } from 'react-router-dom'
import orderUrls from './urls'
import OrderLogin from '../pages/auth/Index'
import OrderLayout from '../layout/Index'
import OrderPanel from '../pages/orders/Index'

const orderRoutes: RouteObject[] = [
    {
        path: orderUrls.login,
        element: <OrderLogin />,
    },
    {
        path: orderUrls.root,
        element: <OrderLayout />,
        children: [
            {
                path: orderUrls.root,
                index: true,
                element: <OrderPanel />,
            },
        ],
    },
]

export default orderRoutes
