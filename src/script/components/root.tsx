import * as React from "react";
import * as FontAwesome from 'react-fontawesome';



export function RootComponent(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();



    return (

        <div>
            <h1><FontAwesome name="times"/>{stateJS.value}</h1>
            <input defaultValue={stateJS.value} onChange={(event)=>store.dispatch({type:'CHANGE_VALUE',value:event.target.value})}/>
        </div>
    );

}
