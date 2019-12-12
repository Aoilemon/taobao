<template>
  <div class="good">
       <div class="CartIn-center">
        <div class="mint-cell-title flex justify-center items-center checkbox-box">
            <label class="mint-checklist-label checkbox-box__left">
                <span class="mint-checkbox">
                    <input type="checkbox" class="mint-checkbox-input" @click="isChecked">
                        <span class="mint-checkbox-core list-style">
                        </span>
                </span>
                <img :src="item.buyimg" alt="" class="img1">
                <div class="center-title ">
                  <span>{{ item.title }}</span>
                  <p>白色(亏本包邮)</p>
                  <div class="price-num">
                    <div class="price">
                      <span class="price1">￥{{ item.buyPrice}}</span>
                    </div>
                    <div class="num">
                      <div class="btns1">
                        <img src="https://img.alicdn.com/tfs/TB1I05Qe1uSBuNjSsplXXbe8pXa-45-40.png?getAvatar=avatar_50x50q90_.webp" alt="" class="btn-img">
                      </div>
                      <input type="text" :value="item.num">
                      <div class="btns2">
                        <img src="https://img.alicdn.com/tfs/TB12tL6ThTpK1RjSZFKXXa2wXXa-45-40.png?getAvatar=avatar_50x50q90_.webp" alt="" class="btn-img">
                      </div>
                    </div>
                  </div>
                </div>
            </label>
          </div> 
      </div>
  </div>
</template>
<script>
export default {
  props:['item'],
  methods:{
    isChecked(e){
      console.log(e.target.checked)
    }
  }
}
</script>
<style lang='scss' >
.good{
  .CartIn-center{
    background:rgb(247,247,247);
    border-radius: .266667rem;
    .checkbox-box{
      width: 9.333333rem;
      height: 4.266667rem;
      margin: 0 auto;
      // border-top: 1px #FF5000 solid;
      margin-bottom: .266667rem;
      .mint-checkbox{
        margin-top: .4rem;
      }
      img{
        margin-top: .4rem;
      }
      .checkbox-box__left{
        width: 9.333333rem;
        height: 4.266667rem;
        display: flex; 
        padding: 0;
        background: #fff;
        border-radius: .266667rem;
      }
    }
      .mint-checkbox-core{
        margin-right: .2rem;
      }
      .center-title{
        width: 5.786667rem;
        // height: 2.533333rem;
        height: 100%;
        padding: .08rem 0 0 .32rem;
          span{
            font-size: .373333rem;
            position: relative;
            display: flex;  
            height: .98rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-bottom: .3rem;
            margin-top: .3rem;
          }
          p{
            width: 5.786667rem;
            height: .853333rem;
            font-size: .346667rem;
            // background: #999999;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-bottom: .2rem;
            color: #999999;
          }
          }
        .img1{
          width:2.4rem;
          height:2.4rem;
        }
        .price-num{
          width: 100%;
          display: flex;
          align-items: center;
        .price{
          width: 2.453333rem;
          height: .44rem;
          .price1{
            font-size: .373333rem;
            color: #ff5500;
          } 
        }
        .num{
          display: flex;
          align-items: center;
          .btns1{
            // width: .8rem;
            // height: .933333rem; 
            .btn-img{
              width: .586667rem;
              height: .586667rem;
              display: inline-block;
            }
          }
          .btns2{
            // width: .8rem;
            // height: .933333rem; 
            .btn-img{
              width: .586667rem;
              height: .586667rem;
              display: inline-block;
            }
          }
          input{
            width: 1.066667rem;
            height: .63333rem;
            border: none;
            text-align: center;
            line-height: .33333rem;
            margin: 0 .133333rem;
          }
        }
          .Settlement{
            display: flex;
            bottom: 0; 
          }
          .mint-checkbox-input:checked + .mint-checkbox-core {
            background-color: #ff5500;
            border-color: #ff5500 ;
          }

      }
  }
}
</style>