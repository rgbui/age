import { observer } from "mobx-react";
import React from "react";
import { HeadMenu } from "./head";
import { CommandShopView } from "./command";
import { TaskView } from "./task/view";
import { FlowsView } from "./flows/view";
import { flowStore } from "./store";

export var FlowView = observer(function () {
    async function load() {
        // var task = UrlRoute.match(AgeUrl.task)?.id;
    }
    React.useEffect(() => {
        load();
    },[])
    return <div className="flex flex-col flex-full vw100 vh100">
        <div className="flex-fixed">
            <HeadMenu></HeadMenu>
        </div>
        <div className="flex-auto flex flex-full">
            <div className="flex-fixed border-right" style={{ width: flowStore.slnWidth }} >
                <CommandShopView></CommandShopView>
                <FlowsView></FlowsView>
            </div>
            <div className="flex-auto">
                {flowStore.selectItem?.task && <TaskView task={flowStore.selectItem?.task}></TaskView>}
            </div>
        </div>
    </div>
})