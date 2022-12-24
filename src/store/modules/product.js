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
  saveProduct({commit},payload){
    //vue axios operations
  },
  sellProduct({commit}, payload){
    //vue axios operations
  }
}

export default { state, getters, mutations, actions }