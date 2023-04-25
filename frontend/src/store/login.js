import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { setUser, setProfile } from './user'
import navigate from '../utils/navigate';
import api from "../utils/API"

// Set token/connected

import { useSelector } from "react-redux";




export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await api.user.post(email, password);
      if (response.status !== 200)
        throw new Error("Filler");
      thunkAPI.dispatch(setUser(response.data.body));
      // const profileResponse = await api.user.get(response.data.body.token)
      // thunkAPI.dispatch(setProfile(profileResponse.data.body));
      return response.data.body.token;
    } catch (error) {
      // handle error
      if (error.response) {
        // server responded with non-200 status code
        console.log(error.response.data.message);
        console.log('server responded with non-200 status code:', error.response.status);
        return thunkAPI.rejectWithValue({ message: error.response.data.message });
      } else if (error.request) {
        // request made but no response received
        console.log('no response received:', error.request);
        return thunkAPI.rejectWithValue({ message: 'Network error, please try again later.' });
      } else {
        // something else went wrong
        console.log('something else went wrong:', error.message);
        return thunkAPI.rejectWithValue({ message: 'Unexpected error, please try again later.' });
      }
    } finally {
      // navigate("http://localhost:3000/user")
    }
  }
);

// export const getUser = createAsyncThunk(
//   'user/get',

//   async ({ token }, thunkAPI) => {
//     try {
//       const response = await api.user.get(token)
//       console.log("razezae")
//       if (response.status !== 200)
//         throw new Error("Filler");
//       thunkAPI.dispatch(setProfile(response.data.body));
//       return response.data.body

//     } catch (error) {
//       console.log(error)
//     } finally {
//       console.log("help")
//     }
//   }
// )









