import React from "react";
import { Route, Router, Switch } from "react-router";
import { View404 } from "./404";
import { AppView } from "./app";
import { HomeView } from "./home";
import { AgeUrl, SyHistory } from "./history";
import { Spin } from "../component/view/spin";


export function App() {
    let [isLoad, setLoad] = React.useState(false);
    async function load() {
        setLoad(true);
    }
    React.useEffect(() => {
        load();
    }, []);
    function renderView() {
        return <div className="theme-light age-app">
            <Router history={SyHistory}>
                <Switch>
                    <Route path={AgeUrl.design} exact component={AppView}></Route>
                    <Route path={AgeUrl.home} exact component={HomeView}></Route>
                    <Route component={View404}></Route>
                </Switch>
            </Router>
        </div>
    }
    return <div className='age-app'>
        {!isLoad && <div >
            <Spin></Spin>
        </div>}
        {isLoad && renderView()}
    </div>
}


