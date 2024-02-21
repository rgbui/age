import { observer } from "mobx-react";
import React from "react";
import { Icon } from "../component/view/icon";
import { BugSvg, FileAddSvg, FileSaveSvg, RunSvg } from "../svgs";
import "./style.less";
export var NavView = observer(function () {
    return <div className='seer-navs'>
        <div className="seer-navs-left">
            <a>
                <Icon icon={FileAddSvg}></Icon>
                <span>新建</span>
            </a>
            <a>
                <Icon icon={FileSaveSvg}></Icon>
                <span>保存</span>
            </a>
            <a>
                <Icon icon={RunSvg}></Icon>
                <span>运行</span>
            </a>
            <a>
                <Icon icon={BugSvg}></Icon>
                <span>调试</span>
            </a>
            <a>
                <Icon icon={BugSvg}></Icon>
                <span>诊断</span>
            </a>
        </div>
        <div className="seer-navs-right"></div>
    </div>
})