import { GET_DOGS, GET_DETAIL, GET_BY_NAME, ALL_TEMPS, ORDER, FILTER_TEMP, CREATE, ADD_FAV, DELETE_FAV, FILTER_ORIGIN } from "./actions-type";

const initialState = {
    dogs:[],
    dogsCopy:[],
    temperaments: [],
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
        case FILTER_TEMP:
            if(payload === 'All'){
                return{
                    ...state, 
                }                
            } else {
                let filteredDogs = state.dogsCopy.filter((dog) =>
                    dog?.temperament?.includes(payload)
                )
                return {
                    ...state,
                    dogs:filteredDogs
                }
            }
        
        case ORDER:
            let orderDogs = [...state.dogsCopy]

            switch(payload){
                case "A":
                    orderDogs.sort((a,b) => a.name.localeCompare(b.name))
                    break;
                case "D":
                    orderDogs.sort((a,b) => b.name.localeCompare(a.name))
                    break;
                case "maxWeight":
                    orderDogs.sort((a,b)=>{
                        const pesoA = parseInt(a.weight.split(' - ')[0])
                        const pesoB = parseInt(b.weight.split(' - ')[0])

                        if(pesoA > pesoB){
                            return -1
                        }
                        if(pesoA < pesoB){
                            return 1
                        }
                        return 0 
                    })
                    break;
                case "minWeight":
                    orderDogs.sort((a,b)=>{
                        const pesoA = parseInt(a.weight.split(' - ')[0])
                        const pesoB = parseInt(b.weight.split(' - ')[0])

                        if(pesoA < pesoB){
                            return -1
                        }
                        if(pesoA > pesoB){
                            return 1
                        }
                        return 0 
                    })
                    break;
                default:
                    break;
            }

            return{
                ...state,
                dogs:orderDogs
            }

        default:
            return{
                ...state,
            }
    }
}

export default reducer