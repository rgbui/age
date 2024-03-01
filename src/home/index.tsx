import { observer } from "mobx-react"
import React from "react"
import { SlnView } from "./sln"
import { MenuView } from "./menu"

export var HomeView = observer(function () {
    return <div>
        <div className="flex flex-full">
            <div className="flex-fixed">
                <SlnView></SlnView>
            </div>
            <div className="flex-auto flex flex-col">
                <div className="flex-fixed">
                    <MenuView></MenuView>
                </div>
                <div className="flex-auto">
                    
                </div>
            </div>
        </div>
    </div>
})