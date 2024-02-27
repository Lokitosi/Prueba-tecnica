<template>
  <div class = "wrapper">
    <img :src="userInfo.avatar" class="userAvatar"/>
    <div class="info">
      <p class="name">{{userInfo.last_name}}, {{ userInfo.first_name }}</p>
      <p class="email">{{ userInfo.email }}</p>
      <p class="userName">{{ userInfo.username }}</p>
    </div>

  </div>
</template>


<script>
export default {
  props:{
    userInfo:{type:{}, default:{}}
  }
}
</script>

<style scoped>
.wrapper{
  border: 1px solid black;
  box-shadow: 5px 2px 2px black;
  display: grid;
  overflow: hidden;
  margin-bottom: 20px;
  height: 200px;
  border-radius: 5px;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.userAvatar{
  width: 200px;
  height: 100%;
  border: 1px black;
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>
