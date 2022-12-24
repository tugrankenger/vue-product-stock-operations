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
  saveProduct({commit},payload){
    axios.post('https://product-operations-a1129-default-rtdb.firebaseio.com/products.json',payload).then((res)=>{
      console.log(res)
    })
  },
  sellProduct({commit}, payload){
    //vue axios operations
  }
}

export default { state, getters, mutations, actions }