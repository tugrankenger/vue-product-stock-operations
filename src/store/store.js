import { createStore } from 'vuex'
import product from './modules/product'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const store = createStore({
  state:{
    purchase: 0.0,
    sale: 0.0,
    balance: 0.0
  },
  getters,
  mutations,
  actions,

  modules:{
    product
  }
})

export default store