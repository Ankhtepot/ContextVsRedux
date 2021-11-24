import React from 'react';
import {mergeStyleSets} from "@fluentui/react";
import TodosList from "./components/TodosList";
import {Provider} from "react-redux";
import {store} from "./store/store";

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
                <Provider store={store}>
                    <TodosList />
                </Provider>
            </header>
        </div>
    );
}

export default App;
