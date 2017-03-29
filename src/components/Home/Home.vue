<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: '我是首页'
      }
    },
    methods: {
      aaa() {
        console.log(123)
        this.$http.get('/api/aaa').then((res) => {
          var data = res.data;
          console.log(data)
        }).catch((err) => {
          console.log(err)
        });
      }
    }
    ,
    mounted() {
      var this_ = this;
      setTimeout(function() {
        this_.aaa();
      }, 300);
    }

  }
</script>

<style scoped>

</style>