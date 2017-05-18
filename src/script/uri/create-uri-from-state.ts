import * as LZUTF8 from 'lzutf8';


export async function createUriFromState(state):string{

    var compressedState = LZUTF8.compress(JSON.stringify(state.toJS()),{outputEncoding:"Base64"});
    return `#${compressedState}`;


}