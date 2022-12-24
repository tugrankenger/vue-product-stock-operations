import axios from 'axios'
const state = {
  products:[]
}

const getters = {
  getProducts(state){
    return state.products
  },
  getProduct(state){ // for single product

  }
}

const mutations={
  updateProductList(state,product){
    state.products.push(product)
  }
}

const actions = {
  initApp({commit}){
    //vue axios operations
  },
  saveProduct({dispatch, commit},product){
    axios.post('https://product-operations-a1129-default-rtdb.firebaseio.com/products.json',product).then((res)=>{
      product.key = res.data.name
      commit("updateProductList", product)

      /* update prices */
      let tradeResult = {
        purchase: product.price,
        sale: 0,
        count: product.count
      }
      dispatch('setTradeResult',tradeResult)
    })
  },
  sellProduct({commit}, payload){
    //vue axios operations
  }
}

export default { state, getters, mutations, actions }