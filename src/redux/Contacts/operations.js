import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
    async (_, thunkApi) => {
        try {
            const responce = await axios.get('/contacts');
            return responce.data;
        }
        catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
})


export const addContact = createAsyncThunk('contacts/addContact', 
    async (contact, thunkApi) => {
        try {
            const responce = await axios.post('/contacts', contact);
            return responce.data;
        }
        catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
})


export const deleteContact = createAsyncThunk('contacts/deleteContact', 
    async (id, thunkApi) => {
        try {
            const responce = await axios.delete(`/contacts/${id}`);
            return responce.data;
        }
        catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
})
