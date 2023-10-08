import { GET_DOGS, GET_DETAIL, GET_BY_NAME, ORDER, FILTER_TEMP, GET_TEMP, CREATE, ADD_FAV, DELETE_FAV, FILTER_ORIGIN, ALL_TEMPS } from "./actions-type";
import axios from 'axios'

const URL = 'http://localhost:3001'

export const getDogs = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/dogs`)
            return dispatch({
                type: GET_DOGS,
                payload: data
            })
        } catch (error) {
            console.error('Error al cargar todos los perros: ', error)
            
        }
    }
}

export const getByName = (name) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/name?name=${name}`)
            return dispatch({
                type: GET_BY_NAME,
                payload:data
            })
        } catch (error) {
            console.error('Error: no se encuentra el nombre')
        }
    }
}

export const allTemps = () => {
    return async(dispatch) => {
        try {
           const { data } = await axios.get(`${URL}/temperaments`)
           return dispatch({
            type: ALL_TEMPS,
            payload: data
           })
        } catch (error) {
            console.error('Error al cargar los temperamentos')
        }
    }
}