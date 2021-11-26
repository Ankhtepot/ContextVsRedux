namespace Api {
    export type TodosContextState = {
        todos: ITodo[];
        addTodo: (name: string, completed: bool) => void;
    };

    export interface ITodo {
        text: string;
        completed: bool;
    }
}
