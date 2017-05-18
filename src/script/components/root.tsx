import * as React from "react";
import * as FontAwesome from 'react-fontawesome';

import {PollEditor} from './poll-editor';
import {PollViewer} from './poll-viewer';


export function RootComponent(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();



    return (

        <div className="poll">



            {stateJS.editing?<PollEditor store={store}/>:<PollViewer store={store}/>}





        </div>


);

}
