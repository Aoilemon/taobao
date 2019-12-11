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
      state.shopCart = payload
    }
  },
  actions:{

  }
}
export default xpStore