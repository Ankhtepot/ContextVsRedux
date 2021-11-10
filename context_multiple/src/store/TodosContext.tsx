import React, {createContext, useState, FC, useContext} from "react";

const contextDefaultValues: Api.TodosContextState = {
    todos: [],
    addTodo: () => {}
};

export const TodosContext = createContext<Api.TodosContextState>(
    contextDefaultValues
);

export const useTodosContext = () => useContext(TodosContext);


const TodosProvider: FC = ({ children }) => {
    const [todos, setTodos] = useState<Api.ITodo[]>(contextDefaultValues.todos);

    const addTodo = (text: string, completed: boolean) => setTodos((todos) => [...todos, {text, completed}]);

    return (
        <TodosContext.Provider
            value={{
                todos,
                addTodo
            }}
        >
            {children}
        </TodosContext.Provider>
    );
};

export default TodosProvider;
