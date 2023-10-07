import { GET_DOGS, GET_DETAIL, GET_BY_NAME, ORDER, FILTER_TEMP, CREATE, ADD_FAV, DELETE_FAV, FILTER_ORIGIN } from "./actions-type";

const initialState = {
    dogs:[],
    myFavorites: [],
    allDogsFavorites: []
}

const reducer = (state= initialState, {type, payload}) => {
    switch(type){
        case GET_DOGS:
            return {
                ...state,
                dogs: payload
            }
            
        default:
            return{
                ...state
            }
    }
}

export default reducer