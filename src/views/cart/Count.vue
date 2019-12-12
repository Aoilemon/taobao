<template>
  <div class="count">
       <div class="mint-cell-title flex justify-center items-center">
            <div class="mint-checklist-label  labels">
                <label class="allcheck">
                    <span class="mint-checkbox all-check">
                        <input type="checkbox" class="mint-checkbox-input" @change="allChecked" :checked='allcheck' ref="delAllEle">
                            <span class="mint-checkbox-core choose">
                            </span>
                            全选
                    </span>
                </label>
                <span class="all-check del" @click="delAll">删除</span>
               <div class="right">
                    <div class="count-center">
                    合计:
                    <span class="price">￥{{ totalPrice }}</span>
                    </div>
                    <span class="howmuch">结算({{count}})</span>
               </div>
            </div>
          </div> 
  </div>
</template>
<script>
export default {
    props:['totalPrice','allcheck','count'],
    methods:{
        allChecked(e){
            this.$emit('changeAllChecked',e.target.checked)
        },
        delAll(){
            this.$emit('delAll',this.$refs['delAllEle'].checked)
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
            .allcheck{
                height: 100%;
                display: flex;
            }
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
        .del{
            margin-left:1rem;
            color:red;
            font-size:0.37777rem;
            border:1px solid #999;
            padding: .233333rem .36rem;
            line-height:normal;
            border-radius: .566667rem;
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