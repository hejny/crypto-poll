import * as React from "react";
import * as FontAwesome from 'react-fontawesome';

import {PollEditor} from './poll-editor';
import {PollViewer} from './poll-viewer';


export function RootComponent(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();



    return (

        <div className="poll">



            {stateJS.mode==='EDIT'?<PollEditor store={store}/>:<PollViewer store={store}/>}



            {stateJS.mode==='PUBLISHED'?
                <footer>
                    Created by <a href="https://www.pavolhejny.com" target="_blank">Pavol Hejný</a>
                    &nbsp;&nbsp;•&nbsp;&nbsp;
                    <a href={document.location.toString().split('#')[0]} target="_blank"><FontAwesome name="pencil"/>Create your own poll</a>
                </footer>


                :
                <footer>
                    Created by <a href="https://www.pavolhejny.com" target="_blank">Pavol Hejný</a>
                    &nbsp;&nbsp;•&nbsp;&nbsp;
                    <a href="https://github.com/hejny/crypto-poll" target="_blank"><FontAwesome name="github"/>Source code</a>
                    &nbsp;&nbsp;•&nbsp;&nbsp;
                    <a href="https://blockchain.info/address/17AwBzbouUn615MPNDUAcSbuc6him8ch4u" target="_blank">Donate in BTC</a>
                </footer>
            }




        </div>


);

}
