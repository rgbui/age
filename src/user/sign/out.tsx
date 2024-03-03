import React from "react";
import { S } from "../../../i18n/view";
import { authSock } from "../../../net/sock";
import { signUser } from "..";


export class LogOut extends React.Component {
    private isLogout: boolean = false;
    async componentDidMount() {
        if (this.isLogout == false) {
            var r = await authSock.get('/sign/out')
            if (r.ok) {
                signUser?.removeTim();

                // surface.user?.removeTim();
                // surface.user = new User();
                // surface.workspace?.removeTim()
                // if (window.shyConfig.isPro) {
                //     if (config.isServerSide) {
                //         surface.user.toSign();
                //     }
                //     else if (config.isDesk) {
                //         surface.user.toSign();
                //     }
                //     else {
                //         location.href = UrlRoute.getUrl();
                //     }
                // }
                // else UrlRoute.push(ShyUrl.root);
            }
        }
    }
    render() {
        return <div className='shy-logout'>
            <span><S>正在退出中...</S></span>
        </div>
    }
}