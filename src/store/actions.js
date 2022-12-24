import axios from 'axios'
export const setTradeResult = ({state, commit}, tradeResult)=>{
  //update purchase, sale, balance in store
  commit('updateTradeResult',tradeResult)
  let tradeData = {
    purchase : state.purchase,
    sale : state.sale
  }
  axios.put('https://product-operations-a1129-default-rtdb.firebaseio.com/trade-result.json',tradeData).then((res)=>{
    console.log(res)
    console.log(state.purchase)
    console.log(state.sale)
    console.log(state.balance)
  })
}

export const getTradeResult = ({commit})=>{
  //connect firebase and get balance, sale, purchase and update state
}