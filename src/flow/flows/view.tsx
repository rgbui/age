import { observer } from "mobx-react";
import React from "react";
import { Icon } from "../../../component/view/icon";
import { DotsSvg, PlusSvg } from "../../../component/svgs";
import { FlowItemType, FlowItemApiType, FlowItem, flowStore } from "../store";
import { MouseDragger } from "../../common/dragger";


@observer
export class FlowsView extends React.Component {
    constructor(props) {
        super(props)
    }
    getItemIcon(item: FlowItem) {
        if (item.type === FlowItemType.folder) {
            return <span className="flex-center size-24 item-hover round cursor"><Icon size={16} icon={{ name: 'byte', code: item.spread ? 'folder-open' : 'folder' }}></Icon></span>
        }
        else if (item.type == FlowItemType.flow) {
            return <span className="flex-center size-24 item-hover round cursor"><Icon size={16} icon={{ name: 'byte', code: 's-turn-left' }}></Icon></span>
        }
        else if (item.type == FlowItemType.data) {
            return <span className="flex-center size-24 item-hover round cursor"><Icon size={16} icon={{ name: 'byte', code: 'table-file' }}></Icon></span>
        }
        else if (item.type == FlowItemType.api) {
            var text = 'POST';
            if (item.apiType == FlowItemApiType.get) {
                text = 'GET';
            }
            else if (item.apiType == FlowItemApiType.put) {
                text = 'PUT';
            }
            else if (item.apiType == FlowItemApiType.delete) {
                text = 'DEL'
            }
            else if (item.apiType == FlowItemApiType.patch) {
                text = 'PAT'
            }
            return <span>
                {text}
            </span>
        }
    }
    onContextMenu(event: React.MouseEvent, item: FlowItem) {
        event.stopPropagation();
        event.preventDefault();
    }
    onDrag(event: React.MouseEvent, item: FlowItem) {
        MouseDragger({
            event,
            moving(event, data, isEnd, isMove) {

                if (isEnd) {
                    if (isMove) {

                    }
                    else {
                        flowStore.onSelect(item);
                    }
                }

            },
        })
    }
    renderItem(item: FlowItem, deep: number = 0, index: number) {
        if (item.type == FlowItemType.category) {
            return <div key={index}>
                <div className="flex h-30 visible-hover padding-w-10">
                    <div className="flex flex-auto h-30 " onMouseDown={e => {
                        item.spread = !item.spread;
                    }}>
                        <span>{item.text}</span>
                        <span className="size-20 flex-center ">
                            <Icon size={16} icon={{ name: 'byte', code: item.spread ? "down" : "up" }}></Icon>
                        </span>
                    </div>
                    <div className="flex flex-fixed visible  r-item-hover r-round r-size-24 r-flex-center r-cursor ">
                        <span><Icon icon={PlusSvg}></Icon></span>
                    </div>
                </div>
                {item.spread && Array.isArray(item.childs) && item.childs.length > 0 && item.childs.map((item, i) => {
                    return this.renderItem(item, deep + 1, i)
                })}
            </div>
        }
        return <div key={index} >
            <div className="flex h-30  visible-hover  padding-w-10" onMouseDown={e => this.onDrag(e, item)}>
                <div style={{ width: deep * 10 }}></div>
                <div className="flex-fixed flex-center">{this.getItemIcon(item)}</div>
                <div className="flex-auto text-overflow">{item.text}</div>
                <div className="flex-fixed r-item-hover r-round r-size-24 r-flex-center r-cursor visible">
                    {item.type == FlowItemType.folder && <span><Icon icon={PlusSvg}></Icon></span>}
                    <span onContextMenu={e => { this.onContextMenu(e, item) }}><Icon icon={DotsSvg}></Icon></span>
                </div>
            </div>
            {item.spread && Array.isArray(item.childs) && item.childs.length > 0 && item.childs.map((item, i) => {
                return this.renderItem(item, deep + 1, i)
            })}
        </div>
    }
    render() {
        return <div>
            {flowStore.items.map((item, i) => {
                return this.renderItem(item, 0, i)
            })}
        </div>
    }
}