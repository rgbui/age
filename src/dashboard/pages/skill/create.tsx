import React from "react";
import { EventsComponent } from "../../../../component/lib/events.component";
import { PopoverSingleton } from "../../../../component/popover/popover";
import { S } from "../../../../i18n/view";
import { Input } from "../../../../component/view/input";
import { SelectBox } from "../../../../component/view/select/box";
import { Textarea } from "../../../../component/view/input/textarea";
import { Button } from "../../../../component/view/button";

export class CreateSkill extends EventsComponent {
    skillData: { text: string, description: string, scene: string } = {
        text: '',
        description: '',
        scene: ''
    }
    render() {
        return <div>

            <div>
                <div className="f-12 remark "><S>名称</S></div>
                <div>
                    <Input value={this.skillData.text} onChange={e => {
                        this.skillData.text = e
                    }}></Input>
                </div>
            </div>

            <div>
                <div className="f-12 remark "><S>应用</S></div>
                <div>
                    <SelectBox options={[
                        { text: 'Web', value: 'web' },
                        { text: 'Android', value: 'android' },
                        { text: 'PC', value: 'pc' },
                    ]} value={this.skillData.scene} onChange={e => {
                        this.skillData.scene = e
                    }}></SelectBox>
                </div>
            </div>

            <div>
                <div className="f-12 remark"><S>描述</S></div>
                <div>
                    <Textarea value={this.skillData.description}
                        onChange={e => {
                            this.skillData.description = e
                        }}
                    ></Textarea>
                </div>
            </div>

            <div className="flex">
                <Button>创建</Button>
            </div>

        </div>
    }
    open(data) {

    }
}

export async function useCreateSkill(data?: any) {
    let popover = await PopoverSingleton(CreateSkill, { mask: true });
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