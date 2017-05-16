import * as React from "react";
import * as FontAwesome from 'react-fontawesome';

import {EMPTY_OPTION} from '../config.ts';


export function PollEditor(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();



    return (

        <div className="poll-editor">


            <input className="poll-name" defaultValue={stateJS.name} onChange={(event)=>store.dispatch({type:'CHANGE_NAME',name:event.target.value})}/>
            <textarea className="poll-description" defaultValue={stateJS.description} onChange={(event)=>store.dispatch({type:'CHANGE_DESCRIPTION',description:event.target.value})}/>



            <ul className="poll-options">
                {stateJS.options.map((option,option_index)=>(
                    <li key={option_index}>




                        <input
                            type="color"
                            value={option.color}
                            onChange={(event)=>store.dispatch({type:'OPTION_CHANGE_KEY',option_index,key:'color',value:event.target.value})}
                        />
                        <input
                            type="text"
                            defaultValue={option.name}
                            onChange={(event)=>store.dispatch({type:'OPTION_CHANGE_KEY',option_index,key:'name',value:event.target.value})}
                        />



                        <label>
                            Address:
                            <input
                                type="text"
                                defaultValue={option.address}
                                onChange={(event)=>store.dispatch({type:'OPTION_CHANGE_KEY',option_index,key:'address',value:event.target.value})}
                            />
                        </label>






                    </li>
                ))}
            </ul>


            <button onClick={()=>store.dispatch({type:'OPTION_ADD',option:EMPTY_OPTION})}>
                <FontAwesome name="plus"/>
                Add
            </button>



            <button onClick={()=>store.dispatch({type:'EDITING_OFF'})}>
                <FontAwesome name="check"/>
                Show poll
            </button>


        </div>
    );

}
