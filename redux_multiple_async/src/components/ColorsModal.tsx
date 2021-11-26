import React from 'react';
import {ContextualMenu, IDragOptions, mergeStyleSets, Modal, PrimaryButton, Stack, StackItem} from "@fluentui/react";
import ColorPickerWithLabel from "./ColorPickerWithLabel";
import {useColorsReducer} from "../store/store";
import {useAppDispatch} from "../hooks/reduxHooks";
import {setPrimaryColor, setSecondaryColor, setTextColor} from "../store/colorsSlice";

interface ColorModalProps {
    isModalOpen: boolean;
    onDismiss: () => void,
}

const ColorsModal: React.FC<ColorModalProps> = (props) => {
    const {
        primaryColor,
        secondaryColor,
        textColor,
    } = useColorsReducer();
    const dispatch = useAppDispatch();

    const classes = mergeStyleSets({
        moveArea: {
            backgroundColor: 'lightBlue',
            color: 'black',
            minHeight: '2rem',
            minWidth: '100px',
            textAlign: 'center',
            margin: '0.5rem',
        }
    })

    const dragOptions = React.useMemo(
        (): IDragOptions => ({
            moveMenuItemText: 'Move',
            closeMenuItemText: 'Close',
            menu: ContextualMenu,
            keepInBounds: false,
            dragHandleSelector: '#moveArea'
        }),
        [],
    );

    return (
        <Modal isOpen={props.isModalOpen}
               isBlocking={false}
               onDismiss={props.onDismiss}
               dragOptions={dragOptions}
        >
            <Stack>
                <Stack horizontal tokens={{ childrenGap: 10}}>
                    <ColorPickerWithLabel
                        color={primaryColor}
                        label='Primary Color'
                        onChange={(e, color) => dispatch(setPrimaryColor(color.str))}
                    />
                    <ColorPickerWithLabel
                        color={secondaryColor}
                        label='Secondary Color'
                        onChange={(e, color) => dispatch(setSecondaryColor(color.str))}
                    />
                    <ColorPickerWithLabel
                        color={textColor}
                        label='Text Color'
                        onChange={(e, color) => dispatch(setTextColor(color.str))}
                    />
                </Stack>
                <Stack horizontal horizontalAlign='space-between'>
                    <StackItem className={classes.moveArea} id='moveArea'>
                        <p>MOVE</p>
                    </StackItem>
                    <StackItem>
                        <PrimaryButton onClick={props.onDismiss} style={{margin: '1rem'}}>Cancel</PrimaryButton>
                    </StackItem>
                </Stack>
            </Stack>
        </Modal>
    );
}

export default ColorsModal;