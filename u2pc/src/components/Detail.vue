<!-->商品详细内容，包含顶栏、卖方信息、商品详细信息、卖家的其他商品<-->
<template>
    <div id="detail">
        <headwrap/>
        <sellerinfo v-bind:user="user"/>
        <div class="cwindow">
            <div class="cdinfo">
                <photos v-bind:pictures="pictures"/>
                <commodityInfo v-bind:commodity="commodity"></commodityInfo>
            </div> 
        </div>
        <other v-bind:sellingList="sellingList"/>  
    </div>
</template>

<script>
import headwrap from './HeadWrap'
import sellerinfo from './SellerInfo'
import photos from './Photos'
import commodityInfo from './CommodityInfo'
import other from './Other'

const axios = require('axios');

export default {
    name: 'Detail',
    components: {
        headwrap: headwrap,
        sellerinfo: sellerinfo,
        photos: photos,
        commodityInfo: commodityInfo,
        other: other
    },
    data() {
        return {
            commodity: {},
            pictures: [],
            user: {},
            sellingList: []
        }
    },
    created() {
        this.getQuery()
    },
    methods: {
        getQuery(){
            var commodity = this.$route.params.commodity
            var pictures = this.$route.params.commodity.pictures
            
            this.commodity = commodity
            this.pictures = pictures
            console.log(this.commodity)
            console.log(this.pictures)

            var userId = commodity.userId

            //请求卖家信息
            axios({
                url: 'http://localhost:8070/getUserById',
                method: 'get',
                params: {
                    userId: userId
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            }).then((response)=>{
                if(response.status == 200){
                    this.user = response.data
                }
            })

            //请求卖家待售商品信息
            axios({
                url: 'http://localhost:8070/usersell',
                method: 'get',
                params: {
                    userId: userId,
                    sell: false
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            }).then((response)=>{
                if(response.status == 200){
                    this.sellingList = response.data
                }
            })
        }
    }
}
</script>

<style scoped>
#detail{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    background-color: #EBFAFF;
}
.cwindow{
    text-align: center;
}
.cdinfo{
    width: 1000px;
    height: 300px;
    padding: 50px 20px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    border-left: #CEDFD3 solid 2px;
    border-right: #CEDFD3 solid 2px;
    border-bottom: #CEDFD3 solid 1px;
    border-radius: 10px;
}
</style>


