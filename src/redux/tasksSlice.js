import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask } from "./operations";

  const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: {
        [fetchTasks.pending](state) {
            state.isLoading = true;
        },
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchTasks.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addTask.pending](state) {
            state.isLoading = true;
        },
        [addTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addTask.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
  });

export const tasksReducer = taskSlice.reducer;