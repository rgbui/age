import React from "react";
import { Route, Router, Routes } from "react-router";
import { View404 } from "./404";
import { AppView } from "./app";
import { HomeView } from "./home";

import { Spin } from "../component/view/spin";
import { BrowserRouter } from "react-router-dom";
import { user } from "./user";


export class App extends React.Component {
    isLoad: boolean = false;
    componentDidMount(): void {
        this.load()
    }
    async load() {
        await user.sign();
        this.isLoad = true;
        this.forceUpdate()
    }
    render() {
        return <div className='age-app'>
            {!this.isLoad && <div >
                <Spin></Spin>
            </div>}
            {this.isLoad && this.renderView()}
        </div>
    }
    renderView() {
        return <div className="theme-light age-app">
            <BrowserRouter >
                <Routes >
                    <Route path={'/design'} Component={AppView}></Route>
                    <Route path={'/home'} Component={HomeView}></Route>
                    <Route Component={View404}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('error', error);

    }
}


