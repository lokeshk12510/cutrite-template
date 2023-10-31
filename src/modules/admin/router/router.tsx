// Router
import { RouteObject } from 'react-router-dom'
// Layout
import AdminLayout from 'src/modules/admin/layout/Index'
// Urls
import adminUrls from './urls'
// Pages
import Login from '../pages/auth/Login'
import Orders from '../pages/orders'
import Users from '../pages/users/Index'
import FaceProfile from '../pages/maintenance/faceProfile/Index'

const adminRouter: RouteObject[] = [
    {
        path: adminUrls.login,
        element: <Login />,
    },
    {
        path: adminUrls.root,
        element: <AdminLayout />,
        children: [
            {
                path: adminUrls.root,
                index: true,
                element: <Orders />,
            },
            {
                path: adminUrls.orders,
                index: true,
                element: <Orders />,
            },
            {
                path: adminUrls.users,
                element: <Users />,
            },
            {
                path: adminUrls.maintenance.root,
                children: [
                    {
                        path: adminUrls.maintenance.faceProfile,
                        element: <FaceProfile />,
                    },
                ],
            },
        ],
    },
]

export default adminRouter
