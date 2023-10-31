// Router
import { Outlet } from 'react-router-dom'
// Components
import SnackbarContext from 'src/components/Snackbar'

const RootLayout = () => {
    return (
        <>
            <Outlet />
            <SnackbarContext />
        </>
    )
}

export default RootLayout
