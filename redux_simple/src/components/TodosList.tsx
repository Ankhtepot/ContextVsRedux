import {PrimaryButton, Stack} from "@fluentui/react";
import Todo from "./Todo";
import {useAppDispatch} from "../hooks/reduxHooks";
import {addTodo} from "../store/todoSlice";
import {useTodoReducer} from "../store/store";

const TodosList = () => {
    // deconstruct using a hook for todo reducer
    const { todos } = useTodoReducer();

    // or this way
    // const todos = useTodoReducer().todos;

    // or useSelector
    // const todos = useAppSelector(state => state.todo.todos);

    const dispatch = useAppDispatch();

    return (
        <Stack>
            <PrimaryButton onClick={() => dispatch(
                addTodo({text: 'Todo', completed: (Math.floor(Math.random() * 2) === 1)})
            )}>add todo</PrimaryButton>
            <Stack horizontalAlign={"center"}>
                {todos.map((todo, i) => (
                    <Todo text={`${todo.text}: ${i}`} completed={todo.completed} key={i}/>
                ))}
            </Stack>
        </Stack>
    );
};

export default TodosList;