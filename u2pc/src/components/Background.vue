<template>

    <div id="back">
      <img src="../assets/background.jpg">
      <span class="title">{{title}}</span>
    </div>

</template>

<script>
export default {
  name: 'Background',
  data() {
    return {
      title: '成电二货'      
    }
  }
}
</script>

<style scoped>
#back{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
.title{
  position: absolute;
  top: 20px;
  left: 40px;
  font-size: 50px;
  color: #000;
}
img{
  width: 100%;
  height: 300px;
}

</style>
