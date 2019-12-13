<template>
  <div class="myorder">
      <div class="myorder-box"> 
        <!-- 我的订单 -->
        <div class="mytaobao-box">
            <div class="myorder-head">
                <div class="wddd">我的订单</div>
                <div class="ckqbdd" @click="()=>{this.$router.push('/order')}">查看全部订单></div>
            </div>
            <!-- 横线 -->
            <div class="aline"></div>
             <!-- 代付款........ -->
        <div class="five-boxs"> 
            <div class="pay-box" v-for="(item,index) in arr" :key="index">
                <img :src="item.src" alt="">
                <span v-text="item.title"></span>
            </div>
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
            arr:[]
        }
    },
    created(){
        fetch('/db/order.json',res=>{
            this.arr = res.data
        })
    }

}
</script>
<style lang='scss' >
.myorder{
    padding-top: 10px;
    background-color: #f2f2f2;
    .myorder-box{
        display: flex;
        overflow: hidden;
        width: 10rem;
        height: 3.373333rem;
        position: relative;
        .mytaobao-box{
            display: flex;
            overflow: hidden;
            position: absolute;
            width: 351px;
            height: auto;
            margin-left: .32rem;
            margin-right: .32rem;
            border-radius: .32rem;
            background-color: #ffffff;
            flex-direction: column;
            left: 0;
            top: 0;
        }                   
        .myorder-head{
            display: flex;
            overflow: hidden;
            flex: 0 0 auto;
            width: 351px;
            height: 38px;
            align-self: flex-start;
            position: relative;
        }
        .wddd{
            display: flex;
            overflow: hidden;
            position: absolute;
            width: auto;
            height: .533333rem;
            font-size: .373333rem;
            margin-left: .306667rem;
            justify-content: center;
            align-items: center;
            color: rgb(51, 51, 51);
            font-weight: bold;
            left: 0px;
            top: .24rem;
        }
        .ckqbdd{
            display: flex;
            overflow: hidden;
            position: absolute;
            font-size: .32rem;
            right: 0px;
            top: .32rem;
            color: rgb(153, 153, 153);
            margin-right: .666667rem;
            justify-content: flex-start;
            align-items: center;
        }
        .five-boxs{
            display: flex;
            overflow: hidden;
            flex: 0 0 auto;
            width: 351px;
            height: 76px;
            align-self: flex-start;
            position: relative;
            // background: skyblue;
            align-items: center;

        }
        .aline{
            display: flex;
            overflow: hidden;
            flex: 0 0 auto;
            width: 10rem;
            height: .013333rem;
            align-self: center;
            background-color: #EEEEE7;
        }
        .five-boxs{
            display: flex;
            overflow: hidden;
            flex: 0 0 auto;
            width: 9.333333rem;
            height: 2.026667rem;
            align-self: flex-start;
            position: relative;
        }
        .pay-box{
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 20%;
            margin-top:.2rem;

            
            img{
                width: .773333rem;
                height: .773333rem;
            }
            span{
                font-size: .32rem;
                color: #666666;
            }
        }

    }
  
}
</style>