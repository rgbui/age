import { PlusSvg } from "../../../component/svgs";
import { lst } from "../../../i18n/store";

export type CommandItemType = {
    text: string,
    icon?: any,
    childs?: CommandItemType[],
    url?: string,
    spread?: boolean

}



export function getCommands(): CommandItemType[] {
    return [
        {
            text: lst('条件判断'),
            icon: PlusSvg,
            spread: true,
            childs: [
                {
                    url: '/age/if',
                    text: lst('IF 条件'),
                    icon: PlusSvg,
                },
                {
                    url: '/age/web/if/contains',
                    text: lst('IF 网页包含'),
                    icon: PlusSvg,
                },
                {
                    url: '/age/web/if/visible',
                    text: lst('IF 元素可见'),
                    icon: PlusSvg,
                },
            ]
        }
    ]
}