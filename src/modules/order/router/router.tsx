// Router
import { RouteObject } from 'react-router-dom'
// Urls
import orderUrls from './urls'
// Layout
import OrderLayout from '../layout/Index'
// Pages
import OrderPanel from '../pages/form/Index'
import Summary from '../pages/summary/Index'
import Checkout from '../pages/checkout/Index'

const orderRoutes: RouteObject[] = [
    {
        path: orderUrls.root,
        element: <OrderLayout />,
        children: [
            {
                path: orderUrls.root,
                index: true,
                element: <OrderPanel />,
            },
            {
                path: orderUrls.summary,
                element: <Summary />,
            },
            {
                path: orderUrls.checkout,
                element: <Checkout />,
            },
        ],
    },
]

export default orderRoutes
