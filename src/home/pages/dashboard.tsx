import React from "react";
import { MenuView } from "../view/menu";



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