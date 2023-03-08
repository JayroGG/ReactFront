import { createSlice } from '@reduxjs/toolkit'

const pageSlice = createSlice({
  name: 'pagination',
  initialState: {
    page: 0
  },
  reducers: {
    nextPage: state => {
      state.page += 1
    },
    prevPage: state => {
      state.page = state.page === 0 ? 0 : state.page - 1
    }
  }
})

export const { nextPage, prevPage } = pageSlice.actions

export default pageSlice.reducer
