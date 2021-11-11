import React from 'react';
import {Stack, StackItem, mergeStyleSets, PrimaryButton} from "@fluentui/react";
import TodosList from "./components/TodosList";
import {useColorsContext} from "./store/ColorsContext";
import useBoolean from "./hooks/useBoolean";
import ColorsModal from "./components/ColorsModal";


function App() {
    const {primaryColor, secondaryColor, textColor} = useColorsContext();
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
            <PrimaryButton className={classes.buttonStyle} onClick={showModal}>Set Colors</PrimaryButton>
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
