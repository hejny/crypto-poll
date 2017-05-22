import * as React from "react";
import * as FontAwesome from 'react-fontawesome';
import * as moment from "moment";
import * as tinycolor from "tinycolor2";

import {BitcoinAddress} from "../resources/bitcoin.ts";



export class PollViewerOptions extends React.Component {

    private _start_date:Date;
    private _options:Object[];

    constructor(props) {

        super(props);
        const {store} = props;
        const stateJS = store.getState().toJS();
        this._start_date = new Date(stateJS.start_date);
        this._options = stateJS.options;



        this.state = {
            amounts: null,
            updated: null
        };


        this.tick();

    }



    tick(){
        Promise.all(this._options.map((option)=>{


            const bitcoinAddress = new BitcoinAddress(option.address);
            return bitcoinAddress.getAddresInputs(this._start_date);


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
        const sumAmount = this.state.amounts.reduce((amount, sum)=>isNaN(amount)?sum:sum+amount, 0);


        return (
            <div>
                <ul className="poll-options">
                    {this._options.map((option,option_index)=>(


                        <a href={'https://blockchain.info/address/'+option.address} target="_blank">

                            <li key={option_index} style={{
                                    backgroundColor: option.color,
                                    width: isNaN(this.state.amounts[option_index])?0:this.state.amounts[option_index]/maxAmount*100+'%',
                                }}>



                                {option.name}
                                {isNaN(this.state.amounts[option_index])?
                                    <div>
                                        <FontAwesome name='exclamation-triangle' />Wrong address
                                    </div>
                                    :<div>
                                        {sumAmount===0?'':(Math.round(this.state.amounts[option_index]/sumAmount*100*100)/100+'%')}

                                        <div className="address">
                                            {option.address}
                                            <img src={`https://blockchain.info/qr?data=${option.address}&size=200`} />
                                        </div>


                                    </div>}

                                {/**/}




                            </li>

                        </a>
                    ))}
                </ul>
                <div className="updated">
                    Updated {moment(this.state.updated).calendar()}
                </div>

            </div>
        );
    }

}