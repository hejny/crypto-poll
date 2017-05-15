import * as Immutable from "immutable";



export async function createStateFromUri(uri:string){


    return(Immutable.fromJS({

        name: '',
        description: '',
        editing: true,

        options: [{
           name: '',
           address: '',
           address_type: 'BTC',
        }],

        starting_date: 0,

        httpStatus: 200,

    }));





}