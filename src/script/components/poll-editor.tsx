import * as React from "react";
import * as FontAwesome from 'react-fontawesome';

import {EMPTY_OPTION} from '../config.ts';

import {stateReducer} from '../reducers/state';
import {createUriFromState} from '../uri/create-uri-from-state';


export function PollEditor(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();




    const viewUrl = createUriFromState(stateReducer(store.getState(),{type:'MODE_PUBLISHED'}));
    const iFrameHtml = `<iframe width="300" height="400" frameborder="0" src="${viewUrl}">`;



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


                        <span className="clickable" onClick={(event)=>store.dispatch({type:'OPTION_DELETE',option_index})}>
                            <FontAwesome name="trash"/>
                            Delete
                        </span>




                    </li>
                ))}
            </ul>


            <button onClick={()=>store.dispatch({type:'OPTION_ADD',option:EMPTY_OPTION})}>
                <FontAwesome name="plus"/>
                Add
            </button>



            <button onClick={()=>store.dispatch({type:'MODE_PREVIEW'})}>
                <FontAwesome name="check"/>
                Show poll
            </button>




            <div className="about">
            </div>


            <div className="share">
                <h2>iframe</h2>
                <textarea value={iFrameHtml}/>


                {/*<div dangerouslySetInnerHTML={{__html: iFrameHtml}} />*/}


                <h2>URL</h2>
                <textarea value={viewUrl}/>
            </div>







        </div>
    );

}
