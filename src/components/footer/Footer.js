import React from "react";
import ActionButtons from "./ActionButtons";
import RemainingTodos from "./RemainingTodos";
import StatusFilter from "./StatusFilter";
import ColorFilter from "./ColorFilter";

const Footer = () => {

    return (
        <div>
            <ActionButtons/>
            {/*<RemainingTodos/>*/}
            <StatusFilter/>
            <ColorFilter/>
        </div>
    )
}

export default Footer;