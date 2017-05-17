import * as React from "react";
import * as FontAwesome from 'react-fontawesome';


import * as SuperagentPromise from 'superagent-promise';
import * as Superagent from 'superagent';
const superagentPromise = SuperagentPromise(Superagent, Promise);



export class PollViewerOptions extends React.Component {


    constructor(props) {

        super(props);
        const {store} = props;
        const stateJS = store.getState().toJS();



        this.state = {
            amounts: null
        };



        Promise.all(stateJS.options.map((option)=>{


            return superagentPromise('GET', `https://blockchain.info/q/getreceivedbyaddress/${option.address}?start_time=1484705477367&format=plain`);


        })).then((amounts)=>{


            this.setState({
                amounts: amounts.map((response)=>parseInt(response.text)/100000000)
            });

        });

        //''
        /*const url = `${GALLERY_URL}?id=${props.fb_gallery_id}`;

        makeRequest('GET',url).then((response)=>{

            setImmediate(()=>{

                response = JSON.parse(response);
                this.setState({
                    data: response.data
                });

            });



        });*/





    }


    render() {


        const stateJS = this.props.store.getState().toJS();


        if(!this.state.amounts){
            return(
                <div>
                    <FontAwesome name='spinner' spin />Loading
                </div>
            )
        }


        console.log(this.state.amounts);
        const maxAmount = this.state.amounts.reduce((amount, biggest)=>amount < biggest ? biggest : amount, 0);
        console.log(maxAmount);



        return (
            <ul className="poll-options">
                {stateJS.options.map((option,option_index)=>(


                    <a href={'https://blockchain.info/address/'+option.address} target="_blank">

                        <li key={option_index} style={{
                                backgroundColor: option.color,
                                width: this.state.amounts[option_index]/maxAmount*100+'%',
                            }}>



                            {option.name}
                            {isNaN(this.state.amounts[option_index])?
                                <div>
                                    <FontAwesome name='exclamation-triangle' />Wrong address
                                </div>
                                :<div>
                                    {Math.round(this.state.amounts[option_index]/maxAmount*100*100)/100}%
                                </div>}

                            {/*<img src={`https://blockchain.info/qr?data=${option.address}&size=200`} />*/}




                        </li>

                    </a>
                ))}
            </ul>
        );
    }

}