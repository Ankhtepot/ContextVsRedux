import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface TodoState {
    todos: Api.ITodo[]
}

const initialState: TodoState = {
    todos: [],
} as TodoState;


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, { payload }: PayloadAction<Api.ITodo>) => {
            state.todos.push(payload);
        },
    },
});

export const { addTodo } = todoSlice.actions;

// can export just like this as simple accessor
export const todos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
