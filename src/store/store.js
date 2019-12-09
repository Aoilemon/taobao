import Vue from 'vue'
import Vuex from 'vuex'

// 小组成员模块引入
import xmStore from './xmStore'
import xpStore from './xpStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    xmStore,
    xpStore
  }
})

export default store