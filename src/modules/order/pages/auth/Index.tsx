import { Link } from 'react-router-dom'
import orderUrls from '../../router/urls'

const OrderLogin = () => {
    return (
        <div>
            Order Login
            <Link to={orderUrls.root}>Go to Orders page</Link>
        </div>
    )
}

export default OrderLogin
