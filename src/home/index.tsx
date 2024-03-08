import { observer } from "mobx-react"
import React from "react"
import { SlnView } from "./view/sln"
import { DashBoard } from "./pages/dashboard"
import { dashBoard } from "./store"
import { Routes, Route } from "react-router"
import { AgeUrl } from "../age-history"
import { SkillsView } from "./pages/skill"
import { ShopView } from "./pages/shop"

export var HomeView = observer(function () {
    return <div>
        <div className="flex flex-full vh100">
            <div className={"flex-fixed  border-right " + (dashBoard.slnSpread ? "w-250" : "w-40")}>
                <SlnView></SlnView>
            </div>
            <div className="flex-auto flex flex-col">
                <Routes>
                    <Route path={AgeUrl.dashboard} Component={DashBoard}></Route>
                    <Route path={AgeUrl.shop} Component={ShopView}></Route>
                    <Route path={AgeUrl.skills} Component={SkillsView}></Route>
                </Routes>
            </div>
        </div>
    </div>
})