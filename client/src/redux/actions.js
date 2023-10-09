import { GET_DOGS, GET_DETAIL, GET_BY_NAME, ORDER, FILTER_TEMP, FILTER_ORIGIN, ALL_TEMPS } from "./actions-type";
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

export const filterTemp = async (temperament) => {
    try {
        const { data } = await axios.get(`${URL}/temperaments`)
        return ({
            type: FILTER_TEMP,
            payload: data
        })
    } catch (error) {
        console.error('Error al cargar los temperamentos')
    }
}

export const order = (order) =>{
    return ({
        type: ORDER,
        payload: order
    })
}

export const origin = (source) => {
    return ({
        type: FILTER_ORIGIN,
        payload: source
    })
}

export const getDetail = (id) => {
    return async(dispatch) => {
        try {
            console.log(`fetchin: ${id}`);
            const { data } = await axios.get(`${URL}/dogs/${id}`)    
            console.log(`data: ${data}`);
        
            return dispatch({
                type: GET_DETAIL,
                payload:data
            })
        } catch (error) {
            console.error('Error: no se encuentra el nombre')
        }
    }
}