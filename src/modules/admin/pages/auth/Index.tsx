import { Link } from 'react-router-dom'
import adminUrls from '../../router/urls'

const AdminLogin = () => {
    return (
        <div>
            AdminLogin
            <Link to={adminUrls.root}>Go to Admin page</Link>
        </div>
    )
}

export default AdminLogin
