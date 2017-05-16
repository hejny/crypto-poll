import * as React from "react";
import * as FontAwesome from 'react-fontawesome';



export function PollViewer(props) {

    const {store} = props;
    const stateJS = store.getState().toJS();



    return (

        <div className="poll-viewer">


           <h1>{stateJS.name}</h1>
           <p>{stateJS.description}</p>


            <ul className="poll-options">
                {stateJS.options.map((option,option_index)=>(
                    <li key={option_index} style={{
                        backgroundColor: option.color,
                        width: Math.random()*100+'%',
                    }}>



                        {option.name}
                        <img src={`https://blockchain.info/qr?data=${option.address}&size=200`} />




                    </li>
                ))}
            </ul>




            <button onClick={()=>store.dispatch({type:'EDITING_ON'})}>
                <FontAwesome name="pencil"/>
                Edit poll
            </button>


        </div>
    );

}
