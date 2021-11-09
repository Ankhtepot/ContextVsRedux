import React from 'react';
import './App.css';
import TodosProvider from "../../context_simple/src/store/TodosContext";
import TodosList from "../../context_simple/src/components/TodosList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TodosProvider>
                    <TodosList />
                </TodosProvider>
            </header>
        </div>
    );
}

export default App;
