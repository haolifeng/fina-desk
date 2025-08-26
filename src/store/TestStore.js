import { makeObservable, observable, computed, action, flow, makeAutoObservable } from "mobx"

class TestStore {
    sum = 0;
    constructor() {
        makeAutoObservable(this);
    }
        increment() {
        this.sum += 1;
    }
}

export default TestStore;