//https://6553de625449cfda0f2f42e0.mockapi.io 

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://62584f320c918296a49543e7.mockapi.io

// https://655663ce84b36e3a431fb080.mockapi.io
axios.defaults.baseURL = 'https://655663ce84b36e3a431fb080.mockapi.io';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async () => {
      try {
        const res = await axios.get('/tasks');
        return res.data;
      } catch (error) {
        console.log(error);
      }
    }
  );

//pending -> 'contacts/fetchAll/pending';
//fulfield -> 'contacts/fetchAll/fulfield';
//rejected -> 'contacts/fetchAll/rejected';