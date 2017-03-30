<template>
  <div class="box">
    <h4>我是首页</h4>
    <div class="row">
      <div class="col-xs-6 col-sm-4" v-for="(item,index) in list" @click="toDetail(item)">
        <img :src="item.cover" alt="" class="img-responsive">
        <span class="text-center center-block" >{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            list:[]
        }
    },
    methods:{
        init:function () {
           this.$http.get('/api/list').then((res)=>{
				var data = res.data;
                this.list = data;
				console.log(data)
			}).catch((err)=>{
				console.log(err)
			});
        },
        toDetail (item) {
            this.$router.push({name:'detail',params:{id:item._id}})
        }
    },
    mounted () {
        this.init();
    }
};
</script>

<style scoped>
  .box{
    margin:0 50px;
  }
  .col-xs-6{
    margin-bottom:10px;
  };
  img{
        height:100px;
    }

</style>
