// Redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './app/store'
// Mui
import ThemeWrapper from './theme/ThemeProvider'
// Router
import { RouterProvider } from 'react-router-dom'
import MainRouter from './routes/router'
// React-Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Creating a query client instance
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // By default, refetch on window focus is disabled
            staleTime: 0,
        },
    },
})

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeWrapper>
                    <QueryClientProvider client={queryClient}>
                        <RouterProvider router={MainRouter} />

                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </ThemeWrapper>
            </PersistGate>
        </Provider>
    )
}

export default App
