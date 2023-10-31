import { createBrowserRouter } from 'react-router-dom'
// Layout
import RootLayout from 'src/modules/_common/layout/Index'
// Pages
import Docs from 'src/modules/_common/pages/docs/Index'
import NotFound from 'src/modules/_common/pages/error/NotFound'
// Routes
import adminRouter from '../modules/admin/router/router'
import orderRoutes from 'src/modules/order/router/router'

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            // --- Order Router ---
            ...orderRoutes,

            // --- Admin Router ---
            ...adminRouter,

            // --- Common Router ---
            {
                path: '/docs',
                element: <Docs />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
])

export default MainRouter
