import AccentProfiledDoors from './accentProfiledDoors/Index'
import DefaultSettings from './defaultSettings/Index'
import ProfiledDoors from './profiledDoors/Index'

const OrderForm = () => {
    return (
        <div>
            <DefaultSettings />
            <ProfiledDoors />
            <AccentProfiledDoors />
            <ProfiledDoors />
        </div>
    )
}

export default OrderForm
