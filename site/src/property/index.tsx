import { observer } from "mobx-react";
import React from "react";
import "./style.less";
export var PropertyView = observer(function ()
{
    return <div className='seer-property'>
        <div className="seer-property-head"><span>属性</span></div>
        <div className="seer-propertys"></div>
    </div>
})