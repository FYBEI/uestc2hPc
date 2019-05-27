<template>
    <div id="tabbar-wrap">
        <div v-for="(item, index) in tabList" class="item">
            <div v-if="idx==index">
                <p class="active">{{item.text}}</p>
                <div class="line"></div>
            </div>

            <div v-if="idx!=index" v-on:click="changeTabbar(index)">
                <p class="name">{{item.text}}</p>
            </div>

        </div>
    </div>  
</template>

<script>
export default {
    name: "tabbar",
    data() {
        return {
            tabList: [{id: 0, "text": "最新"},
            {id: 1, "text": "二手书"}, 
            {id: 2, "text": "生活"}, 
            {id: 3, "text": "服饰"},
            {id: 4, "text": "数码"},
            {id: 5, "text": "学习"},
            {id: 6, "text": "运动"},
           ],
            idx: 0
        }
    },
    methods: {
        changeTabbar: function(index){
            this.idx = index
            console.log(this.idx)
        }
    },
}
</script>

<style scoped>
#tabbar-wrap{
    align-items: center;
    background-color: #33CCFF;
    border-radius: 5px;
    margin: 40px 180px 20px 180px; 
    height: 66px;
    width: 1100px;
    display: flex;
    flex-direction: row;
}
.item{
    flex: 1;
    margin: 20px 30px;
    cursor:pointer;
}
.name{
    color: #222;
    font-size: 16px;
}
.active{
    color: #000;
    font-family: 'YouYuan';
    font-size: 16px;
    font-weight: bold;
    margin: 5px;
}
.line{
    border: #000 solid 2px;
    margin: 0px 10px;
}
</style>
