import React from "react";
import { MenuView } from "./menu";



export class DashBoard extends React.Component {
    render() {
        return <div>
            <MenuView></MenuView>
        </div>
    }
    renderAgents() {
        return <div></div>
    }
    renderFlows() {
        return <div></div>
    }
}