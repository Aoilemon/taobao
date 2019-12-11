const xpStore = {
  namespaced: true,
  state:{
    name:"xp",
    detailGood:{},
    shopCartList:[]
  },
  getter:{

  },
  mutations:{
    getDetailGood(state,payload){
      state.detailGood = payload
    },
    getShopCartList(state,payload){
      let shopList = JSON.parse(localStorage.getItem('shopList'))
      let arr = [...payload,...shopList]
      state.shopCartList = arr
      window.localStorage.setItem('shopList',JSON.stringify(arr))
      console.log(state.shopCartList)
    }
  },
  actions:{

  }
}
export default xpStore