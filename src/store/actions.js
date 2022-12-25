import axios from 'axios'
export const setTradeResult = ({state, commit}, tradeResult)=>{
  //update purchase, sale, balance in store
  commit('updateTradeResult',tradeResult)
  let tradeData = {
    purchase : state.purchase,
    sale : state.sale
  }
  axios.put('https://product-operations-a1129-default-rtdb.firebaseio.com/trade-result.json',tradeData).then((res)=>{

  })
}

export const getTradeResult = ({commit})=>{
  //connect firebase and get balance, sale, purchase and update state
  axios.get('https://product-operations-a1129-default-rtdb.firebaseio.com/trade-result.json').then((res)=>{
    console.log("Response : ",res)
    let tradePrices = {
      purchase: res.data.purchase,
      sale: res.data.sale
    }
    commit('updateTradeResult',tradePrices)
  })
}