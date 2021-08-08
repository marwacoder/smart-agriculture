import axios from '../../API/axios-instance'
import * as actionTypes from '../actions/actionTypes';




export const actions = {
    auth: ({ commit }, credentials) => {
        commit(actionTypes.AUTH_START)
         axios.post('/login', credentials).then(response => {
             console.log(response)
             commit(actionTypes.AUTH_SUCCESS,response.data)
        }).catch(error => {
            console.log(error)
            commit(actionTypes.AUTH_ERROR, error.response.data)
        })
    }
};
