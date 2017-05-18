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



            <button onClick={()=>store.dispatch({type:'EDITING_ON'})}>
                <FontAwesome name="pencil"/>
                Edit poll
            </button>




            <footer>
                Created by <a href="https://www.pavolhejny.com" target="_blank">Pavol Hejný</a>
                &nbsp;&nbsp;•&nbsp;&nbsp;
                <a href={window.location} target="_blank"><FontAwesome name="pencil"/>Create your own poll</a>
            </footer>




        </div>
    );

}
