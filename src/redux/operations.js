//https://6553de625449cfda0f2f42e0.mockapi.io 

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6553de625449cfda0f2f42e0.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    try {
        const res = await axios.get('/contacts');
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

//pending -> 'contacts/fetchAll/pending';
//fulfield -> 'contacts/fetchAll/fulfield';
//rejected -> 'contacts/fetchAll/rejected';