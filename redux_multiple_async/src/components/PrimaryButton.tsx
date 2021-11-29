import React from "react";
import {IBaseButtonProps, mergeStyleSets, PrimaryButton as PrimaryButtonFluent} from "@fluentui/react";

const classes = mergeStyleSets({
    main: {
        margin: '1rem',
    }
})

const PrimaryButton: React.FC<IBaseButtonProps> = (props) => {
    return (
      <PrimaryButtonFluent onClick={props.onClick} className={classes.main}>{props.children}</PrimaryButtonFluent>
    );
}

export default PrimaryButton;