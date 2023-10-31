// Redux
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
// redux-persist
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// Slices
import authSlice from './slices/authSlice'
import snackbarSlice from './slices/snackbarSlice'

const reducers = combineReducers({
    auth: authSlice,
    snackbar: snackbarSlice,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: import.meta.env.MODE !== 'production',
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)

// Define the `RootState` as the return type:
export type RootState = ReturnType<typeof store.getState>
