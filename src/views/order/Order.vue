<template>
  <div class="search-bar-page">
    <!--搜索框 -->
    <div class="search-box">
      <div class="search-box-left">
        <i class="fa fa-search  search-ko "></i>
        <input type="text" placeholder="搜索全部订单" class="search-input" @input="serachorder" v-model="searchVal"/>
        <i class="fa fa-close" v-if="isShow" @click="clearInp"></i>
      </div>
      <div class="search-box-right">
        <span>搜索</span>
      </div>
    </div>
    <!-- 组件 -->
    <OrderCard
      v-for="(item,idx) in searchGoodList"
      :key="idx"
      :item='item'
    ></OrderCard>
   
  <NavBar/>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import NavBar from '@/components/NavBar'
import OrderCard from'./OrderCard.vue'
export default {
  data(){
    return{
      searchVal:'',
      isShow:false,
      searchGoodList:this.summaryList
    }
  },
  components:{
    OrderCard,
    NavBar
  },
  computed:{
    ...mapState('xpStore',['summaryList'])
  },
  methods:{
    ...mapMutations('xpStore',['updateSummaryList']),
    serachorder(){
      this.isShow = this.searchVal ? true : false
      let searchGoodList = this.summaryList.filter(item=>{
        return item.title.indexOf(this.searchVal.trim()) > -1
      })
      
      this.searchGoodList = searchGoodList
    },
    clearInp(){
      this.searchVal = ''
      this.searchGoodList = this.summaryList
      this.isShow = false
    }
  },
  mounted(){
    this.updateSummaryList()
    this.searchGoodList = this.summaryList
  },
  beforeRouteEnter (to, from, next) {
    let res =localStorage.getItem('login')
    if(res){
      let isLogin=JSON.parse(res);
      if(isLogin===true){
        next()
      }else{
        next('/login')
      }
    }else{
      next('/login')
    }
  }
  
}
</script>
<style lang='scss'>
.search-bar-page{ 
  background: rgb(245,245,245);
  overflow: hidden;
  padding-bottom: 1.6rem;
  .search-box{
    width: 9.36rem;
    height: .72rem;
    display: flex;
    // align-items: center;
    margin-left: .266667rem;
    padding: .266667rem .266667rem;
  }
  .search-box-left{
    width: 7.04rem;
    height: .72rem;
    background: white;
    border-radius: 0.5rem; 
    display: flex;    
    align-items: center;
  }
  .fa{
    font-weight: normal;
    font-size: .333333rem;
  }
  .search-ko{
    font-size: .426667rem;
    color: #b2b2bb;
    margin-left: .166667rem;
  }
  .search-input{
    width: 5.52rem;
    height: .426667rem;
    border: none;
    margin-left: .166667rem;
    outline: none;
  }
  .search-box-right{
    background: #ff5000;
    width: 2rem;
    color: #ffffff;
    font-size: .373333rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    margin-left: .32rem;
    height: 0.72rem；
  }

  
}
</style>