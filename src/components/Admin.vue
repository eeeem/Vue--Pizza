<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!--new pizza-->
      <NewPizza></NewPizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!--品种展示-->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItem" :key="item.name">
        <tr>
          <td>{{item.name}}</td>
          <td>
            <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">x</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import NewPizza from './NewPizza.vue'

  export default {
    name:'Admin',
    data() {
      return {
        //getMenuItem:[]
      }
    },
    components:{
      NewPizza
    },
    computed:{
      getMenuItem:{
        //VUEX获取数据
        get(){
          // return this.$store.state.menuItems
          //通过getters获取数据
          return this.$store.getters.getMenuItems
        },
        set(){

        }

      }
    },
    created() {
      fetch("https://wd8113938945vvvdza.wilddogio.com/menu.json")
        .then(res => {
          return res.json()
        })
        .then(data => {
          let menuArray = []
          for (let key in data) {
            data[key].id = key
            menuArray.push(data[key])
          }
          //数据同步
          this.$store.commit('srtMenuItems',menuArray)
          //this.getMenuItem = menuArray
        })
    },
    methods: {
      deleteData(item) {
        fetch("https://wd8113938945vvvdza.wilddogio.com/menu/" + item.id + "/.json", {
          method:"DELETE",
          headers:{
            "Content-type":'application/json'
          },
        })
          //.then(res=>res.json())
          // .then(data=>this.$router.push({name:"menuLink"}))
          .then(res=>{
            this.$store.commit('removeMenuItem',item)
          })
          .catch(err=>console.log(err))
      }
    }
  }
</script>
<style>

</style>
