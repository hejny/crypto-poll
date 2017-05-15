import * as Immutable from "immutable";



export function stateReducer(state,action){



    switch (action.type) {



        case 'CHANGE_NAME':

            return state.set('name',action.name);

        case 'CHANGE_DESCRIPTION':

            return state.set('description',action.name);


        case 'CHANGE_STARTING_DATE':

            return state.set('starting_date',action.starting_date.getTime());


        case 'OPTION_ADD':

            return state.update('options',(options)=>options.push(Immutable.fromJS(action.option)));

        case 'OPTION_CHANGE_KEY':

            return state.setIn(['options',action.option_index,action.key],action.value);

        case 'OPTION_DELETE':

            return state.deleteIn(['options',action.option_index]);


        default:
            return state
    }



}