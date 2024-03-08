import React from "react";
import { Route, Routes } from "react-router";
import { View404 } from "./404";
import { AppView } from "./app";
import { HomeView } from "./home";

import { Spin } from "../component/view/spin";
import { BrowserRouter } from 'react-router-use-history'
import { ageHistory } from './age-history'
import { signUser } from "./user";
import { AgeUrl, UrlRoute } from "./age-history";
import { Login } from "./user/sign/in";
import { LogOut } from "./user/sign/out";
import { renderAvatorStatusSvgMask } from "./user/avator/status";


export class App extends React.Component {
    isLoad: boolean = false;
    componentDidMount(): void {
        this.load()
    }
    async load() {
        await signUser.sign();
        this.isLoad = true;
        console.log('signUser.isSign', signUser)
        if (signUser.isSign) {
            UrlRoute.redict(AgeUrl.dashboard);
        }
        else {
            UrlRoute.redict(AgeUrl.signIn)
        }
        this.forceUpdate();
    }
    render() {
        return <div className='age-app'>
             {renderAvatorStatusSvgMask()}
            {!this.isLoad && <div >
                <Spin></Spin>
            </div>}
            {this.isLoad && this.renderView()}
        </div>
    }
    renderView() {
        return <div className="theme-light age-app">
            <BrowserRouter history={ageHistory}>
                <Routes>
                    <Route path={AgeUrl.flow} Component={AppView}></Route>
                    <Route path={AgeUrl.dashboard} Component={HomeView}></Route>
                    <Route path={AgeUrl.signIn} Component={Login}></Route>
                    <Route path={AgeUrl.signOut} Component={LogOut}></Route>
                    <Route Component={View404}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('error', error);

    }
}


