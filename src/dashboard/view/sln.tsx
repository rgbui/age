import { observer } from "mobx-react"
import React from "react"

import AgeRun from "../../assert/img/age.run.svg";
import { Icon } from "../../../component/view/icon";
import { DoubleLeftSvg } from "../../../component/svgs";
import { dashBoard } from "../store";
import { AgeUrl, UrlRoute } from "../../age-history";
import { Avatar } from "../../user/avator/face";
import { signUser } from "../../user";

export var SlnView = observer(function () {
    if (dashBoard.slnSpread == false) {
        return <div className="h100 flex flex-col flex-full">
            <div className="flex-auto flex flex-col r-gap-b-20 r-size-30 r-cursor ">
                <div onMouseDown={e => {
                    dashBoard.slnSpread = !dashBoard.slnSpread;
                }} className="flex-fixed">
                    <Icon icon={AgeRun} size={40}></Icon>
                </div>
                <div onMouseDown={e => {
                    UrlRoute.push(AgeUrl.dashboard)
                }}>
                    <Icon size={20} icon={{ name: 'byte', code: 'workbench' }}></Icon>
                </div>
                <div onMouseDown={e => {
                    UrlRoute.push(AgeUrl.dashboard, { lately: true })
                }}>
                    <Icon size={20} icon={{ name: 'byte', code: 'history' }}></Icon>
                </div>
                <div onMouseDown={e => {
                    UrlRoute.push(AgeUrl.shop)
                }}>
                    <Icon size={20} icon={{ name: 'byte', code: 'browser-safari' }}></Icon>
                </div>
                <div onMouseDown={e => {
                    UrlRoute.push(AgeUrl.skills)
                }}>
                    <Icon size={20} icon={{ name: 'byte', code: 'application-effect' }}></Icon>
                </div>

            </div>
            <div className="flex-fixed flex flex-col">
                <Avatar size={30} userid={signUser.id}></Avatar>
            </div>
        </div>
    }
    else
        return <div className=" h100 relative visible-hover">

            <div >

                <div className="flex">
                    <div className="flex-fixed">
                        <Icon icon={AgeRun} size={40}></Icon>
                    </div>

                    <div onMouseDown={e => {
                        dashBoard.slnSpread = !dashBoard.slnSpread;
                    }} className="flex-auto cusor flex-end size-20 visible item-hover round text-1">
                        <Icon size={20} icon={DoubleLeftSvg}></Icon>
                    </div>
                </div>

                <div className="r-h-30 r-item-hover r-padding-w-10 r-gap-b-10 r-flex  r-cursor">

                    <div onMouseDown={e => {
                        UrlRoute.push(AgeUrl.dashboard)
                    }}><a className="flex" ><Icon icon={{ name: 'byte', code: 'home' }}></Icon><span>首页</span></a></div>

                    <div onMouseDown={e => {
                        UrlRoute.push(AgeUrl.dashboard, { lately: true })
                    }}><a className="flex"><Icon icon={{ name: 'byte', code: 'history' }}></Icon><span>最近打开</span></a></div>

                    <div onMouseDown={e => {
                        UrlRoute.push(AgeUrl.shop)
                    }}><a className="flex"><Icon icon={{ name: 'byte', code: 'browser-safari' }}></Icon><span>市场</span></a></div>

                    <div onMouseDown={e => {
                        UrlRoute.push(AgeUrl.skills)
                    }}><a className="flex"><Icon icon={{ name: 'byte', code: 'application-effect' }}></Icon><span>一体化应用</span></a></div>


                </div>

            </div>

            <div className="pos" style={{ bottom: 0, left: 0, right: 0 }}>

            </div>

        </div>
})