<template>
    <div id="sellerinfo">
        <div class="info">
            <router-link :to="{name:'UserDetail', query:{iden:false, user:user}}">
                <img :src="user.img.name" class="simg"/>
            </router-link>
            
            <div>
                <div class="sellername">昵称：{{user.userName}}</div>
                <div class="connect">
                    <div v-if="user.email">邮箱：{{user.email}}</div>
                    <div v-if="user.phone">电话：{{user.phone}}</div>
                </div> 
            </div>
        </div>
        <div class="wrap">
            <div>
                <span>已售数量</span>
                
            </div>
            <div>
                <span>最近编辑</span>
                <span>{{createTime}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SellerInfo',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            createTime: "2019-5-22"
        }
    },
}
</script>

<style scoped>
#sellerinfo{
    height: 80px;
    width: 100;
    margin-top: 20px;
    margin-bottom: 20px; 
    border-top: solid 3px #000;
    border-bottom: solid 2px #C7CFD2; 
    background-color: #BFDEE9;
}
.info{
    width: 300px;
    height: 60px;
    margin: 10px 10px;
    border-right: solid 2px #000;
    float: left;
}
.simg{
    width: 40px;
    height: 40px;
    margin: 10px 10px;
    border-radius: 60%;
    border: #B4D1DC solid 2px;
    float: left;
}
.sellername{
    font-size: 15px;
    margin: 5px 10px;
}
.connect{
    font-size: 12px;
    text-align: center;
}
.wrap{
    display: inline-block;
    width: 200px;
    height: 50px;
    list-style: none;
    margin: 15px 10px;
}
.wrap div{
    margin: 10px 10px; 
    width: 80px;
    height: 30px;
    float:left;  
}
</style>
