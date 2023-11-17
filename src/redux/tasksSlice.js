import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./operations";

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

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
        [fetchTasks.pending]: handlePending,
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchTasks.rejected]: handleRejected,
        [addTask.pending]: handlePending,
        [addTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addTask.rejected]: handleRejected,
        [deleteTask.pending]: handlePending,
        [deleteTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const idx = state.items.findIndex(item => item.id === action.payload.idx);
            state.items.splice(idx, 1);
            // return state.items.filter(item => item.id !== action.payload.id )
        },
        [deleteTask.rejected]: handleRejected,
    }
  });

export const tasksReducer = taskSlice.reducer;