import { observer } from "mobx-react"
import React from "react"
import { Icon } from "rich/component/view/icon"

export var SlnView = observer(function () {
    return <div className="flex flex-col">

        <div className="flex-auto">
            <div className="flex">
                <div className="flex-fixed"></div>
                <div className="flex-auto flex-end">

                </div>
            </div>

            <div>
                <a><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>首页</span></a>
            </div>




        </div>

        <div className="flex-fixed">

        </div>
    </div>
})