import { makeObservable, observable } from "mobx";
import { TaskTreeStore } from "../task/store";

class SeerStore {
    apis: { text: string, spread: boolean, childs: { url: string, text: string }[] }[] = [];
    constructor() {
        makeObservable(this, {
            apis: observable
        });
    }
    taskTreeStore: TaskTreeStore = new TaskTreeStore()
}
export var store = new SeerStore();