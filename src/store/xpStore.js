const xpStore = {
  namespaced: true,
  state:{
    detailGood:{},
    shopCartList:[],
    addGoods:[],
    summaryList:[]
  },
  getter:{

  },
  mutations:{
    getDetailGood(state,payload){
      state.detailGood = payload
    },
    addCart(state,payload){
      state.addGoods = payload
    },
    getShopCartList(state,payload){
      let shopList = JSON.parse(localStorage.getItem('shopList'))
      if(shopList){
        payload.forEach(item=>{
          let id = item.id
          let index = shopList.findIndex(item => {
            return item.id === id
          })
          if(index > -1){
            shopList[index].num = item.num 
          }else{
            shopList.push(item)
          }
        })
        state.shopCartList = shopList
        window.localStorage.setItem('shopList',JSON.stringify(shopList))
      }else{
        window.localStorage.setItem('shopList',JSON.stringify(payload))
      }
    },
    updateCartList(state,payload){
      state.shopCartList = payload
    },
    updateCartGoods(state,payload){
      state.shopCartList = payload
      window.localStorage.setItem('shopList',JSON.stringify(payload))
    },
    updateSummaryList(state,payload){
      let summaryArr = JSON.parse(localStorage.getItem('summary'))

      summaryArr = summaryArr || []
      state.summaryList = payload ? summaryArr.concat(payload) : summaryArr

      console.log(summaryArr,payload,state.summaryList)

      localStorage.setItem('summary',JSON.stringify(state.summaryList))
      
    }
  },
  actions:{

  }
}
export default xpStore