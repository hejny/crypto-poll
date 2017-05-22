import {ICryptocoinAddress} from "./cryptocoin.ts"

import * as SuperagentPromise from 'superagent-promise';
import * as Superagent from 'superagent';
const superagentPromise = SuperagentPromise(Superagent, Promise);





export class BitcoinAddress implements ICryptocoinAddress{

    private _valid:boolean;



    constructor(private _address:string){
    }



    async getAddresInputs(start_date:Date):number{


        try {


            const response = await superagentPromise('GET', `https://blockchain.info/q/getreceivedbyaddress/${this._address}?start_time=${Math.round(start_date.getTime())}&format=plain`);
            //console.log(response);
            if (response.text === '') {
                return NaN;
            }

            const btc = parseInt(response.text) / 100000000;
            return btc;

        }catch(error){
            return NaN;
        }

    }




    static async getUDSRate():number{

        //todo using limit=1 is not semantically correct - there should be API with param like from=BTC
        const coinMarketCaps = await superagentPromise('GET', 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=1');
        return coinMarketCaps[0].price_usd

    }






}