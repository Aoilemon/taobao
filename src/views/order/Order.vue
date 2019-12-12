<template>
  <div class="search-bar-page">
    <!--搜索框 -->
    <div class="search-box">
      <div class="search-box-left">
        <i class="fa fa-search  search-ko "></i>
        <input type="text" placeholder="搜索全部订单" class="search-input"/>
      </div>
      <div class="search-box-right">
        <span>搜索</span>
      </div>
    </div>
    <!-- 组件 -->
  <OrderCard></OrderCard>
<OrderCard></OrderCard>
<OrderCard></OrderCard>
   
  <NavBar/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import OrderCard from'./OrderCard.vue'
export default {
components:{
  OrderCard,
  NavBar
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