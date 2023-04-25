import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './login'
import { getUser } from './login'


const initialState = {
  isConnected: false,
  token: null,
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  createdAt: null,
  updatedAt: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isConnected = true;
      state.token = action.payload.token;

    },
    setProfile: (state, action) => {
      state.id = action.payload.id
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;

    },
    resetUser: (state) => {
      console.log(state)
      console.log("reset user")
      state.isConnected = false;
      state.token = null;
      state.id = null;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.createdAt = null;
      state.updatedAt = null;
    },
    modifyUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.email = action.meta.arg.email

    });


  },
})

// Action creators are generated for each case reducer function
export const { setUser, setProfile, resetUser, modifyUser } = userSlice.actions


export default userSlice.reducer
