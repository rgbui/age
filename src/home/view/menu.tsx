import { observer } from "mobx-react"
import React from "react"
import { Button } from "../../../component/view/button"
import { Icon } from "../../../component/view/icon"
import { S } from "../../../i18n/view"
import { PlusSvg } from "../../../component/svgs"
import { Avatar } from "../../user/avator/face"
import { signUser } from "../../user"


export var MenuView = observer(function () {
    return <div className="flex">
        <div className="flex-auto">
            <input></input>
        </div>
        <div className="flex-fixed flex">
            <Button>
                <span className="flex">
                    <span><S>创建</S></span><Icon icon={PlusSvg}></Icon>
                </span>
            </Button>
            <span>
                {!signUser.isSign && <Button><S>登录/注册</S></Button>}
                {signUser.isSign && <Avatar userid={signUser.id}></Avatar>}
            </span>
        </div>
    </div>
})