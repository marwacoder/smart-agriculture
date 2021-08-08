import * as actionTypes from '../actions/actionTypes';

export const mutations = {
    [actionTypes.INIT_STOCKS_START]: (state) => {
        state.isLoading = true;
    },
     [actionTypes.INIT_STOCKS_SUCCESS]: (state , payload) => {
        state.stocks = payload;
    },
     [actionTypes.INIT_STOCKS_ERROR]: (state) => {
         state.isLoading = false;
         state.error = true;
    },
    [actionTypes.ADD_STOCK_SUCCESS]: (state, payload) => {
        const record = state.stocks.find(element => element.id == payload.id);
        if (record) {
            record.quantity += payload.quantity;
        }
        else {
            state.stocks.push({
                id: payload.id,
                name: payload.name,
                category: payload.category,
                quantity: payload.quantity,
                price: payload.price
            })
        }
        state.funds += payload.price * payload.quantity;
    },
    [actionTypes.DELETE_STOCK_SUCCESS]: (state, id) => {
        const record = state.stocks.find(element => element.id == id);
        if (record) {
         state.stocks.splice(state.stocks.indexOf(record), 1); 
        }
    },
    [actionTypes.DISPATCH_STOCK_SUCCESS]: (state, payload) => {
        const record = state.stock.find(element => element.id == payload.id);
        if (record.quantity > payload.quantity) {
            record.quantity -= payload.quantity;
        }
        else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds -= payload.price * payload.quantity;
    },
    [actionTypes.ADD_DRIVER_SUCCESS]: (state, payload) => {
        const regNo = state.drivers.find(element => element == payload.regNo);
        console.log(state.drivers,'ggg')
        if (!regNo) {
            state.drivers.push({
                name: payload.name,
                gender: payload.gender,
                address: payload.address,
                vehicleName: payload.vehicleName,
                vehicleType: payload.vehicleType,
                model: payload.model,
                color: payload.color,
                regNo: payload.regNo
                
            })
            console.log(payload,'payload')
        }
    }
}

