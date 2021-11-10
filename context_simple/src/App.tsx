import React from 'react';
import './App.css';
import TodosProvider from "../../context_simple/src/store/TodosContext";
import TodosList from "../../context_simple/src/components/TodosList";
import {mergeStyleSets} from "@fluentui/react";

const classes = mergeStyleSets({
    App: {
        textAlign: 'center',
    },
    AppHeader: {
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
            <header className={classes.AppHeader}>
                <TodosProvider>
                    <TodosList />
                </TodosProvider>
            </header>
        </div>
    );
}

export default App;
