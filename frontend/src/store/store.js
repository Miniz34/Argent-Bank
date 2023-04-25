import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import { loginUser } from './login'



export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,


  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    });

  },

})

