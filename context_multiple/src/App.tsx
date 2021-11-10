import React from 'react';
import './App.css';
import {mergeStyleSets} from "@fluentui/react";
import TodosList from "./components/TodosList";
import {useColorsContext} from "./store/ColorsContext";


function App() {
    const { primaryColor, secondaryColor, textColor } = useColorsContext();

    const classes = mergeStyleSets({
        App: {
            textAlign: 'center',
            backgroundColor: primaryColor,
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center",
        },
        AppHeader: {
            minWidth: '80%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 'calc(10px + 2vmin)',
            color: textColor,
            backgroundColor: secondaryColor
        },
    })
    return (
        <div className={classes.App}>
            <header className={classes.AppHeader}>
                <TodosList/>
            </header>
        </div>
    );
}

export default App;
