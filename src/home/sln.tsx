import { observer } from "mobx-react"
import React from "react"

import AgeRun from "../assert/img/age.run.svg";
import { Icon } from "../../component/view/icon";
import { DoubleLeftSvg } from "../../component/svgs";
export var SlnView = observer(function () {
    return <div className=" h100 relative visible-hover">

        <div className="">

            <div className="flex">
                <div className="flex-fixed">
                    <Icon icon={AgeRun} size={40}></Icon>
                </div>
                <div className="flex-auto flex-end size-20 visible item-hover round text-1">
                    <Icon size={20} icon={DoubleLeftSvg}></Icon>
                </div>
            </div>

            <div className="r-h-30 r-item-hover r-padding-w-10 r-flex  r-cursor">

                <div><a className="flex"><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>首页</span></a></div>

                <div><a className="flex"><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>最近打开</span></a></div>

                <div><a className="flex"><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>模板中心</span></a></div>

                <div><a className="flex"><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>一体化应用</span></a></div>


            </div>

        </div>

        <div className="pos" style={{ bottom: 0, left: 0, right: 0 }}>

        </div>

    </div>
})