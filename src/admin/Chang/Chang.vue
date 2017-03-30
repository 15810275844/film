<template>
    <div>
        <h4 class="text-center center-block">后台修改页</h4>
        <div class="back" @click="$router.go(-1)">返回</div>
        <div class="padding">
             <form class="bs-example bs-example-form" role="form">
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">名称</span>
                    <input type="text" class="form-control" placeholder="" v-model="detail.name">
                </div>
                <br>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">描述</span>
                    <input type="text" class="form-control" placeholder="" v-model="detail.description">
                </div>
                <br>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">地址</span>
                    <input type="text" class="form-control" placeholder="" v-model="detail.url">
                </div>
                <br>
                 <div class="input-group input-group-sm">
                    <span class="input-group-addon">头图地址</span>
                    <input type="text" class="form-control" placeholder="" v-model="detail.cover">
                </div>
                <div class="text-center bt-btn">
                    <button class="btn btn-default col-xs-12" type="button" @click="to">修改录入</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            detail:""
        }
    },
    methods:{
        to () {
            var test = {
                name:this.name,
                description:this.description,
                url:this.url,
                cover:this.headUrl
            };
            if(!test.name){
                alert('请输入名称');
                return;
            }
            if(!test.cover){
                alert('请输入头图地址');
                return;
            }
            if (!test.description){
                alert('请输入描述');
                return;
            }
            if (!test.url){
                alert('请输入地址');
                return;
            };
            this.$http.post('/api/add',test).then((data)=>{
                console.log(data);
                if(data.data==1){
                    alert('录入成功');
                };
            }).catch((data)=>{
                console.log(data);
            });
        },
        init () {
            this.$http.get('/api/list/'+this.$route.params.id).then(data=>{
                console.log(data);
                this.detail = data.data;
            }).catch(data=>{
                console.log(data);
            });
        }
    },
    mounted(){
        this.init();
    }
}
</script>

<style scoped>
    .padding{
        padding:10px;
        padding-top:0;
    }
    .bt-btn{
        padding-top:10px;
    }
    .back{
        height:40px;
        line-height:40px;
        background:#fff;
        padding-left:20px;
        margin-bottom:20px;
    }

</style>

