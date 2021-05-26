import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        user: [],
        shoppingCar: []
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setShoppingCar(state, payload) {
            state.shoppingCar.push (payload);
        },
        setClearCar(state) {
            state.shoppingCar = []
        },
        setUserState (state, payload) {
            state.user.push (payload);
        }
    },
    actions: {
        addItemCar(context, payload){
            context.commit ('setShoppingCar', payload)
        },
        removeItemCar(){

        },
        setUser(context, payload) {
            context.commit('setUserState', payload)
        },
        clearCar(context){
            context.commit ('setClearCar')
        },  
        finishOrder(){

        }
    }
})