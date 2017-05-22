import * as Immutable from "immutable";
import * as LZUTF8 from 'lzutf8';



function yyyymmdd(date){
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [date.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd
    ].join('-');
}





export async function createStateFromUri(uri:string){

    let stateJS;
    try{

        const compressedState = uri.split('#',2)[1];
        stateJS = JSON.parse(LZUTF8.decompress(compressedState,{inputEncoding:"Base64"}));

    }catch(error){


        console.warn(`Something got wrong => loading default state.`);
        stateJS = {

            name: 'Crypto poll',
            description: 'vote by sending BTC',
            mode: 'EDIT',

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
                },
                {
                    name: 'Option 4',
                    color: '#ccfccc',
                    address: '17AwBzbouUn615MPNDUAcSbuc6him8ch4u',
                    address_type: 'BTC',
                },
                {
                    name: 'Option 5',
                    color: '#fc5cfc',
                    address: '1B8KnmzgrHhzkQdqnLWRJ6cuEMMghXkBTs',
                    address_type: 'BTC',
                }
            ],

            start_date: yyyymmdd(new Date()),

            httpStatus: 200,

        };
    }

    return(Immutable.fromJS(stateJS));


}