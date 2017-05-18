import * as React from "react";
import * as FontAwesome from 'react-fontawesome';
import {PollViewerOptions} from './poll-viewer-options';


export function PollViewer(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();




    return (

        <div className="poll-viewer">


           <h1>{stateJS.name}</h1>
           <p>{stateJS.description}</p>



            <PollViewerOptions store={store}/>



            {stateJS.mode==='PREVIEW'?
                <button onClick={()=>store.dispatch({type:'MODE_EDIT'})}>
                    <FontAwesome name="pencil"/>
                    Edit poll
                </button>
                :''}









        </div>
    );

}
