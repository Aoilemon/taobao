<template>
  <div class="count">
       <div class="mint-cell-title flex justify-center items-center">
            <label class="mint-checklist-label  labels">
                <span class="mint-checkbox all-check">
                    <input type="checkbox" class="mint-checkbox-input" @change="allChecked">
                        <span class="mint-checkbox-core choose">
                        </span>
                        全选
                </span>
               <div class="right">
                    <div class="count-center">
                    合计:
                    <span class="price">￥{{ totalPrice }}</span>
                    </div>
                    <span class="howmuch">结算(0)</span>
               </div>
            </label>
          </div> 
  </div>
</template>
<script>
export default {
    props:['totalPrice'],
    methods:{
        allChecked(e){
            console.log(e.target.checked)
        }
    }
}
</script>
<style lang='scss' >
    .count{
        z-index: 88;
        position: fixed;
        bottom: 44px;
        width: 100%;
        height: 1.44rem;
        background: aliceblue;

        .labels{
            width: 100%;
            line-height:1.44rem; 
            display: flex;
            align-items:center;
            justify-content: space-between;
            //  background: #FFFFFF;

        }
        .choose{
            margin-top: -0.066667rem;
        }

        .items-center{
            line-height: .64rem;  
        }

        .all-check{
            font-size: .32rem;
            align-items: center;
        }
       
     
        .right{
            margin-right: .5rem;
            margin-top: -0.133333rem;
            .count-center{
                display: inline-block;
                font-size: .373333rem;
                align-items: center;
                line-height: 1.813333rem;
            }
            .price{
                color: #FF5000;
            }
            .howmuch{
                display: inline-block;
                font-size:.4rem;
                line-height: .4rem;
                padding: .213333rem .48rem;
                text-align: center;
                border-radius: 2.133333rem;
                background-image: linear-gradient(90deg, #FF9000 0%, #FF5000 98%);
                white-space: nowrap;
                margin-left: .266667rem;
                color: #FFFFFF;
            }  
        }
    }
</style>