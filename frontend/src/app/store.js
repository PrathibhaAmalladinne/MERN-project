import { configureStore } from "@reduxjs/toolkit"
import notesReducer from "../features/notes/notesSlice"
import authReducer from "../features/auth/authSlice"
const reducer = {
  notes: notesReducer,
  auth: authReducer,
  //users: usersreducer
}
export const store = configureStore({
  reducer,
  devTools: true,
})
