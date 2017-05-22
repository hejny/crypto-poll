import * as React from "react";
import * as FontAwesome from 'react-fontawesome';

import {EMPTY_OPTION} from '../config.ts';

import {stateReducer} from '../reducers/state';
import {createUriFromState} from '../uri/create-uri-from-state';




export class PollEditor extends React.Component {


    constructor(props) {
        super(props);
        let props = this.props;
        const {store} = props;
        const stateJS = store.getState().toJS();



        this.state = {
            viewUrl: null
        };



        createUriFromState(stateReducer(store.getState(), {type: 'MODE_PUBLISHED'})).then((viewUrl)=>{

            this.setState({
                viewUrl: viewUrl
            })


        });

    }


    render() {

        let props = this.props;
        const {store} = props;
        const stateJS = store.getState().toJS();



        if(!this.state.viewUrl){
            return(
                <div>
                    <FontAwesome name='spinner' spin />Loading
                </div>
            )
        }
        const viewUrl = document.location.toString().split('#')[0]+this.state.viewUrl;
        const iFrameHtml = `<iframe width="300" height="400" frameborder="0" src="${viewUrl}">`;





        return (

            <div className="poll-editor">


                <input type="text" className="poll-name" defaultValue={stateJS.name}
                       onChange={(event)=>store.dispatch({type:'CHANGE_NAME',value:event.target.value})}/>
                <textarea className="poll-description" defaultValue={stateJS.description}
                          onChange={(event)=>store.dispatch({type:'CHANGE_DESCRIPTION',value:event.target.value})}/>


                <ul className="poll-options">
                    {stateJS.options.map((option, option_index)=>(
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


                            <span className="clickable"
                                  onClick={(event)=>store.dispatch({type:'OPTION_DELETE',option_index})}>
                            <FontAwesome name="trash"/>
                            Delete
                        </span>


                        </li>
                    ))}
                </ul>


                {/*/^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[2][0-9]|0\d)$/g*/}
                <label className="poll-date">
                    Starting date (transactions before this date will not be counted):
                    <input

                        type="text"
                        className={isNaN((new Date(stateJS.start_date)).getTime())?'invalid':''}
                        defaultValue={stateJS.start_date}
                        onChange={(event)=>store.dispatch({type:'CHANGE_START_DATE',value:event.target.value})}

                    />
                </label>


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


}