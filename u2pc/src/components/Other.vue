<template>
    <div id="other">
        <div class="xz">卖家其他闲置</div>
        <div v-for="item in 3" class="item">
            <div v-if="commodities[item-1]">
                <img :src="commodities[item-1].picture[0]"/>
                <div class="info">
                    <div class="up">
                        <span class="name">{{commodities[item-1].name}}</span>
                        <span class="price">￥{{commodities[item-1].price}}</span>
                    </div>
                    <div class="intro">{{commodities[item-1].intro}}</div>
                </div>
            </div>
        </div>
        <div class="more">
            <router-link :to="{name:'UserDetail', query:{iden:false, user:user}}"> 更多...</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'other',
    data() {
        return {
            user: {
                img: {
                    name: require("../assets/head.jpg"),
                    size: 0,
                    file: null
                },
                username: '商户名',
                userId: 1,
                sign: '商户个性签名',
                phone: '15759180826',
                email: 'liuwenxin@gmail.com',
                sellingNum: 0,
                soldNum: 0
            },
            commodities: [ 
                {name: '测试商品名1', price: '10', intro: 'test1,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic1.jpg')]}, 
                {name: '测试商品名2', price: '20', intro: 'test2,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic2.jpg')]}, 
                {name: '测试商品名3', price: '30', intro: 'test3,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic3.jpg')]}, 
                {name: '测试商品名4', price: '40', intro: 'test4,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic4.jpg')]},
                // {name: '测试商品名5', price: '50', intro: 'test5,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic5.jpg')]}
            ]
        }
    },
}
</script>

<style scoped>
#other{
    width: 500px;
    height: 500px;
    margin: 20px 230px;
    border-radius: 6px;
    border: solid 2px #B3B2B1;
}
.xz{
    height: 50px;
    font-family: 'Microsoft YaHei';
    font-size: 20px;
    padding: 5px 10px 3px 10px;
    border-bottom: solid 2px #D2D2D2;
    background-color: #2BBDFF;
    text-align: left;
    line-height: 50px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.item{
    height: 100px;
    padding: 20px 50px;
}
img{
    height: 100px;
    width: 120px;
    float: left;
}
.info{
    height: 100px;
    width: 280px;
    float: right;
}
.up, .intro{
    height: 50px;
    text-align: left;
    padding: 0px 20px;
}
.up{
    display: flex;
    flex-direction: row;
}
.name{
    flex: 1;
    font-family: 'Microsoft YaHei';
    font-size: 20px;
}
.price{
    flex: 1;
    font-size: 17px;
    color: red;
    font-family: 'Verdana';
    text-align: center;
}
.intro{
    font-family: 'tahoma', 'arial', '宋体';
    font-size: 15px;
}
.more{
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    padding: 0px 5px;
    text-align: right;
    color: rgb(92, 83, 65);
    background-color: #2BBDFF;
    border-top: solid 2px #D2D2D2;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
.more:hover{
    cursor:pointer;
}
</style>
