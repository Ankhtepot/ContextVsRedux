import React from 'react';
import {ContextualMenu, IDragOptions, mergeStyleSets, Modal, PrimaryButton, Stack, StackItem} from "@fluentui/react";
import ColorPickerWithLabel from "./ColorPickerWithLabel";
import {useColorsContext} from "../store/ColorsContext";

interface ColorModalProps {
    isModalOpen: boolean;
    onDismiss: () => void,
}

const ColorsModal: React.FC<ColorModalProps> = (props) => {
    const {
        primaryColor,
        secondaryColor,
        textColor,
        setPrimaryColor,
        setSecondaryColor,
        setTextColor
    } = useColorsContext();

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
                        onChange={(e, color) => setPrimaryColor(color.str)}
                    />
                    <ColorPickerWithLabel
                        color={secondaryColor}
                        label='Secondary Color'
                        onChange={(e, color) => setSecondaryColor(color.str)}
                    />
                    <ColorPickerWithLabel
                        color={textColor}
                        label='Text Color'
                        onChange={(e, color) => setTextColor(color.str)}
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