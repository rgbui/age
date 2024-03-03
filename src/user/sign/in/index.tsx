import React from "react";

import { UsLogin } from "./us";
import { CnLogin } from "./cn";

import AgeRun from "../../../assert/img/age.run.svg";

import "./style.less"
import { config } from "../../../common/config";
import { Icon } from "../../../../component/view/icon";

export var Login = (function () {
    return <div className={'shy-login-panel   desk-drag'}  >
        <div className='shy-login-logo'><a className="text-p" href={'/'}> <Icon icon={AgeRun} size={40}></Icon></a></div>
        {config.isUS && <UsLogin></UsLogin>}
        {!config.isUS && <CnLogin></CnLogin>}
    </div>
})