import {useTodosContext} from "../store/TodosContext";
import {PrimaryButton, Stack} from "@fluentui/react";
import TodoItem from "./TodoItem";

const TodosList = () => {
    const { todos, addTodo } = useTodosContext();

    return (
        <Stack>
            <PrimaryButton onClick={() => addTodo('TodoItem', (Math.floor(Math.random() * 2) === 1))}>Add todo</PrimaryButton>
            <Stack horizontalAlign={"center"}>
                {todos.map((todo, i) => (
                    <TodoItem text={`${todo.text}: ${i}`} completed={todo.completed} key={i} />
                ))}
            </Stack>
        </Stack>
    );
};

export default TodosList;