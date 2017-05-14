import * as Immutable from "immutable";



export async function createStateFromUri(uri:string){


    return(Immutable.fromJS({
        value: uri==='/'?'Hello world':uri,
        httpStatus: 200,
    }));





}