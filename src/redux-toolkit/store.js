import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/slice'

export const store = configureStore({
  reducer: {
    app: appReducer
  }
})
