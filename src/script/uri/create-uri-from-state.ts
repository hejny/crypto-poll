import * as LZUTF8 from 'lzutf8';


export async function createUriFromState(stateJS):string{

    var compressedState = LZUTF8.compress(JSON.stringify(stateJS),{outputEncoding:"Base64"});
    return `#${compressedState}`;


}