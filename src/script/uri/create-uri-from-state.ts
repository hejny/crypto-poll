export async function createUriFromState(stateJS):string{



    let uriParts = [];

    uriParts.push(stateJS.value);


    return `/${uriParts.join('/')}`;


}