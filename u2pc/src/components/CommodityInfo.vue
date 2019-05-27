<template>
    <div id="commodityInfo">
        <div class="name">
            {{commodity.name}}
        </div>
        <div class="price">
            ￥{{commodity.price}}
        </div>
        <div class="intro">
            商品详细：<span>{{commodity.intro}}</span>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'commodityInfo',
    data() {
        return {
            // commodity: {
            //     name: "测试用商品名",
            //     price: "100",
            //     intro: "测试用的商品介绍，请写的长一点，否则占位太少，显得空白太多，所以我想要再写一点，比如商品的新旧程度、所在地和存在的问题。"
            // }
        }
    },
    props: {
        commodity: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
#commodityInfo{
    margin: 0px 40px;
    width: 400px;
    height: 270px;
    background-color: #F5FEFC;
    border-radius: 7px;
}
.name{
    margin: 10px 0px;
    font-family: 'Microsoft YaHei';
    color: black;
    font-size: 26px;
}
.price{
    margin: 10px 0px;
    font-family: Verdana;
    color: red;
    font-size: 24px;
    font-weight: bold;
}
.intro, span{
    font-family: 'tahoma', 'arial', '宋体';
}
.intro{
    margin: 10px 10px;
    padding: 10px 10px;
    text-align: left;
    border-top: solid 2px #D2D2D2;
    font-weight: bold;
    font-size: 15px;
}
span{
    font-weight: 100;
    font-size: 14px;
    line-height: 20px;
}
</style>
