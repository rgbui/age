import React from "react";
import { ConsoleView } from "../console";
import { DesignView } from "../design";
import { PropertyView } from "../property";
import { NavView } from "../nav";
import { MenuView } from "./menu";
import "./style.less";

export function App() {
    let [isLoad, setLoad] = React.useState(false);
    async function load() {
        setLoad(true);
    }
    React.useEffect(() => {
        load();
    }, []);
    function renderView() {
        return <div className="theme-light seer-app">
            <MenuView></MenuView>
            <NavView></NavView>
            <DesignView></DesignView>
            <ConsoleView></ConsoleView>
            <PropertyView></PropertyView>
        </div>
    }
    return <div className='seer-task'>
        {!isLoad && <div className='seer-task-load'></div>}
        {isLoad && renderView()}
    </div>
}


