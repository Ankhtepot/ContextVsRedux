import React, {useState} from 'react';
import {ColorPicker, Stack, StackItem, IColorPickerProps, PrimaryButton, mergeStyleSets} from "@fluentui/react";

interface IColorPickerWithLabelProps extends IColorPickerProps {
    label: string;
}

const ColorPickerWithLabel: React.FC<IColorPickerWithLabelProps> = (props) => {
    const [isMinimized, setIsMinimized] = useState(true);

    const classes = mergeStyleSets({
        verticalButton: {
            transform: 'rotate(-90deg)',
            minWidth: '160px',
            maxHeight: '100px',
            margin: '5rem 0rem',
        },
    })

    return (
        <Stack tokens={{childrenGap: 10}}>
            {!isMinimized ? (
                <>
                    <StackItem align={"center"}>
                        <h1>{props.label}</h1>
                        <PrimaryButton onClick={() => setIsMinimized(true)}>Minimize</PrimaryButton>
                    </StackItem>
                    <StackItem>
                        <ColorPicker color={props.color} onChange={props.onChange}/>
                    </StackItem>
                </>
                ) : (
                <StackItem >
                    <PrimaryButton className={classes.verticalButton}
                                   onClick={() => setIsMinimized(false)}
                    >Set {props.label}</PrimaryButton>
                </StackItem>
                )}
        </Stack>
    );
}

export default ColorPickerWithLabel;