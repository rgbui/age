import React from "react";
import { CommandItemType, getCommands } from "./data";
import { ArrowDownSvg, DotSvg, DotsSvg, DoubleLeftSvg, DragHandleSvg } from "../../../component/svgs";
import { Icon } from "../../../component/view/icon";
import { Input } from "../../../component/view/input";
import { S } from "../../../i18n/view";


export class CommandShopView extends React.Component {
    componentDidMount(): void {
        this.commands = getCommands();
    }
    commands: CommandItemType[] = [];
    renderCommands() {
        function runderCommand(command: CommandItemType, deep: number, index: number) {
            return <div key={index}>
                <div className="flex">
                    <span className="flex-fixed" style={{ width: deep * 20 }}></span>
                    {command.childs?.length > 0 && <span className="flex-fixed"><Icon icon={ArrowDownSvg}></Icon></span>}
                    <span className="flex-fixed"><Icon icon={command.icon || DotSvg}></Icon></span>
                    <span className="flex-auto">{command.text}</span>
                    <span className="flex flex-fixed">
                        <span><Icon icon={DotsSvg}></Icon></span>
                        <span><Icon icon={DragHandleSvg}></Icon></span>
                    </span>
                </div>
                {command.childs.length > 0 && command.spread == true && <div>
                    {command.childs.map(c => {
                        return runderCommand(c, deep + 1, index)
                    })}
                </div>}
            </div>
        }
        return this.commands.map((command, index) =>{
            return runderCommand(command, 0, index)
        })
    }
    renderHeader() {
        return <div>
            <div>
                <span className="flex-fixed"><S>指令</S></span>
                <div className="flex-auto"> <Input></Input></div>
                <div className="flex-fixed">
                    <span><Icon icon={{ name: 'byte', code: 'home' }}></Icon></span>
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