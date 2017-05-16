import * as Immutable from "immutable";
import * as LZUTF8 from 'lzutf8';



export async function createStateFromUri(uri:string){

    let stateJS;
    try{

        const compressedState = uri.substr(1);
        stateJS = JSON.parse(LZUTF8.decompress(compressedState,{inputEncoding:"Base64"}));

    }catch(error){

        console.warn(`Something got wrong => loading default state.`);
        stateJS = {

            name: '',
            description: '',
            editing: true,

            options: [{
                name: '',
                color: '#0f0fff',
                address: '',
                address_type: 'BTC',
            }],

            starting_date: 0,

            httpStatus: 200,

        };
    }

    return(Immutable.fromJS(stateJS));


}