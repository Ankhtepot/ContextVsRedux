import React from 'react';
import {mergeStyleSets} from "@fluentui/react";
import TodosProvider from "./store/TodosContext";
import TodosList from "./components/TodosList";

const classes = mergeStyleSets({
    App: {
        textAlign: 'center',
    },
    todoList: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 'calc(10px + 2vmin)',
        color: '000',
    },
})

function App() {
    return (
        <div className={classes.App}>
            <header className={classes.todoList}>
                <TodosProvider>
                    <TodosList />
                </TodosProvider>
            </header>
        </div>
    );
}

export default App;
