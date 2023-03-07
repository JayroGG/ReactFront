import pageReducer from './pageSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    pagination: pageReducer
  }
})
