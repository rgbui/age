import React from "react";
import { EventsComponent } from "../../component/lib/events.component";
import { PopoverSingleton } from "../../component/popover/popover";
import { S } from "../../i18n/view";



export class CreateBot extends EventsComponent {
    render() {
        return <div>

        </div>
    }
    renderStep1() {
        return <div>
            <div>
                <div><S>工作流</S></div>
            </div>
            <div>
                <div><S>机器人</S></div>
            </div>
        </div>
    }
    open(data) {

    }
}

export async function useCreateBot(data?: any) {


    let popover = await PopoverSingleton(CreateBot, { mask: true });
    var cb = await popover.open({ center: true, centerTop: 100 })
    cb.open(data);
    return new Promise((resolve: (data: {}) => void, reject) => {
        popover.only('change', (data) => {
            popover.close();
            resolve(data);
        })
        popover.only('close', () => {
            resolve(undefined)
        })
    })

}