const xpStore = {
  namespaced: true,
  state:{
    name:"xp",
    detailGood:{}
  },
  getter:{

  },
  mutations:{
    getDetailGood(state,payload){
      state.detailGood = payload
    }
  },
  actions:{

  }
}
export default xpStore