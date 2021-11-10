namespace Api {
    export type TodosContextState = {
        todos: ITodo[];
        addTodo: (name: string, completed: bool) => void;
    };

    export interface ITodo {
        text: string;
        completed: bool;
    }

    export type ColorsContextState = {
        primaryColor: string;
        secondaryColor: string;
        textColor: string;
        setPrimaryColor: (color: string) => void;
        setSecondaryColor: (color: string) => void;
        setTextColor: (color: string) => void;
    }
}
