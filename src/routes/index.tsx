import { createBrowserRouter } from 'react-router-dom'
// Layout
import AuthenticatedLayout from '../layout/authenticatedLayout/Index'
// Pages
import Orders from '../pages/orders/index'
import Users from '../pages/users/Index'
import Docs from '../pages/docs/Index'
import urls from './urls'
import FaceProfile from 'src/pages/maintenance/faceProfile/Index'
import NotFound from 'src/pages/error/NotFound'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthenticatedLayout />,
        children: [
            {
                path: urls.orders,
                index: true,
                element: <Orders />,
            },
            {
                path: urls.users,
                element: <Users />,
            },
            {
                path: urls.maintenance.root,
                children: [
                    {
                        path: urls.maintenance.faceProfile,
                        element: <FaceProfile />,
                        index: true,
                    },
                ],
            },
        ],
    },
    {
        path: urls.docs,
        element: <Docs />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
])
