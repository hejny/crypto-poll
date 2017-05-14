import * as React from "react";
import * as Immutable from "immutable";
import { createStore,Store } from 'redux';


import {stateReducer} from "./reducers/state.ts";
import {RootComponent} from "./components/root.tsx";



export class App{


    private _store:Store;
    private _stateInitialized:boolean;
    private _subscribers:(() => void)[];


    constructor() {
        this._subscribers = [];
        this._stateInitialized = false;
    }

    _stateInitializedCheck(){
        if(!this._stateInitialized){
            throw new Error(`State was not set yet.`);
        }
    }


    setState(state){

        this._store = createStore(
            stateReducer//todo backward compatibility
            ,Immutable.fromJS(state)
        );
        this._store.subscribe(this._triggerSubscribers.bind(this));
        this._stateInitialized = true;

    }


    getState(){
        this._stateInitializedCheck();
        return this._store.getState().toJS();
    }


    subscribe(subscriberCallback){
        this._subscribers.push(subscriberCallback);
    }

    _triggerSubscribers(){
        this._subscribers.forEach((subscriberCallback)=>{
            subscriberCallback();
        });

    }

    createJSX(){

        this._stateInitializedCheck();
        return <RootComponent store={this._store}/>;
    }

}