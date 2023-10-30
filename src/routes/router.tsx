import { createBrowserRouter } from 'react-router-dom'
// Pages
import Docs from 'src/modules/_common/pages/docs/Index'
import NotFound from 'src/modules/_common/pages/error/NotFound'
// Routes
import adminRouter from '../modules/admin/router/router'
import orderRoutes from 'src/modules/order/router/router'

const MainRouter = createBrowserRouter([
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
])

export default MainRouter
