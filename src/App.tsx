import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import ThemeWrapper from './theme/ThemeProvider'

function App() {
    return (
        <ThemeWrapper>
            <RouterProvider router={router} />
        </ThemeWrapper>
    )
}

export default App
