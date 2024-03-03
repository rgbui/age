import { observer } from "mobx-react"
import React from "react"
import { SlnView } from "./sln"
import { DashBoard } from "./dashboard"

export var HomeView = observer(function ()
{
    return <div>
        <div className="flex flex-full vh100">
            <div className="flex-fixed w-250 border-right">
                <SlnView></SlnView>
            </div>
            <div className="flex-auto flex flex-col">
                <DashBoard></DashBoard>
            </div>
        </div>
    </div>
})