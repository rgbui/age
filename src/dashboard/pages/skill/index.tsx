import React from "react";
import { Button } from "../../../../component/view/button";
import { AgeUrl, UrlRoute } from "../../../age-history";

export class SkillsView extends React.Component {
    render() {
        return <div>
            <div className="flex">
                <Button onMouseDown={e => {
                    this.createSkill()
                }}>创建技能应用</Button>
            </div>
        </div>
    }
    createSkill() {
        UrlRoute.push(AgeUrl.flow);
    }
}