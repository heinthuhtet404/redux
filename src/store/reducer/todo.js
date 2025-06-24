import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//custom data fetch action
export const getTodos = createAsyncThunk("getTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    return response.json();
})

const initialTodoState = {
    isLoading: false,
    data: [],
    isError: false
}

const todoSlice = createSlice ({
    name: "todo",
    initialState: initialTodoState,
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getTodos.fulfilled,(state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getTodos.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export default todoSlice.reducer;