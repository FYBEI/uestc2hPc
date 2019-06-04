<template>
    <div id="other">
        <div class="xz">卖家其他闲置</div>
        <div v-for="item in 3" class="item">
            <div v-if="sellingList[item-1]">
                <img :src="sellingList[item-1].pictures[0].name"/>
                <div class="info">
                    <div class="up">
                        <span class="name">{{sellingList[item-1].name}}</span>
                        <span class="price">￥{{sellingList[item-1].price}}</span>
                    </div>
                    <div class="intro">{{sellingList[item-1].intro}}</div>
                </div>
            </div>
        </div>
        <div class="more">
            <router-link :to="{name:'UserDetail', params:{iden:false, userId:sellingList[0].userId}}"> 更多...</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'other',
    props: {
        sellingList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            
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
