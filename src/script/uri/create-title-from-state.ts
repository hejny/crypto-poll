import {WEB_NAME,TITLE_SEPARATOR} from '../config.ts';


export async function createTitleFromState(stateJS):string{


    let titleParts = [];

    titleParts.push(stateJS.value);
    titleParts.push(WEB_NAME);

    return titleParts.filter((part)=>part!=='').join(TITLE_SEPARATOR);



}