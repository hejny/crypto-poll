import * as Immutable from "immutable";



export function stateReducer(state,action){



    switch (action.type) {


        case 'MODE_EDIT':
            return state.set('mode','EDIT');
        case 'MODE_PREVIEW':
            return state.set('mode','PREVIEW');
        case 'MODE_PUBLISHED':
            return state.set('mode','PUBLISHED');


        case 'CHANGE_NAME':
            return state.set('name',action.value);

        case 'CHANGE_DESCRIPTION':
            return state.set('description',action.value);


        case 'CHANGE_START_DATE':
            return state.set('start_date',action.value);


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