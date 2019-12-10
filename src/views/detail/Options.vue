<template>
  <div class="options">
    <!-- 详情价格 -->
    <div class="d-price">
      <div>
        <div class="present-price">
          <div class="main-price-wrapper">
            <p class="o-t-price">
              <span class="num">{{ detailGood.price }}</span>
            </p>
            <p class="txt">
              <span>优惠价</span>
            </p>
            <p class="txt">
              <span>淘金币抵2%</span>
            </p>
          </div>
        </div>
        <div class="original-price">
          <div>
            价格:￥<del>{{ detailGood.originPrice }}</del>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品全名 -->
    <div class="tpl-wrapper">
      <div class="tpl-wrapper-main">
        <div class="wrapper-main-left">
          <div >
            <span>{{ detailGood.title }}</span>
          </div>
        </div>
      </div>
      <div class="share">
        <div class="icon">
          <i class="fa fa-share-alt"></i>
        </div>
        <div class="txt">
          <span>分享</span>
        </div>
      </div>
    </div>
    <!-- 月销量和地址 -->
    <div class="adress">
      <div class="exprss">
        <span>快递: 免运费</span>
      </div>
      <div class="sales-num">
        <span>月销{{ detailGood.sellNum }}</span>
      </div>
      <div class="adress-city">
        <span>{{ detailGood.adress }}</span>
      </div>
    </div>
    <div class="space"></div>
    <!-- 优惠时间 -->
    <div class="discount">
      <div class="discount-options">
        <div class="discount-text">
          <span>优惠</span>
        </div>
        <div class="discount-center">
          <div class="discount-cut">
            <div>
              <span>跨店满减</span>
            </div>
          </div>
          <div class="discount-time">
            <span>12/12-12/12每满200减20,上不封顶</span>
          </div>
        </div>
        <div class="discount-icon">
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <!-- 服务 -->
    <div class="discount">
      <div class="discount-options">
        <div class="discount-text">
          <span>服务</span>
        </div>
        <div class="discount-center">
          <div class="discount-time">
            <span>付款后20天内发货 · 1次破损补寄 · 破损包退 · 不支持7天无理由 · 运费险 · 公益宝贝</span>
          </div>
        </div>
        <div class="discount-icon">
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <!-- 商品规格 -->
    <div class="discount" @click="option">
      <div class="discount-options">
        <div class="discount-text">
          <span>规格</span>
        </div>
        <div class="discount-center">
          <div class="discount-time">
            <span>请选择 颜色分类 </span>
          </div>
        </div>
        <div class="discount-icon">
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="discount">
      <div class="discount-options">
        <div class="discount-text">
          <span>参数</span>
        </div>
        <div class="discount-center">
          <div class="discount-time">
            <span>品牌 型号...</span>
          </div>
        </div>
        <div class="discount-icon">
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <!-- 商品评价 -->
    <div class="discount">
      <div class="discount-options">
        <div class="discount-center" style="margin-left:0.3rem;">
          <div class="discount-time">
            <span style="font-size: .373333rem">宝贝评价(0)</span>
          </div>
        </div>
        <div class="discount-icon">
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <!-- 商品问答 -->
    <div class="discount">
      <div class="discount-options">
        <div class="discount-center" style="margin-left:0.3rem">
          <div class="discount-time">
            <span style="font-size: .373333rem">暂无问答</span>
          </div>
        </div>
      </div>
    </div> 
    <!-- 商品选项参数 -->
    <div class="product">
      <mt-popup
        v-model="popupVisible"
        position="bottom"
      >
        <ProductOption :item='detailGood.buyimg'/>
      </mt-popup>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
import ProductOption from './ProductOption'
export default {
  props:['detailGood'],
  data(){
    return{
      popupVisible:false
    }
  },
  components:{
    ProductOption
  },
  methods:{
    option(){
      this.popupVisible = !this.popupVisible
    }
  }
}
</script>
<style lang='scss'>
@mixin txt {
  margin-bottom: .053333rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 0.14rem;
  background-color: #FFF1EB;
  border-radius: 0.2rem;
  padding: 0.04rem;
  margin-right: 0.04rem;
  span{
    font-size: .24rem;
    line-height: 1;
    color: #ff5000
  }
}
@mixin span {
  white-space: nowrap;
  line-height: .426667rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
@mixin space{
  position: relative;
  display: flex;
  overflow: hidden;
  width: 10rem;
  height: .266667rem;
  background-color: rgb(248, 248, 248)
}
  .options{
    .d-price{
      background: #fff;
      line-height: 1;
      padding: 0 .32rem;
      .present-price{
        padding-top: .48rem;
        .main-price-wrapper{
          display: flex;
          flex-direction: row;
          align-items: center;
          .o-t-price{
            margin-right: .133333rem;
            color: #ff5000;
            font-size: .64rem;
            &::before{
              content: "￥";
              display: inline-block;
              font-size: .4rem;
              margin-left: -0.093333rem;
            }
          }
          .txt{
            @include txt()
          }
        }
      }
      .original-price{
        padding-top: .053333rem;
        font-size: .266667rem;
        color: #999;
        div{
          display: inline-block;
          margin-right: .64rem;
        }
      }
    }
    .tpl-wrapper{
      position: relative;
      display: flex;
      overflow: hidden;
      width: 10rem;
      height: 1.173333rem;
      background-color: rgb(255, 255, 255);
      .tpl-wrapper-main{
        position: absolute;
        display: flex;
        overflow: hidden;
        height: 44px;
        width: 312px;
        visibility: visible;
        left: 0px;
        top: 0px;
        div.wrapper-main-left{
          position: absolute;
          display: flex;
          margin-top: 4px;
          height: auto;
          margin-left: 12px;
          width: 300px;
          font-size: 15px;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0);
          color: rgb(51, 51, 51);
          font-weight: bold;
          visibility: visible;
          justify-content: flex-start;
          -webkit-box-pack: start;
          align-items: center;
          -webkit-box-align: center;
          max-width: none;
          &>span{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .share{
        position: absolute;
        display: flex;
        overflow: hidden;
        margin-right: 0px;
        width: fit-content;
        margin-top: 0px;
        height: 24px;
        right: 0px;
        top: 10px;
        background-color: rgb(244, 244, 244);
        flex-direction: row;
        -webkit-box-orient: horizontal;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        -webkit-box-direction: normal;
        .icon{
          position: relative;
          display: flex;
          flex-shrink: 0;
          flex-grow: 0;
          margin-left: 9px;
          width: 17px;
          height: 17px;
          font-size: 14px;
          place-self: center flex-start;
          background-color: rgba(204, 204, 204, 0);
          color: rgb(153, 153, 153);
          justify-content: flex-start;
          -webkit-box-pack: start;
          align-items: center;
          -webkit-box-align: center;
          overflow: hidden;
          max-width: none;
          span{
            font-size: inherit;
            font-style: normal;
          }
        }
        .txt{
          position: relative;
          display: flex;
          flex-shrink: 0;
          flex-grow: 0;
          margin-left: 0px;
          margin-right: 6px;
          height: auto;
          font-size: 12px;
          overflow: hidden;
          place-self: center flex-start;
          color: rgb(153, 153, 153);
          justify-content: flex-start;
          align-items: center;
          max-width: none;
        }
      }
    }
    .adress{
      position: relative;
      display: flex;
      overflow: hidden;
      width: 10rem;
      height: 1.066667rem;
      background-color: rgb(255, 255, 255);
      .exprss{
        position: absolute;
        display: flex;
        margin-left: .32rem;
        width: fit-content;
        height: auto;
        max-width: 3.2rem;
        font-size: .346667rem;
        overflow: hidden;
        left: 0px;
        top: .32rem;
        color: rgb(153, 153, 153);
        justify-content: flex-start;
        -webkit-box-pack: start;
        align-items: center;
        -webkit-box-align: center;
        span{
          @include span()
        }
      }
      .sales-num{
        position: absolute;
        display: flex;
        width: fit-content;
        height: auto;
        max-width: 3.2rem;
        font-size: .346667rem;
        overflow: hidden;
        left: 4.453333rem;
        top: .32rem;
        color: rgb(153, 153, 153);
        visibility: visible;
        justify-content: flex-start;
        -webkit-box-pack: start;
        align-items: center;
        -webkit-box-align: center;
        span{
          @include span()
        }
      }
      .adress-city{
        position: absolute;
        display: flex;
        margin-right: .32rem;
        width: fit-content;
        height: auto;
        max-width: 3.2rem;
        font-size: .346667rem;
        overflow: hidden;
        right: 0px;
        top: .32rem;
        color: rgb(153, 153, 153);
        visibility: visible;
        justify-content: flex-start;
        -webkit-box-pack: start;
        align-items: center;
        -webkit-box-align: center;
        span{
          @include span()
        }
      }
    }
    .space{
      @include space()
    }
    .discount{
      position: relative;
      display: flex;
      overflow: hidden;
      width: 10rem;
      height: auto;
      background-color: rgb(255, 255, 255);
      flex-direction: row;
      .discount-options{
        position: relative;
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        overflow: hidden;
        width: 10rem;
        margin-top: .346667rem;
        margin-bottom: 0px;
        height: .826667rem;
        .discount-text{
          position: absolute;
          display: flex;
          margin-left: .32rem;
          width: 1.12rem;
          height: .4rem;
          font-size: .346667rem;
          left: 0px;
          top: 0px;
          color: rgb(153, 153, 153);
          overflow: hidden;
          justify-content: flex-start;
          -webkit-box-pack: start;
          align-items: center;
          -webkit-box-align: center;
          max-width: none;
          span{
            @include span()
          }
        }
        .discount-center{
          position: relative;
          display: flex;
          flex-shrink: 0;
          flex-grow: 0;
          overflow: hidden;
          margin-bottom: 10px;
          height: .4rem;
          width: 7.093333rem;
          flex-direction: row;
          margin-left: 1.44rem;
          .discount-cut{
            position: relative;
            display: flex;
            flex-shrink: 0;
            flex-grow: 0;
            overflow: hidden;
            width: 1.36rem;
            height: .346667rem;
            place-self: center flex-start;
            border-radius: .213333rem;
            border: 0.5px solid rgba(0, 0, 0, 0);
            background-color: rgb(253, 237, 231);
            div{
              position: absolute;
              display: flex;
              margin-left: .133333rem;
              margin-right: .133333rem;
              width: fit-content;
              height: .346667rem;
              font-size: .266667rem;
              left: 0px;
              top: 0px;
              color: rgb(255, 80, 0);
              overflow: hidden;
              border-radius: .133333rem;
              border: 0.5px solid rgba(0, 0, 0, 0);
              background-color: rgb(253, 237, 231);
              justify-content: flex-start;
              -webkit-box-pack: start;
              align-items: center;
              -webkit-box-align: center;
              max-width: none;
            }
          }
          .discount-time{
            position: relative;
            display: flex;
            flex-shrink: 1;
            flex-grow: 0;
            height: .426667rem;
            margin-left: .16rem;
            width: 5.6rem;
            font-size: .346667rem;
            overflow: hidden;
            color: rgb(51, 51, 51);
            justify-content: flex-start;
            align-items: center;
            max-width: none;
          }
        }
        .discount-icon{
          position: absolute;
          display: flex;
          margin-right: .24rem;
          width: .373333rem;
          height: .373333rem;
          font-size: .573333rem;
          margin-top: 0.08rem;
          right: 0px;
          top: 0px;
          color: rgb(204, 204, 204);
          overflow: hidden;
          justify-content: flex-start;
          align-items: center;
          max-width: none;
        }
      }
    }
  }
</style>