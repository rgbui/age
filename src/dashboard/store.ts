import { makeObservable, observable } from "mobx";


 class Dashboard {

    slnSpread: boolean = true;
    constructor() {
        makeObservable(this, {
            slnSpread: observable
        })
    }
}

export var dashBoard=new Dashboard();