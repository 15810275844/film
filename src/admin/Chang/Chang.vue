<template>
    <div>
       <h4 class="text-center center-block">{{detail.name}} </h4>
       <ul class="list-group">
            <li class="list-group-item">
                <video controls="controls " class="img-responsive" :src="detail.url"></video>
            </li>
            <li class="list-group-item">名称：{{detail.name}}</li>
            <li class="list-group-item">描述：{{detail.description}}</li>
            <li class="list-group-item">时间：{{detail.createTimer}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            detail:""
        }
    },
    created (){
        this.detail = this.$route.params;
    },
    methods: {
        init () {
            this.$http.get('/api/list/'+this.$route.params.id).then(data=>{
                console.log(data);
                this.detail = data.data;
            }).catch(data=>{
                console.log(data);
            });
        }
    },
    mounted (){
        this.init();
    }
}
</script>

<style scoped>
</style>

