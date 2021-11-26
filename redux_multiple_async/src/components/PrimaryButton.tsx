import React from "react";
import {PrimaryButton as PrimaryButtonFluent} from "@fluentui/react";

type PrimaryButtonProps = {
    onClick: () => void;
}

//Add styles

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
    return (
      <PrimaryButtonFluent onClick={props.onClick}>{props.children}</PrimaryButtonFluent>
    );
}