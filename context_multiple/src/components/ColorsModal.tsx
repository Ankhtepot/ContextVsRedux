import React from 'react';
import {Modal, PrimaryButton, Stack, StackItem} from "@fluentui/react";
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

    return (
        <Modal isOpen={props.isModalOpen} isBlocking={false} onDismiss={props.onDismiss}>
            <Stack>
                <Stack horizontal>
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
                <StackItem style={{textAlign: 'right'}}>
                    <PrimaryButton onClick={props.onDismiss} style={{ margin: '1rem'}}>Cancel</PrimaryButton>
                </StackItem>
            </Stack>
        </Modal>
    );
}

export default ColorsModal;