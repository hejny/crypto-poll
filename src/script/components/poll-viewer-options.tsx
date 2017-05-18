import * as React from "react";
import * as FontAwesome from 'react-fontawesome';
import * as moment from "moment";
import * as tinycolor from "tinycolor2";

import {BitcoinAddress} from "../resources/bitcoin.ts";



export class PollViewerOptions extends React.Component {

    private _options:Object[];

    constructor(props) {

        super(props);
        const {store} = props;
        this._options = store.getState().toJS().options;



        this.state = {
            amounts: null,
            updated: null
        };


        this.tick();

    }



    tick(){
        Promise.all(this._options.map((option)=>{


            const bitcoinAddress = new BitcoinAddress(option.address);
            return bitcoinAddress.getAddresInputs(new Date());


        })).then((amounts)=>{


            this.setState({
                amounts: amounts,
                updated: new Date()
            });


            setTimeout(()=>this.tick(),5000);


        });
    }


    render() {


        if(!this.state.amounts){
            return(
                <div>
                    <FontAwesome name='spinner' spin />Loading
                </div>
            )
        }


        const maxAmount = this.state.amounts.reduce((amount, biggest)=>amount < biggest ? biggest : amount, 0);


        return (
            <div>
                <ul className="poll-options">
                    {this._options.map((option,option_index)=>(


                        <a href={'https://blockchain.info/address/'+option.address} target="_blank">

                            <li key={option_index} style={{
                                    backgroundColor: option.color,
                                    width: this.state.amounts[option_index]/maxAmount*100+'%',
                                }}>



                                {option.name}
                                {(this.state.amounts[option_index]===-1)?
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
                {moment(this.state.updated).calendar()}
            </div>
        );
    }

}