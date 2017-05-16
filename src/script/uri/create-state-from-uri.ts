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

            name: 'Crypto poll',
            description: 'vote by sending BTC',
            editing: true,

            options: [
                {
                    name: 'Option 1',
                    color: '#bceca9',
                    address: '1CAVFkxE4Em91wn6AosyavpCpbR6jYRJgF',
                    address_type: 'BTC',
                },
                {
                    name: 'Option 2',
                    color: '#eca9a9',
                    address: '171BiDVWuX6aGeB7rr4yKfSzhAMBzJEEoT',
                    address_type: 'BTC',
                },
                {
                    name: 'Option 3',
                    color: '#a3f9f9',
                    address: '1HJAfW7iAhNvnGES5uLCrnkSdQzyiju4AE',
                    address_type: 'BTC',
                }
            ],

            starting_date: 0,

            httpStatus: 200,

        };
    }

    return(Immutable.fromJS(stateJS));


}