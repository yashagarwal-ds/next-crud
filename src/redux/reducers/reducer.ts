import { GET_DATA, getData } from "../actions/action";

const initialState : any = {
    data : []
}

const reducer = (state = initialState, action : any) => {
    console.log('action', action)
    switch(action.type){
        case GET_DATA : return {...state, data : action.payload}

        default : return state;
    }
};

export default reducer;