<template>
<div>
  <div class="sort">
    <div class="sort-list">
      <div class="sort-one" v-for="item in sortList" :key="item.id">
        <div class="sort-top">
          <img :src="item.top.src" alt="">
          <p>{{ item.top.title }}</p>
        </div>
        <div class="sort-bottom">
          <img :src="item.bottom.src" alt="">
          <p>{{ item.bottom.title }}</p>
        </div>
      </div>  

    </div>
  </div>
  <div class="scrollbar">
    <div>
      <div></div>
    </div>
  </div>
</div>
</template>
<script>
import fetch from '@/api/fetch.js'
export default {
  data(){
    return {
      sortList:[]
    }
  },
  mounted(){
    fetch('/db/sort.json',res=>{
      this.sortList = res.data
    })
  }
}
</script>
<style lang='scss'>
@mixin sort {
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 1.626667rem;
    height: 1.28rem;
  }
  p{
    font-size: .293333rem;
    color: rgb(102, 102, 102);
    line-height: .4rem;
    margin-top: .106667rem;
  }
}
  .sort{
  
    width: 100%;
    background: #fff;
    overflow: auto;
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }
    .sort-list{
      width: 1.626667rem;
      display: flex;
      .sort-one{
        display: flex;
        flex-direction: column;
        margin-left: .306667rem;
        height: 4.16rem;
        justify-content: center;
        .sort-top{
          @include sort()
        }
        .sort-bottom{
          @include sort()
        }
      }
    }
  }
  .scrollbar{
    display: flex;
    width: 100%;
    height: .533333rem;
    background-color: rgb(255, 255, 255);
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    div{
      width: 1.333333rem;
      height: .08rem;
      margin:auto;
      background-color: rgb(212, 216, 222);
      border-radius: 4px;
      div{
        transform: translate(0px);
        width: 20px;
        height: 3px;
        background-color: rgb(255, 109, 42);
        will-change: transform;
        border-radius: 4px;
      }
    }
  }
</style>