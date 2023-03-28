import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {toast} from 'react-hot-toast'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials)
      const respons = await axios.post('/users/signup', credentials);
      token.set(respons.data.token);
      console.log(respons)
      
      return respons.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const respons = await axios.post('/users/login', credentials);
      token.set(respons.data.token);
      return respons.data;
    } catch (error) {
      toast.error('Password is incorrect.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);
    try {
      const respons = await axios.get('/users/current');

      return respons.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

