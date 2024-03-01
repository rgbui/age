import { observer } from "mobx-react"
import React from "react"
import { PlusSvg } from "rich/component/svgs"
import { Avatar } from "rich/component/view/avator/face"
import { Button } from "rich/component/view/button"
import { Icon } from "rich/component/view/icon"
import { S } from "rich/i18n/view"

export var MenuView = observer(function () {
    return <div className="flex">
        <div className="flex-auto">
            <input></input>
        </div>
        <div className="flex-fixed">
            <Button>
                <span className="flex">
                    <span><S>创建</S></span><Icon icon={PlusSvg}></Icon>
                </span>
            </Button>
            <span>
                {/* <Avatar userid={'ss'}></Avatar> */}
            </span>
        </div>
    </div>
})