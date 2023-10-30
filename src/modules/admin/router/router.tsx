import AdminLayout from 'src/modules/admin/layout/Index'
import adminUrls from './urls'
import Orders from '../pages/orders'
import Users from '../pages/users/Index'
import FaceProfile from '../pages/maintenance/faceProfile/Index'
import { RouteObject } from 'react-router-dom'
import AdminLogin from '../pages/auth/Index'

const adminRouter: RouteObject[] = [
    {
        path: adminUrls.login,
        element: <AdminLogin />,
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
