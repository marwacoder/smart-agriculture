import * as actionTypes from '../actions/actionTypes';
//import { state } from '../getters/auth';

export const mutations = {
    [actionTypes.AUTH_START]: (state) =>{
        state.message = null
        state.isLoading = true
        state.isLoggedIn = false
        state.token = null
   },
    [actionTypes.AUTH_SUCCESS]: (state, credentials) =>{
            state.data = credentials.user,
                state.token = credentials.token,
                state.isLoading = false,
            state.isLoggedIn = true,
            state.error = false
    },
    [actionTypes.AUTH_ERROR]: (state, payload) =>{
        state.isLoading = false,
        state.error = true
        state.message = payload.errorMessage
   },
}

