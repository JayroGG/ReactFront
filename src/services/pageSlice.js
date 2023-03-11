import { createSlice } from '@reduxjs/toolkit'

const pageSlice = createSlice({
  name: 'pagination',
  initialState: {
    page: 0,
    maxPages: 0
  },
  reducers: {
    nextPage: state => {
      state.page += 1
    },
    prevPage: state => {
      state.page = state.page === 0 ? 0 : state.page - 1
    },
    setMaxPages: (state) => {
      state.maxPages = 3
    }
  }
})

export const { nextPage, prevPage, setMaxPages } = pageSlice.actions

export default pageSlice.reducer
