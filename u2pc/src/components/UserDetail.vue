<!--> 用户信息详情，包括用户的基本信息、以及用户的已售商品和待售商品<-->
<template>
    <div id="userdetail">
        <headwrap/>
        <div class="content"> 
            <userInfo v-bind:iden="iden" :user="user" :tmpuser="tmpuser"/>
            <usercontent v-bind:iden="iden" :sellingList="sellingList" :soldList="soldList"/>
        </div>
        
    </div>   
</template>

<script>
import headwrap from './HeadWrap'
import userInfo from './UserInfo'
import usercontent from './UserContent'

const axios = require('axios');

export default {
    name: 'UserDetail',
    components: {
        headwrap: headwrap,
        userInfo: userInfo,
        usercontent: usercontent
    },
    data() {
        return {
            iden: '',
            user:{
                img: {},
                userName: '',
                userId: 0,
                sign: '',
                phone: '',
                email: '',
                // sellingNum: 0,
                // soldNum: 0
            },
            tmpuser: {
                img: {},
                userName: '',
                userId: 0,
                sign: '',
                phone: '',
                email: '',
                // sellingNum: 0,
                // soldNum: 0
            },
            sellingList: [],
            soldList: []
        }
    },
    created() {
        this.getQuery()
    },
    methods: {
        getQuery(){
            var iden = this.$route.params.iden
            // var user = this.$route.params.user
            var userId = this.$route.params.userId

            this.iden = iden

            //请求用户信息
            axios({
                url: 'http://localhost:8070/getUserById',
                method: 'get',
                params:{
                    userId: userId
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' 
                },
                timeout: 1000
            }).then((response)=>{
                console.log(response)

                var user = response.data


                //要对user和tmpuser的属性分别赋值
                this.user.userName = user.userName
                this.tmpuser.userName = user.userName
                this.user.userId = user.userId
                this.tmpuser.userId = user.userId
                this.user.sign = user.sign
                this.tmpuser.sign = user.sign
                this.user.phone = user.phone
                this.tmpuser.phone = user.phone
                this.user.email = user.email
                this.tmpuser.email = user.email
                this.user.password = user.password
                this.tmpuser.password = user.password
                // this.user.sellingNum = user.sellingNum
                // this.tmpuser.sellingNum = user.sellingNum
                // this.user.soldNum = user.soldNum
                // this.tmpuser.soldNum = user.soldNum
                this.user.img = user.img
                this.tmpuser.img = user.img
            })

            //请求用户在售商品信息
            axios({
                url: 'http://localhost:8070/usersell',
                method: 'get',
                params:{
                    userId: userId,
                    sell: false
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' 
                },
                timeout: 1000
            }).then((response)=>{
                console.log(response)
                if(response.status == 200){
                    var sellingList = response.data
                    this.sellingList = sellingList
                }
            })

            //请求用户已售商品信息
            axios({
                url: 'http://localhost:8070/usersell',
                method: 'get',
                params:{
                    userId: userId,
                    sell: true
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' 
                },
                timeout: 1000
            }).then((response)=>{
                console.log(response)
                if(response.status == 200){
                    var soldList = response.data
                    this.soldList = soldList
                }
            })
        }
    },
}
</script>

<style scoped>
#userdetail{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    background-color: #EBFAFF;
}
.content{
    widows: 100%;
    padding: 10px 10px;
    display: flex;
    flex-direction: row; 
}
</style>
