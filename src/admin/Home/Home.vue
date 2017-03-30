<template>
    <div>
        <h4 class="text-center center-block">后台录入页</h4>
        <div class="padding">
             <form class="bs-example bs-example-form" role="form">
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">名称</span>
                    <input type="text" class="form-control" placeholder="" v-model="name">
                </div>
                <br>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">描述</span>
                    <input type="text" class="form-control" placeholder="" v-model="description">
                </div>
                <br>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">地址</span>
                    <input type="text" class="form-control" placeholder="" v-model="url">
                </div>
                <br>
                 <div class="input-group input-group-sm">
                    <span class="input-group-addon">头图地址</span>
                    <input type="text" class="form-control" placeholder="" v-model="headUrl">
                </div>
                <div class="text-center bt-btn">
                    <button class="btn btn-default col-xs-12" type="button" @click="to">录入</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name:"",
            description:"",
            url:"",
            headUrl:""
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
        }
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

</style>

