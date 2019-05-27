<template>
    <div id="headwrap">
        <span class="logo">成电二货</span>
        <router-link to="/" class="route">
            <img src="../assets/mainicon.png" class="mainicon"/>
            <span class="retomain">首页</span>
        </router-link>   
    </div>
</template>

<script>
export default {
    name: 'HeadWrap'
}
</script>

<style scoped>
#headwrap{
    height: 100px;
    width: 100;
    top: 0;
    background: #2BBDFF;
}
.logo{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 50px;
    font-weight: bold;
    color: black;
    
    position: absolute;
    top: 25px;
    left: 50px;
}
.route{
    color: black;
    text-decoration: none;
}
.mainicon{
    height: 28px;
    width: 28px;
    position: absolute;
    top: 40px;
    right: 150px;
}
.retomain{
    font-size: 20px;
    position: absolute;
    top: 40px;
    right: 100px;
}
.retomain:hover{
    cursor:pointer;
}
</style>
