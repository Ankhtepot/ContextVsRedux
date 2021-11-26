import React from "react";
import {Checkbox, mergeStyleSets, Stack, StackItem} from "@fluentui/react";
import {useColorsReducer} from "../store/store";

const Todo: React.FC<Api.ITodo> = (props) => {
    const { textColor } = useColorsReducer();

    const classes = mergeStyleSets({
        paragraph: {
            color: textColor,
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