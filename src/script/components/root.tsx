import * as React from "react";
import * as FontAwesome from 'react-fontawesome';



export function RootComponent(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();



    return (

        <div>
            <input defaultValue={stateJS.name} onChange={(event)=>store.dispatch({type:'CHANGE_NAME',value:event.target.value})}/>
            <textarea defaultValue={stateJS.name} onChange={(event)=>store.dispatch({type:'CHANGE_NAME',value:event.target.value})}/>



            <ul>



        </div>
    );

}
