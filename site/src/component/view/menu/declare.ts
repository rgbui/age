export type MenuItemType<T = string> = {
    name?: T,
    type?: MenuItemTypeValue,
    text?: string,
    icon?: SvgrComponent,
    render?: (item: MenuItemType<T>) => JSX.Element,
    iconSize?: number,
    label?: string,
    checkLabel?: boolean,
    childs?: MenuItemType<T>[],
    value?: any,
    checked?: boolean,
    disabled?: boolean,
    /**
     * 备注
     */
    remark?: string,
    param?: any,
    url?: string,
    visible?: boolean
}
export enum MenuItemTypeValue {
    divide = 1,
    text = 2,
    item = 3,
    switch = 4,
    input = 5,
    button = 6
}
