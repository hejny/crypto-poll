import * as Immutable from "immutable";



export function stateReducer(state,action){



    switch (action.type) {



        case 'CHANGE_NAME':

            return state.set('value',action.value);

        case 'CHANGE_DESCRIPTION':
        case 'CHANGE_STARTING_DATE':


        case 'OPTION_ADD':
        case 'OPTION_CHANGE_KEY':
        case 'OPTION_DELETE':




        default:
            return state
    }



}