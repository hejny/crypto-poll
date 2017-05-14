import * as Immutable from "immutable";



export function stateReducer(state,action){



    switch (action.type) {



        case 'CHANGE_VALUE':

            return state.set('value',action.value);


        default:
            return state
    }



}