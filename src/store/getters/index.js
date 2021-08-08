import stocks from '../../dummyData/data';
import drivers from '../../dummyData/driver'

export const state = {
    isLoading: false,
    error: false,
    funds: 10000,
    stocks: stocks,
    drivers: drivers
}

export const getters = {
     stockMarket(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            if (record) {
                return {
                id: stock.id,
                name: record.name,
                category: record.category,
                quantity: stock.quantity,
                price: stock.price
                }
            }
            return {
                id: stock.id,
                name: stock.name,
                category: stock.category,
                quantity: stock.quantity,
                price: stock.price
            }
        })
    },
    funds(state) {
        return state.funds
    },
    stocks: (state) => {
        return state.stocks;
    },
    drivers: (state) => {
        return state.drivers;
    }
    
}
