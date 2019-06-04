<template>
    <div id="content">
        <div v-for="(row,rdx) in commodityList" class="row">
            
                <div v-for="(item,idx) in row" class="commo">
                    <router-link :to="{name:'Detail', params:{commodity:commodityList[rdx][idx]}}" class="route">
                        <img :src="item.pictures[0].name" class="cimg"/>
                        <div class="cinfo"><span class="cname">{{item.name}}</span>: {{item.intro}}</div>
                        <div class="cprice">￥{{item.price}}</div>
                        <div class="uinfo">{{item.username}}</div>    
                    </router-link>            
                </div>
            
        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    name: "mycontent",
    props:{
        commodityList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            
        }
    },

    methods: {
        toDetail(rdx, idx){
            console.log('rdx:' + rdx + 'idx:' + idx)

            this.$route.push({
                name: 'Detail',
                params: {
                    commodity: this.commodities[rdx][idx]
                }
            })
        }
    }
}
</script>

<style scoped>
#content{
    min-width: 1100px; 
}
.row{
    height: 330px;
    width: 1100px;
    margin: 15px 180px;
}
.commo{
    display: inline-block;
    margin: 7px 25px;
    height: 310px;
    width: 168.56px;
    border-radius: 5px;
    background-color: #eee;
    float: left;
}
.route{
    color: black;
    text-decoration: none;
}
.cimg{
    height: 150px;
    width: 168.56px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.cname{
    font-size: 20px;
    font-weight: bold;
}
.cinfo{
    max-width: 166px;
    height: 81px;
    margin: 10px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    text-align: left;
}
.cprice{
    height: 20px;
    margin: 10px 10px;
    font-size: 18px; 
    color: #ff7575;
    text-align: left;
}
.uinfo{
    height: 10px;
    margin: 10px 10px;
    padding: 5px 5px;
    font-size: 12px;
    border-top: 2px solid #e0e0e0;
}
</style>

