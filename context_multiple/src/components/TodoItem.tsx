import React from "react";
import {Checkbox, mergeStyleSets, Stack, StackItem} from "@fluentui/react";
import {useColorsContext} from "../store/ColorsContext";

const TodoItem: React.FC<Api.ITodo> = (props) => {
    const { textColor } = useColorsContext();

    const classes = mergeStyleSets({
        paragraph: {
            color: 'black',
        }
    })

    return (
        <Stack horizontal tokens={{childrenGap: 10}} verticalAlign={"center"}>
            <StackItem>
                <p className={classes.paragraph} style={{ color: textColor}}>
                    {props.text}
                </p>
            </StackItem>
            <StackItem>
                <Checkbox checked={props.completed}/>
            </StackItem>
        </Stack>
    );
};

export default TodoItem;