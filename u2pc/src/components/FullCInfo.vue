<template>
    <div id="FullCInfo">
        <div class="inputTable">
            <ul class="info">
                <li class="text" style="width:280px">商品名：<input v-model="commodity.name" :placeholder="commodity.name"></li>
                <li class="text" style="width:280px">价格：<input v-model="commodity.price" :placeholder="commodity.price"></li>
                <li class="text">种类：
                    <select v-model="commodity.kind">
                        <option disabled value="">请选择</option>
                        <option v-for="(item, index) in kind">{{item}}</option>
                    </select>
                </li>
                <li class="textarea">介绍：<textarea rows="5" cols="50" maxlength="500" required wrap="soft" v-model="commodity.intro"></textarea></li>
            </ul>
        </div>
        <button class="btn" v-on:click="sure">确定</button>
    </div>
</template>

<script>
export default {
    name: 'FullCInfo',
    data() {
        return {
            commodity:{
                name: '商品名',
                price: 0,
                intro: '商品介绍',
                kind: '二手书'
            },
            kind: ["二手书", "生活", "服饰", "数码", "学习", "运动"]
        }
    },
    methods: {
        sure: function(){
            //post
            this.$router.push({name:'MainContent'})
        }
    },    
}
</script>

<style scoped>
#FullCInfo{
    width: 100%;
    height: 500px;
}
.inputTable{
    width: 700px;
    height: 300px;
    margin: 30px auto;
    background-color: #F4FAFF;
}
.btn{
    background-color: greenyellow;
    font-size: 20px;
    border: 0px;
    height: 50px;
    width: 100px;
}
.info{
    width: 500px;
    list-style:none;
    margin: 0px 100px;
    padding: 0px;
}
.info li{
    width: 500px;
    float: left;
    text-align: left;
    font-size: 16px;
}
.text{
    height: 30px;
    margin: 10px 0px;
}
.textarea{
    height: 45px;
    margin: 15px 0px;
}
input, textarea{
    float: right
}
</style>
