//https://6553de625449cfda0f2f42e0.mockapi.io 

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://62584f320c918296a49543e7.mockapi.io

// https://655663ce84b36e3a431fb080.mockapi.io
axios.defaults.baseURL = 'https://655663ce84b36e3a431fb080.mockapi.io';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get('/tasks');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (text, thunkAPI) => {
      try {
        const res = await axios.post('/tasks', { text });
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )

  export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, thunkAPI) => {
      try {
        const res = await axios.delete(`/tasks/${taskId}`);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )

  export const toggleCompleted = createAsyncThunk(
    'tasks/toggleCompleted',
    async (task, thunkAPI) => {
      try {
        const res = await axios.put(`/tasks/${task.id}`, {
          completed: !task.completed
        });
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )

  // export const editTask = createAsyncThunk(
  //   'tasks/editTask',
  //   async ({id, newText}, thunkAPI) => {
  //     try {
  //       const res = await axios.put(`/tasks/${id}`, {
  //         text: newText
  //       });
  //       return res.data;
  //     } catch (error) {
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // )

//pending -> 'contacts/fetchAll/pending';
//fulfield -> 'contacts/fetchAll/fulfield';
//rejected -> 'contacts/fetchAll/rejected';