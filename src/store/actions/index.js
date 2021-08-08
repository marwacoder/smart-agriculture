import * as actionTypes from '../actions/actionTypes';
import stocks from '../../dummyData/data'



export const actions = {
    addDriver: ({ commit }) => {
        commit(actionTypes.ADD_DRIVER_SUCCESS)
    },
    initStockStart: ({ commit }) => {
        commit(actionTypes.INIT_STOCKS_START)
    },
    initStocksSuccess: ({ commit }) => {
        commit(actionTypes.INIT_STOCKS_SUCCESS, stocks)
    },
    initStockError: ({ commit }) => {
        commit(actionTypes.INIT_STOCKS_ERROR)
    },
    addStock: ({ commit }, data) => {
        commit(actionTypes.ADD_STOCK_SUCCESS, data);
    },
    deleteStock: ({ commit }, data) => {
        commit(actionTypes.DELETE_STOCK_SUCCESS, data);
    },
    dispatchStock({ commit }, data) {
        commit(actionTypes.DISPATCH_STOCK_SUCCESS, data)
    }
};
