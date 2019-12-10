<template>
  <div class="detail">
    <Banner :imgs='detailGood.img'/>
    <Options :detailGood='detailGood'/>
    <AddCart />
    <Guess/>
  </div>
</template>
<script>
import Banner from './Banner'
import Options from './Options'
import AddCart from './AddCart'
import Guess from '../home/Guess'
import { mapState,mapMutations } from 'vuex'
import fetch from '@/api/fetch.js'
export default {
  data(){
    return{
      loadmore:false,
      good:[],
      detail:{}
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
  methods:{
    ...mapMutations('xpStore',['getDetailGood'])
    
  },
  mounted(){
    fetch('/db/detail.json',res=>{
      this.good = res.data
      this.$nextTick(function(){
        let id = parseInt(this.$route.params.id)
        let detailGood = this.good.find((item)=>{
          return item.id === id
        })
        this.detail = detailGood
        this.getDetailGood(this.detail)
      })
    })

  }
}
</script>
<style lang='scss'>
  .detail{
    background: #f4f4f4;
    padding-bottom: 1.8rem;
  }
</style>