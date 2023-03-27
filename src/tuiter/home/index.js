import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./WhatsHappening";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;
