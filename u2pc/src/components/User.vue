<template>
    <div id="user">
        <div id="headimg">
            <img src="../assets/head.jpg" class="img">
            <div id="detail">
                <p class="text username">{{user.username}}</p>
                <p class="text signature">{{user.sign}}</p>
            </div>
        </div>

        <router-link :to="{name:'UserDetail', query:{iden:true, user:user}}" class="route">
            <div id="pubedCommodity">
                <div class="uitem">
                    <img src="//img.alicdn.com/tfs/TB1W0t9nVzqK1RjSZSgXXcpAVXa-52-52.png" class="uicon">
                    <p class="text" style="font-size:12px">出售中</p>
                    <p class="num">{{user.sellingNum}}</p>
                </div>

                <div class="uitem">
                    <img src="//img.alicdn.com/tfs/TB1xwqvn4jaK1RjSZKzXXXVwXXa-52-52.png" class="uicon">
                    <p class="text" style="font-size:12px">已售出</p>
                    <p class="num">{{user.soldNum}}</p>
                </div>
            </div>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            user: {
                img: {
                    name: require("../assets/head.jpg"),
                    size: 0,
                    file: null
                },
                username: '用户名',
                userId: 1,
                sign: '个性签名',
                phone: '15759180826',
                email: 'liuwenxin@gmail.com',
                sellingNum: 0,
                soldNum: 0
            },
        }
    },
}
</script>

<style scoped>
    #user{
        position: absolute;
        top: 120px;
        right: 200px;
        width: 300px;
        height: 200px;
        border: 2px solid #eee;
        border-radius: 10px;
        background-color: #fff;
        padding: 5px;
    }
    #headimg{
        margin: 15px 20px;
        height: 60px;
        padding: 10px 0px;
        display: flex;
        flex-direction: row;
    }
    .img{
        width: 60px;
        height: 60px;
        margin: 0px 10px;
        border-radius: 60%;
        border: #000 solid 2px;
    }
    #detail{
        margin: 5px 10px;
        display: flex;
        flex-direction: column;
    }
    .text{
        flex: 1;
        margin: 0px;
        padding: 3px;
    }
    .username{
        font-size: 15px;
    }
    .signature{
        font-size: 12px;
        color: grey;
    }
    
    .route{
        color: black;
        text-decoration: none;
    }
    .route:hover{
        cursor:pointer;
    }
    #pubedCommodity{
        margin: 10px;
        height: 80px;
        display: flex;
        flex-direction: row;
    }
    .uitem{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .uicon{
        flex: 1;
        width: 24px;
        height: 22px;
        margin: 5px 58px;
    }
    .num{
        flex: 1;
        font-size: 13px;
        margin: 0px;
        padding: 3px;
    }
</style>
