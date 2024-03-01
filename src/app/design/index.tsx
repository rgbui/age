// import { observer } from "mobx-react"
// import React from "react";
// import { store } from "../store";
// import { Icon } from "../component/view/icon";
// import { CloseSvg } from "../../svgs";
// import { TaskView } from "./task/view";
// import "./style.less";

// @observer
// export class DesignView extends React.Component {
//     render() {
//         return <div className='seer-design'>
//             <div className="seer-design-navs">{store.taskTreeStore.currentTasks.map(ta => {
//                 return <a className={"seer-design-nav-item" + (store.taskTreeStore.openTaskId == ta.id ? " hover" : "")}
//                     key={ta.id}
//                     onContextMenu={e => { store.taskTreeStore.onContextmenuNav(e, ta) }} onClick={e => store.taskTreeStore.onOpenTask(ta)}>
//                     <span className="seer-design-nav-item-text">{ta.text}</span>
//                     <Icon onClick={e => { e.stopPropagation(); store.taskTreeStore.onCloseTask(ta) }} icon={CloseSvg}></Icon>
//                 </a>
//             })}</div>
//             <div className="seer-design-task">
//                 {store.taskTreeStore.currentTaskStore && <TaskView store={store.taskTreeStore.currentTaskStore}></TaskView>}
//             </div>
//         </div>
//     }
// }

