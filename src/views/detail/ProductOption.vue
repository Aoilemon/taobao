<template>
  <div class="dialog dialog-popup">
    <div class="dialog-content">
      <div class="dialog-xsku">
        <div class="tb-sku-container" data-spm-anchor-id="a2141.7c.dialog.i1">
          <div class="sku-pro">
            <div>
              <div class="sku-img">
                <p>
                  <img
                    :src="item"
                    style="width:3.2rem"
                  />
                </p>
              </div>
              <div class="sku-pro-info">
                <div>
                  <p class="h">¥ {{buyPrice}}</p>
                  <p class="quantity">库存:984</p>
                  <p class="sku-txt">
                    <span class="c-sku"></span>
                    <span class="unc-sku">请选择: 颜色分类</span>
                  </p>
                </div>
              </div>
              <div class="sku-closed tb-sku-iconfont tb-sku-icon-close-circle"></div>
            </div>
          </div>
          <div class="sku-info">
            <div>
              <h2>颜色分类</h2>
              <ul>
                <li class="normal" style="background:rgb(255,122,0);color:#fff">白色（亏本包邮）</li>
                <li class="normal">新疆需补运费</li>
                <li class="normal">西藏需补运费</li>
              </ul>
            </div>
            <div class="quantity-info">
              <div class="sku-quantity">
                <h2>
                  购买数量
                  <span></span>
                </h2>
                <div>
                  <div @click="changeNum('cut')">-</div>
                  <p class="btn-input">
                    <input type="tel" :value="value" @input="numChange"/>
                  </p>
                  <div @click="changeNum('add')">+</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="sku-btns">
              <div class="sku-btn addcart" @click="addcart">加入购物车</div>
              <div class="sku-btn gobuy">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import { mapMutations,mapState } from 'vuex'
export default {
  props:['item','buyPrice'],
  data(){
    return {
      value:1,
      goodArr:[]
    }
  },
  computed:{
    ...mapState('xpStore',['detailGood','shopCartList'])
  },
  methods:{
    ...mapMutations('xpStore',['getDetailGood','getShopCartList','addCart']),
    numChange(e){
      this.value = e.target.value
    },
    changeNum(type){
      switch (type) {
        case 'cut':
          if(this.value > 1){
            this.value --
          }
          break;
        case 'add':
          this.value ++
          break;
        default:
          break;
      }
    },
    addcart(){
      // 添加成功跳转提示选择框
      MessageBox.confirm('添加成功，是否立即前往购物车?').
      then(action => {
        if(action === 'confirm'){
          this.$router.push('/cart')
        }
      }).catch(()=>{})

      // 购物车商品数据存储
      let id = parseInt(this.$route.params.id)
      let index = this.goodArr.findIndex(item => item.id === id)
      let value = parseInt(this.value)
      if (index > -1) {
        this.goodArr[index].num += value
      } else {
        this.detailGood.num = value
        this.goodArr.push(this.detailGood)
      }
      this.getShopCartList(this.goodArr)
      this.addCart(this.goodArr)
    }
  }
};
</script>
<style lang='scss'>
.mint-popup{
  width: 10rem;
  padding: .266667rem 0 0 .366667rem;
  top: 20%;
  border-radius: .466667rem .466667rem 0 0;
}
.mint-popup-bottom{
  top: 20% !important;
}
.sku-pro{
  padding-bottom: .266667rem;
  border-bottom: .0133333rem solid #f2f2f2;
  div{
    display: flex;
    font-size: .426667rem;
    .sku-pro-info{
      display: flex;
      div{
        margin-left: .266667rem;
        flex-direction: column;
        align-self: flex-end;
        :first-child{
          color: #ff5000
        }
        .quantity,.sku-txt{
          font-size: .32rem;
          color: #333;
        }
      }
    }
  }
}
.sku-info{
  :first-child{
    h2{
      font-size: .4rem;
      font-weight: normal;
      padding: .333333rem 0;
    }
    ul{
      display: flex;
      flex-direction: row;
      li{
        color: #333;
        background-color: #F8F8F8;
        border-radius: .533333rem;
        padding: .213333rem .386667rem;
        font-size: .32rem;
        margin-right: .373333rem;
        margin-bottom: .266667rem;
      }
    }
  }
}
.sku-quantity{
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 60px;
  p{
    display: flex;
    height: 1.2rem;
    align-items: center;
    input{
      width:1.066667rem;
      height: 1rem;
      text-align: center;
      line-height: .53333rem;
      border: none;
      background: #f6f6f6;
      margin: 0 .366667rem;
    }
  }
  div{
    display: flex;
    width:1.066667rem;
    height: 1rem;
    font-size: .533333rem;
    margin-right: 5px;
    div{
      line-height: 1rem;
      width:1.066667rem;
      height: 1rem;
    }
  }
}
.sku-btns{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: .266667rem;
  margin-left: -0.266667rem;
  .sku-btn {
    position: relative;
    margin-bottom: -11.2rem;
    width: 45%;
    height: 1.066667rem;
    line-height: 1.066667rem;
    color: #fff;
    text-align: center;
    font-size: .4rem;
    cursor: pointer;
  }
  .addcart {
    border-radius: .533333rem 0 0 .533333rem;
    background-image: -webkit-linear-gradient(left, #FFC500, #FF9402);
  }
  .gobuy{
    border-radius: 0 .533333rem .533333rem 0;
    background-image: linear-gradient(right, #FF7A00, #FE560A)
  }
}
</style>