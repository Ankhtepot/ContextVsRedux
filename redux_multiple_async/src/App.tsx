import React from 'react';
import {Stack, StackItem, mergeStyleSets} from "@fluentui/react";
import TodosList from "./components/TodosList";
import useBoolean from "./hooks/useBoolean";
import ColorsModal from "./components/ColorsModal";
import {useColorsReducer} from "./store/store";
import PrimaryButton from "./components/PrimaryButton";


function App() {
    const {primaryColor, secondaryColor, textColor} = useColorsReducer();
    const {value: isModalOpen, setTrue: showModal, setFalse: hideModal} = useBoolean(false);

    const classes = mergeStyleSets({
        App: {
            textAlign: 'center',
            backgroundColor: primaryColor,
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
        },
        todoList: {
            minWidth: '80%',
            minHeight: '50vh',
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 'calc(10px + 2vmin)',
            color: textColor,
            backgroundColor: secondaryColor
        },
        buttonStyle: {
            margin: '1rem',
        }
    })
    return (
        <div className={classes.App}>
            <PrimaryButton onClick={showModal}>Set Colors</PrimaryButton>
            <Stack className={classes.todoList} horizontalAlign={"space-evenly"}>
                <StackItem>
                    <TodosList/>
                </StackItem>
                <ColorsModal isModalOpen={isModalOpen} onDismiss={hideModal} />
            </Stack>
        </div>
    );
}

export default App;
