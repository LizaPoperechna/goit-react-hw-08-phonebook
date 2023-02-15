import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };


export const register = createAsyncThunk('auth/register', 
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      token.set(res.data.token);
      return res.data;
    } 
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  

  export const logIn = createAsyncThunk('auth/login', 
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/login', credentials);
        token.set(res.data.token);
        return res.data;
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  });
  
 
  export const logOut = createAsyncThunk('auth/logout', 
    async (_, thunkAPI) => {
      try {
        await axios.post('/users/logout');
        token.unset();
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        console.log('Токена нет, уходим из fetchCurrentUser');
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      
      try {
        token.set(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    },
  );
  
  export const operations = {
    register,
    logOut,
    logIn,
    fetchCurrentUser,
  };
