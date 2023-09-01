import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialUiState } from './type'


// Define the initial state using that type
const initialState: initialUiState = {
  dark: false,
  loading: true
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.dark = false
    },
    setDarkTheme: (state) => {
      state.dark = true
    },
    finishLoadingUi: (state) => {
      state.loading = false
    },
  },
})

export const { setLightTheme, setDarkTheme, finishLoadingUi } = uiSlice.actions
