import { observer } from "mobx-react";
import React from "react";
import "./style.less";

export var ConsoleView = observer(function () {
    async function load() {

    }
    React.useEffect(() => {
        load();
    }, [])
    return <div className='seer-console'>
        <div className="seer-console-head"></div>
        <div className="seer-console-content"></div>
    </div>
})