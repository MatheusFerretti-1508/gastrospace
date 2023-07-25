import { configureStore } from '@reduxjs/toolkit'
import olaReducer from './reducers/ola'

import api from '../services/api'

export const store: any = configureStore({
    reducer: {
        ola: olaReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>