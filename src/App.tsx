// Mui
import ThemeWrapper from './theme/ThemeProvider'
// Router
import { RouterProvider } from 'react-router-dom'
import MainRouter from './routes/router'

function App() {
    return (
        <ThemeWrapper>
            <RouterProvider router={MainRouter} />
        </ThemeWrapper>
    )
}

export default App
