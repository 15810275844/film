<template>
    <div>
       <h4 class="text-center center-block">{{msg}}</h4>
        <div class="box" v-for="item in list">
            <span class="list-group-item active">
                名称：{{item.name}}
            </span>
            <span class="list-group-item">描述：{{item.description}}</span>
            <span class="list-group-item">创建时间：{{item.createTimer}}</span>
            <div class="list-group-item clearfix">
                <button class="btn col-xs-3  btn-default" style="margin-right:10px;" @click="remove(item._id)">删除</button>
                <button class="btn col-xs-3  btn-default" @click="chang(item)">修改</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg:'后台列表页',
            list:[]
        }
    },
    methods:{
        remove(id){
            this.$http.post('/api/remove',{_id:id}).then((data)=>{
                if(data.data==1){
                    this.init();
                };
                console.log(data);
            }).catch((data)=>{
                console.log(data);
            });
        },
        init () {
            this.$http.get('/api/list').then((res)=>{
				var data = res.data;
                this.list = data;
				console.log(data)
			}).catch((err)=>{
				console.log(err)
			});
        },
        chang(item){
            this.$router.push({name:'adminChang',params:{id:item._id}})
        }
    },
    mounted(){
        this.init();
    }
}
</script>

<style scoped>
    .box{
        margin-bottom:10px;
    }
</style>

