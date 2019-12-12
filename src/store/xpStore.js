const xpStore = {
  namespaced: true,
  state:{
    name:"xp",
    detailGood:{},
    shopCartList:[],
    addGoods:[]
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
    }
  },
  actions:{

  }
}
export default xpStore