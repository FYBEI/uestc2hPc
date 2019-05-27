<!--> 用户信息详情，包括用户的基本信息、以及用户的已售商品和待售商品<-->
<template>
    <div id="userdetail">
        <headwrap/>
        <div class="content"> 
            <userInfo v-bind:iden="iden" :user="user" :tmpuser="tmpuser"/>
            <usercontent/>
        </div>
        
    </div>   
</template>

<script>
import headwrap from './HeadWrap'
import userInfo from './UserInfo'
import usercontent from './UserContent'

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
                username: '',
                userId: 0,
                sign: '',
                phone: '',
                email: '',
                sellingNum: 0,
                soldNum: 0
            },
            tmpuser: {
                img: {},
                username: '',
                userId: 0,
                sign: '',
                phone: '',
                email: '',
                sellingNum: 0,
                soldNum: 0
            }
        }
    },
    created() {
        this.getQuery()
    },
    methods: {
        getQuery(){
            var iden = this.$route.query.iden
            var user = this.$route.query.user

            this.iden = iden

            //要对user和tmpuser的属性分别赋值
            this.user.username = user.username
            this.tmpuser.username = user.username
            this.user.userId = user.userId
            this.tmpuser.userId = user.userId
            this.user.sign = user.sign
            this.tmpuser.sign = user.sign
            this.user.phone = user.phone
            this.tmpuser.phone = user.phone
            this.user.email = user.email
            this.tmpuser.email = user.email
            this.user.sellingNum = user.sellingNum
            this.tmpuser.sellingNum = user.sellingNum
            this.user.soldNum = user.soldNum
            this.tmpuser.soldNum = user.soldNum
            this.user.img = user.img
            this.tmpuser.img = user.img
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
