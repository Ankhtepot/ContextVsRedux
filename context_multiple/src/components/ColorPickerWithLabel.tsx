import React from 'react';
import {ColorPicker, Stack, StackItem, IColorPickerProps} from "@fluentui/react";

interface IColorPickerWithLabelProps extends IColorPickerProps {
    label: string;
}

const ColorPickerWithLabel: React.FC<IColorPickerWithLabelProps> = (props) => {
    return (
        <Stack tokens={{ childrenGap: 10}}>
            <StackItem align={"center"}>
                <h1>{props.label}</h1>
            </StackItem>
            <StackItem>
                <ColorPicker color={props.color} onChange={props.onChange}/>
            </StackItem>
        </Stack>
    );
}

export default ColorPickerWithLabel;