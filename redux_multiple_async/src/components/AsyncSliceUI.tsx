import React from "react";
import {mergeStyleSets, Stack, StackItem} from '@fluentui/react';
import PrimaryButton from "./PrimaryButton";

const AsyncSliceUI: React.FC = () => {

    const classes = mergeStyleSets({
        totalParagraph: {
            margin: '0 0 0 1rem'
        }
    })

    return (
        <Stack>
            <StackItem>
                <h1>Async Operations:</h1>
            </StackItem>
            <Stack horizontal>
                <PrimaryButton>Operate 1 second</PrimaryButton>
                <PrimaryButton>Operate 3 second</PrimaryButton>
                <PrimaryButton>Operate 5 second</PrimaryButton>
                <PrimaryButton>Operate 1 and 3 seconds in sequence</PrimaryButton>
                <Stack verticalAlign='center'>
                    <h3>Waited total:</h3>
                </Stack>
                <Stack verticalAlign='center'>
                    <p className={classes.totalParagraph}>0</p>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AsyncSliceUI;