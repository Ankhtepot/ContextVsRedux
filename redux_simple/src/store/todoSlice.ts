import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {useSelector} from "react-redux";

interface TodoState {
    todos: Api.ITodo[]
}

const initialState: TodoState = {
    todos: [],
} as TodoState;


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, { payload }: PayloadAction<Api.ITodo>) => {
            state.todos.push(payload);
        },
    },
});

export const { addTodo } = todoSlice.actions;

export const todos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
