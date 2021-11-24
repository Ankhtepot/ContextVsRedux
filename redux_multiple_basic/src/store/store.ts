import {configureStore} from '@reduxjs/toolkit';
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
import colorsSlice from "./colorsSlice";
import {useAppSelector} from "../hooks/reduxHooks";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todoSlice,
        colors: colorsSlice
    },
})

export const useTodoReducer = () => useAppSelector(state => state.todos);
export const useColorsReducer = () => useAppSelector(state => state.colors);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch