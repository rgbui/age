import { observer } from "mobx-react";
import React from "react";
import { store } from "../app/store";
import { Icon } from "../component/view/icon";
import { ArrowDownSvg, ArrowRightSvg } from "../svgs";
import { loadShopApis } from "./data";
import "./style.less";

export var ShopView = observer(function () {
    async function load() {
        store.apis = await loadShopApis();
    }
    React.useEffect(() => {
        load();
    }, [])
    return <div className='seer-shop'>
        {store.apis.map(s =>{
            return <div key={s.text} className='seer-shop-group'>
                <h3 onMouseDown={e => s.spread = s.spread ? false : true}>
                    <Icon icon={s.spread ? ArrowDownSvg : ArrowRightSvg}></Icon>
                    <span>{s.text}</span>
                </h3>
                {s.spread && <ol>{s.childs.map(c => {
                    return <li key={c.url} >
                        <a style={{paddingLeft:20}}>
                            <span>{c.text}</span>
                        </a>
                    </li>
                })}</ol>}
            </div>
        })}
    </div>
})