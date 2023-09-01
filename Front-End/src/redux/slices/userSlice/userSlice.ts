import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { userInitialState } from './type'
import { DataArray, DataCommits } from '../../../types'


// Define the initial state using that type
const initialState: userInitialState = {
  commits:<DataCommits[]>[]
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCommits: (state, action: PayloadAction<DataCommits[]>) => {
      state.commits = action.payload
    },
  },
})

export const { setCommits } = userSlice.actions
