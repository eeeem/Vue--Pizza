<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza</h1>
        <h2>这里有你喜欢的Pizza</h2>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      goToMenu(){
        //跳转到上一次页面
        //this.$router.go(-1)

        //跳转指定页面
        //this.$router.replace("/menu")

        //指定跳转路由的名字下
        //this.$router.replace({name:'menuLink'})

        //通过push进行跳转
        //this.$router.push('/menu')
        //this.$router.push({name:'menuLink'})
      }
    }
  }
</script>
<style>
  #home{
    background-image: url("../../src/assets/pizza.jpg");
    background-size: 125%;
    height: 85vh;
    padding: 10%;
  }
  h1,h2{
    margin: 6%;
  }
  .background{
    background-color: #eee;
    opacity: 0.8;
    max-width: 70vm;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
