import {WEB_NAME,TITLE_SEPARATOR} from '../config.ts';


export async function createTitleFromState(state):string{


    let titleParts = [];

    titleParts.push(state.toJS().name);
    titleParts.push(WEB_NAME);

    return titleParts.filter((part)=>part!=='').join(TITLE_SEPARATOR);



}