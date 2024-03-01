import { observer } from "mobx-react"
import React from "react"

import AgeRun from "../assert/img/age.run.svg";
import { Icon } from "../../component/view/icon";
import { DoubleLeftSvg } from "../../component/svgs";

export var SlnView = observer(function () {
    return <div className="flex flex-col">

        <div className="flex-auto">
            <div className="flex">
                <div className="flex-fixed">
                    <Icon icon={AgeRun} size={40}></Icon>
                </div>
                <div className="flex-auto flex-end">
                    <Icon size={20} icon={DoubleLeftSvg}></Icon>
                </div>
            </div>

            <div>

                <a><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>首页</span></a>
                <a><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>最近打开</span></a>

                <a><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>模板中心</span></a>
                <a><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>一体化应用</span></a>


            </div>




        </div>

        <div className="flex-fixed">

        </div>
    </div>
})