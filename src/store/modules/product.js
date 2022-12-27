import axios from 'axios'
import router from '../../router'
const state = {
  products:[]
}

const getters = {
  getProducts(state){
    return state.products
  },
  getProduct(state, product){ // for single product
    return key => state.products.filter(element =>{
      return element.key == key
    })
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
    axios.get('https://product-operations-a1129-default-rtdb.firebaseio.com/products.json').then((res)=>{
      console.log("initApp: ",res)
      let data = res.data
      for(let key in data){
        data[key].key = key
      commit('updateProductList',data[key])
      }
    })
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
      router.push({name: 'ProductList'})
    })
  },
  sellProduct({state, commit, dispatch}, payload){
    let product = state.products.filter(element =>{
      return element.key == payload.key
    })
    if(product){
      let totalCount = product[0].count - payload.count
      axios.patch('https://product-operations-a1129-default-rtdb.firebaseio.com/products/'+payload.key + ".json",{count: totalCount})
      .then((res)=>{
        console.log(res)
        product[0].count = totalCount
        let tradeResult = {
          purchase: 0,
          sale: product[0].price,
          count: payload.count
        }
        dispatch('setTradeResult',tradeResult)
        router.push({name: 'ProductList'})
      })
    }
  }
}

export default { state, getters, mutations, actions }