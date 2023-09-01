import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from "../slices/userSlice/userSlice"
import { uiSlice } from '../slices/uiSlice/uiSlice'


const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    ui:uiSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store