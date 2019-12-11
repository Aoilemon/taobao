<template>
  <div class="tool-page">
      <div class="tool-page-box">
          <!-- 必备工具 -->
        <div class="tool-page-head">
              <div class="bbgj">必备工具</div>
              <div class="ckqbgj">查看全部工具></div>
        </div>
          <!-- 下面的小图标 -->
        <div class="ten-box">
            <div class="tools_icons" v-for="(item,index) in ToolArr" :key="index">
              <img :src=item.img  alt="">
              <span v-text="item.title"></span>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import fetch from '@/api/fetch.js'  
export default {
    data:function(){
        return{
            ToolArr:[]
        }
    },
    created(){
        fetch('/db/tool.json',res=>{
            this.ToolArr=res.data;
        })
    }
}
</script>
<style lang='scss' >
.tool-page{
    display: flex;
    overflow: hidden;
    width: 10rem;
    height: auto;
    left: 0rem;
    top: 0rem;
    background: #f2f2f2;
    padding-bottom: 3rem;

    .tool-page-box{
        display: flex;
        width: 9.36rem;
        height: 5.5rem;
        margin-left: .32rem;
        border-radius: .32rem;
        flex-direction: column;
        background-color: #FFFFFF;
        left: 0;
        top: 0;
    }
    .tool-page-head{
        display: flex;
        width: 9.36rem;
        height: 1.013333rem;
        justify-content: space-between;
        padding-bottom: .2rem;
        margin-top: .2rem;
    }
    .bbgj{
       display: flex;;
        color: rgb(51, 51, 51);
        font-size: .373333rem;
        margin-left: .32rem;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
    .ckqbgj{
        display: flex;
        font-size: .32rem;
        color: rgb(153, 153, 153);
        margin-right: .653333rem;
        align-items: center;
    }

    .ten-box{
        display: flex;
        flex: 0 0 auto;
        width: 9.333333rem;
        height: 4.32rem;
        align-self: flex-start;
        position: relative;
        flex-wrap: wrap;
        .tools_icons{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 25%;
        height: 2.053333rem;
            img{
                margin-top: .4rem;
                width: .853333rem;
                height: .853333rem;
            }
            span{
                font-size: .32rem;
                color: #666666;
            }  
        }  
      
    }
        

}
</style>