import { GET_DOGS, GET_DETAIL, GET_BY_NAME, ALL_TEMPS, ORDER, FILTER_TEMP, CREATE, ADD_FAV, DELETE_FAV, FILTER_ORIGIN } from "./actions-type";

const initialState = {
    dogs:[],
    dogsCopy:[],
    temperaments: [],
    myFavorites: [],
    allDogsFavorites: []
}

const reducer = (state= initialState, {type, payload}) => {
    switch(type){
        case GET_DOGS:
            return {
                ...state,
                dogs: payload,
                dogsCopy: payload
            }
            
        case GET_BY_NAME:
            return {
                ...state,
                dogs: payload
            }
        
        case ALL_TEMPS:
            return{
                ...state,
                temperaments: payload
            }
            
        default:
            return{
                ...state,
            }
    }
}

export default reducer