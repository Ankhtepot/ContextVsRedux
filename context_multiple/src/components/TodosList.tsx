import {useTodosContext} from "../store/TodosContext";
import {PrimaryButton, Stack} from "@fluentui/react";
import Todo from "./Todo";

const TodosList = () => {
    const { todos, addTodo } = useTodosContext();

    return (
        <Stack>
            <PrimaryButton onClick={() => addTodo('Todo', (Math.floor(Math.random() * 2) === 1))}>add todo</PrimaryButton>
            <Stack horizontalAlign={"center"}>
                {todos.map((todo, i) => (
                    <Todo text={`${todo.text}: ${i}`} completed={todo.completed} key={i} />
                ))}
            </Stack>
        </Stack>
    );
};

export default TodosList;