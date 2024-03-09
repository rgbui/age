import React from "react";
import { CommandItemType, getCommands } from "./data";
import { DotSvg, DoubleLeftSvg, DragHandleSvg } from "../../../component/svgs";
import { Icon } from "../../../component/view/icon";
import { Input } from "../../../component/view/input";
import { S } from "../../../i18n/view";
import { makeObservable, observable } from "mobx";
import { observer } from "mobx-react";

@observer
export class CommandShopView extends React.Component {
    constructor(props) {
        super(props)
        this.commands = getCommands();
        makeObservable(this, {
            commands: observable
        })
    }
    commands: CommandItemType[] = [];
    onDrag(command: CommandItemType, event: React.MouseEvent) {

    }
    renderCommand(command: CommandItemType, deep: number, index: number) {
        var self = this;
        return <div key={index}>
            <div className="flex h-30 padding-w-10  visible-hover item-hover-light cursor">
                <span className="flex-fixed" style={{ width: deep * 20 }}></span>
                {command.childs?.length > 0 && <span className={"flex-fixed flex-center size-20 cursor ts " + (command.spread ? "" : "rotate-90-")} onMouseDown={e => {
                    command.spread = !command.spread;
                }}><Icon size={16} icon={{ name: 'byte', code: 'down' }}></Icon></span>}
                <span className="flex-fixed"><Icon icon={command.icon || DotSvg}></Icon></span>
                <span className="flex-auto">{command.text}</span>
                <span className="flex flex-fixed visible r-size-20  r-flex-center r-item-hover r-round r-cursor">
                    <span onMouseDown={e => {
                        self.onDrag(command, e)
                    }}><Icon size={16} icon={DragHandleSvg}></Icon></span>
                </span>
            </div>
            {Array.isArray(command.childs) && command.childs.length > 0 && command.spread == true && <div>
                {command.childs.map((c, i) => {
                    return self.renderCommand(c, deep + 1, i)
                })}
            </div>}
        </div>
    }
    renderCommands() {
        return this.commands.map((command, index) => {
            return this.renderCommand(command, 0, index)
        })
    }
    renderHeader() {
        return <div>
            <div className="flex">
                <span className="flex-fixed"><S>指令</S></span>
                <div className="flex-auto"><Input></Input></div>
                <div className="flex-fixed flex r-cursor r-size-24 r-flex-center">
                    <span><Icon icon={{ name: 'byte', code: 'indent-left' }}></Icon></span>
                    <span><Icon icon={DoubleLeftSvg}></Icon></span>
                </div>
            </div>
        </div>
    }
    render() {
        return <div>
            {this.renderHeader()}
            {this.renderCommands()}
        </div>
    }
}