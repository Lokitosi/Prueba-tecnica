<template>
  <diV>
    <div class="action-row">
      <p>Cuantos Usuarios deseas Listar</p>
      <select v-model="cantidadUsuarios" @change="buscarUsuarios">
        <option v-for="n in 10" :value="n">{{n}}</option>
      </select>
    </div>
      <user-card :key=user :user-info="user" v-for="user in userArray">
      </user-card>
  </div>

</template>

<script>
import UserCard from "../components/userCard.vue";
import {getUsers} from "../app/controllers/user.controller";

export default {
  name: 'IndexPage',
  components: {UserCard},
  data(){
    let userArray = []
    let cantidadUsuarios = 5
    return{
      userArray,
      cantidadUsuarios
    }
  },
  async beforeMount() {
    this.buscarUsuarios();
  },
  methods:{
    async buscarUsuarios(){
      let cantidad = this.cantidadUsuarios
      let users = []
      for(let i = 0; i < cantidad;i++){
        try{
          const response = await getUsers(this.$nuxt.context)
          users.push(response)
        }catch (e){
          console.log(e)
        }
      }
      console.log(users)
      this.userArray = users

    }
  }
}

</script>

<style scoped>
.action-row{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 50px;
}
</style>
