import { observer } from "mobx-react";
import React from "react";
import { HeadMenu } from "./head";
import { CommandShopView } from "./command";
import { TaskView } from "./task/view";
import { AgeUrl, UrlRoute } from "../age-history";

export var AppView = observer(function () {
    async function load() {
        var task = UrlRoute.match(AgeUrl.task)?.id;
    }
    React.useEffect(() => {
        load();
    },[])
    return <div className="flex flex-col flex-full">

        <div className="flex-fixed h-40">
            <HeadMenu></HeadMenu>
        </div>
        <div className="flex-auto">
            <div className="flex flex-full h100 w100">
                <div className="flex-fixed">
                    <CommandShopView></CommandShopView>
                </div>
                <div className="flex-auto">
                    <TaskView></TaskView>
                </div>
            </div>
        </div>
    </div>
})