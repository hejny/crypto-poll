import * as React from "react";
import * as FontAwesome from 'react-fontawesome';

import {EMPTY_OPTION} from '../config.ts';


export function RootComponent(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();



    return (

        <div>
            <input defaultValue={stateJS.name} onChange={(event)=>store.dispatch({type:'CHANGE_NAME',value:event.target.value})}/>
            <textarea defaultValue={stateJS.name} onChange={(event)=>store.dispatch({type:'CHANGE_NAME',value:event.target.value})}/>



            <ul>
                {stateJS.options.map((option)=>(
                    <li>
                        {option.name} -
                        {option.address}

                    </li>
                ))}
            </ul>


            <button onClick={()=>store.dispatch({type:'OPTION_ADD',option:EMPTY_OPTION})}>
                <FontAwesome name="plus"/>
                Add
            </button>


        </div>
);

}
