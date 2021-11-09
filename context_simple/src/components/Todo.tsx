import React from "react";
import {Checkbox, mergeStyleSets, Stack, StackItem} from "@fluentui/react";

const Todo: React.FC<Api.ITodo> = (props) => {
    const classes = mergeStyleSets({
        paragraph: {
            color: 'black',
        }
    })

    return (
        <Stack horizontal tokens={{childrenGap: 10}} verticalAlign={"center"}>
            <StackItem>
                <p className={classes.paragraph}>
                    {props.text}
                </p>
            </StackItem>
            <StackItem>
                <Checkbox checked={props.completed}/>
            </StackItem>
        </Stack>
    );
};

export default Todo;