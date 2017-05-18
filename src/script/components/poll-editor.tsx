import * as React from "react";
import * as FontAwesome from 'react-fontawesome';

import {EMPTY_OPTION} from '../config.ts';


export function PollEditor(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();


    const viewUrl = window.location;
    const iFrameHtml = `<iframe src="${viewUrl}">`;


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



            <button onClick={()=>store.dispatch({type:'EDITING_OFF'})}>
                <FontAwesome name="check"/>
                Show poll
            </button>




            <div className="about">
                About
            </div>


            <div className="share">
                <h2>iframe</h2>
                <textarea value={iFrameHtml}/>
                <h2>URL</h2>
                <textarea value={viewUrl}/>
            </div>



            <footer>
                Created by <a href="https://www.pavolhejny.com" target="_blank">Pavol Hejný</a>
                &nbsp;&nbsp;•&nbsp;&nbsp;
                <a href="https://github.com/hejny/crypto-poll" target="_blank"><FontAwesome name="github"/>Source code</a>
                &nbsp;&nbsp;•&nbsp;&nbsp;
                <a href="https://blockchain.info/address/17AwBzbouUn615MPNDUAcSbuc6him8ch4u" target="_blank">Donate in BTC</a>
            </footer>




        </div>
    );

}
