import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { userInitialState } from './type'

// Define the initial state using that type
const initialState: userInitialState = {
  commits:[]
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCommits: (state, action: PayloadAction<any>) => {
      console.log("LLEGO PAYLOAD", action.payload)
      state.commits = action.payload
    },
  },
})

export const { setCommits } = userSlice.actions
