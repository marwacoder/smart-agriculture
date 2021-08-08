import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import auth from './modules/auth';


Vue.use(Vuex);

export const store = new Vuex.Store({
    
    modules: {
        auth,
        stocks
   }
})