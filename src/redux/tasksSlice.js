import { createSlice } from "@reduxjs/toolkit";

  const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
    }
  });

export const tasksReducer = taskSlice.reducer;