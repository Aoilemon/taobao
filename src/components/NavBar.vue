<template>
  <div class="navbar">
    <mt-tabbar>
      <mt-tab-item>
        <router-link to="/home" tag="div" class="navtag" activeClass='on'>
          <i class="fa fa-home"></i>
          <span>首页</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/cart" tag="div" class="navtag" activeClass='on'>
          <i class="fa fa-shopping-cart"></i>
          <span>购物车</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/order" tag="div" class="navtag" activeClass='on'>
          <i class="fa fa-list"></i>
          <span>订单列表</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/user" tag="div" class="navtag" activeClass='on'>
          <i class="fa fa-user-o"></i>
          <span>我的淘宝</span>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {

}
</script>
<style lang='scss'>
  .navbar{
    box-sizing: border-box;
    .mint-tabbar{
      position: fixed;
      height: 1.173333rem;
      background: #fff;
      border-top: 1px solid #e7e7e7;
      .mint-tab-item,.mint-tab-item.is-selected{
        background: #fff;
        padding: 0;
        div.mint-tab-item-label{
          display: flex;
          justify-content: center;
          height: 100%;
          color: #5d656b;
          .navtag{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            i{
              font-size: .586667rem;
              margin-bottom: .106667rem;
            }
          }
        }
      }
    }
  }
  .on{
    color: #f40;
  }
</style>