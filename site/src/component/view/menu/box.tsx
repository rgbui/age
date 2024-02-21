import React, { CSSProperties } from "react";
import { PopoverPosition } from "../../declare";
import { Point, Rect, RectUtility } from "../../vector/point";
import { popoverLayer } from "../zindex";


import { MenuItemType } from "./declare";
import { MenuItem } from "./item";
export class MenuBox extends React.Component<{
    items: MenuItemType[],
    style?: CSSProperties,
    deep: number,
    update: (item: MenuItemType) => void,
    select: (item: MenuItemType, event?: MouseEvent) => void
}>{
    render() {
        var isVisible = this.props.style?.overflow == 'visible' || this.props.items.exists(g => g.childs && g.childs.length > 0)
        return <div className='seer-menu-box' ref={e => this.el = e} style={{
            top: this.point.y,
            left: this.point.x,
            zIndex: popoverLayer.zoom(this),
            ...(this.props.style || {}),
            overflowY: isVisible ? "visible" : "auto",
            maxHeight: isVisible ? '100vh' : undefined,
        }}>{this.props.items.map((item, index) => {
            return <MenuItem key={index}
                item={item} deep={this.props.deep + 1}
                select={this.props.select}
                update={this.props.update}
            ></MenuItem>
        })}
        </div>
    }
    el: HTMLElement;
    point = new Point(0, 0);
    open(pos: PopoverPosition) {
        if (pos.fixPoint) this.point = pos.fixPoint;
        else this.point = pos.roundArea ? pos.roundArea.leftTop : pos.roundPoint;
        if (pos.fixPoint) {
            this.forceUpdate()
        }
        else this.forceUpdate(() => {
            if (this.el) {
                var b = Rect.from(this.el.getBoundingClientRect());
                pos.elementArea = b;
                var newPoint = RectUtility.cacPopoverPosition(pos);
                if (!this.point.equal(newPoint)) {
                    this.point = newPoint;
                    this.forceUpdate();
                }
            }
        })
    }
}
