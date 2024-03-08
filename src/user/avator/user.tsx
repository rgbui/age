import React from "react";
import { UserBasic } from "..";
import { userService } from "../service/service";


export class UserBox extends React.Component<{
    userid: string,
    children?: (user: UserBasic) => React.ReactNode
}> {
    private user: UserBasic;
    async componentDidMount() {
        this.willUnmount = false;
        if (!this.user) {
            if (!this.props.userid) {
                return;
            }
            var r = await userService.getBasic({ userid: this.props.userid });
            if (r.ok) {
                this.user = r.data.user as any;
                if (this.willUnmount == false)
                    this.forceUpdate()
            }
        }
    }
    willUnmount: boolean = false;
    componentWillUnmount(): void {
        this.willUnmount = true;
    }
    render() {
        if (!this.user) return <></>
        return this.user && this.props.children(this.user)
    }
}
