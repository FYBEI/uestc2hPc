<!-->发布商品界面，包括上传商品照片和填写商品信息两块<-->
<template>
    <div id="main">
        <headwrap/>
        <upImg/>
        <fullCInfo/>
    </div>
</template>

<script>
import headwrap from './HeadWrap'
import upImg from './UpImg'
import fullCInfo from './FullCInfo'

export default {
    name: 'PubCommodity',
    components: {
        headwrap: headwrap,
        upImg: upImg,
        fullCInfo: fullCInfo
    },
    data() {
        return {
            
        }
    },    
}
</script>

<style scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  background-color: #d2e9ff; 
}
</style>
