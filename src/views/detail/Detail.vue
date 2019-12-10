<template>
  <div class="detail">
    <Banner :imgs='detailGood.img'/>
    <Options :detailGood='detailGood'/>
    <AddCart/>
    <Guess/>
  </div>
</template>
<script>
import Banner from './Banner'
import Options from './Options'
import AddCart from './AddCart'
import Guess from '../home/Guess'
import { mapState } from 'vuex'
export default {
  data(){
    return{
      loadmore:false
    }
  },
  computed:{
    ...mapState('xpStore',['detailGood'])
  },
  components:{
    Banner,
    Options,
    AddCart,
    Guess
  },
  mounted(){
    console.log(this.detailGood)
  }
}
</script>
<style lang='scss'>
  .detail{
    background: #f4f4f4;
    padding-bottom: 1.8rem;
  }
</style>