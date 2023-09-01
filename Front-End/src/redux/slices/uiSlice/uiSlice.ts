import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialUiState } from './type'


// Define the initial state using that type
const initialState: initialUiState = {
  dark:false
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
  },
})

export const { setLightTheme, setDarkTheme } = uiSlice.actions
