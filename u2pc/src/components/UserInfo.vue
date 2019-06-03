<template>
    <div id="userInfo">
        <div v-if="iden">
            <img :src="user.img.name" class="img"/>
            <input class="value" style="display:none" type="file" ref="file" accept="image/*" multiple="multiple" @change="getFile($event)"/>
            <button class="btn" @click="add">上传照片</button>
            <ul class="info">
                <li>用户名：<input v-model="tmpuser.userName" :placeholder="user.userName" :readonly="hide" :clearable="hide"></li>
                <li>个性签名：<input v-model="tmpuser.sign" :placeholder="user.sign" :readonly="hide" :clearable="hide"></li>
                <li>手机：<input v-model="tmpuser.phone" :placeholder="user.phone" :readonly="hide" :clearable="hide"></li>
                <li>邮箱：<input v-model="tmpuser.email" :placeholder="user.email" :readonly="hide" :clearable="hide"></li>
            </ul>
            <button class="btn" v-on:click="changeInfo" :hidden="!hide">修改信息</button>
            <button class="btn sure" v-on:click="sure" :hidden="hide">确认</button>
            <button class="btn cancel" v-on:click="cancel" :hidden="hide">取消</button>
            <router-link :to="{name:'PubCommodity'}" class="route">
                <img class="icon" src="//img.alicdn.com/tfs/TB1g54xnMHqK1RjSZFPXXcwapXa-112-112.png"/>
                <p class="pub">发布商品</p>
            </router-link>
            
        </div>
        <div v-if="!iden">
            <img :src="user.img.name" class="img"/>
            <ul class="info">
                <li>用户名：<input v-model="tmpuser.userName" :readonly="hide" clearable></li>
                <li>个性签名：<input v-model="tmpuser.sign" :readonly="hide" clearable></li>
                <li>手机：<input v-model="tmpuser.phone" :readonly="hide" clearable></li>
                <li>邮箱：<input v-model="tmpuser.email" :readonly="hide" clearable></li>
            </ul>
        </div>
    </div>
</template>

<script>

const axios = require('axios');
export default {
    name: 'UserInfo',
    data() {
        return {
            
            hide: true,
            file: null,
        }
    }, 
    props:{
         //true为用户身份，false为其他用户查看身份
        iden: {
            type: Boolean,
            required: true
        },
        user: {
            type: Object,
            required: true
        },
        tmpuser: {
            type: Object,
            required: true
        }
    },
    methods: {
        changeInfo: function(){
            this.hide = false
        },
        sure: function(){
            this.hide = true
            this.user.userName = this.tmpuser.userName
            this.user.sign = this.tmpuser.sign
            this.user.phone = this.tmpuser.phone
            this.user.email = this.tmpuser.email

            var user = this.user
            axios({
                url: 'http://localhost:8070/setInfo',
                method: 'post',
                params:{
                    userName: user.userName,
                    sign: user.sign,
                    phone: user.phone,
                    email: user.email,
                    userId: user.userId
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' 
                },
                timeout: 1000
            }).then((response)=>{
                console.log(response)
            })
        },
        cancel(){
            console.log(this.tmpuser.username)
            console.log(this.user.username)

            this.tmpuser.userName = this.user.userName
            this.tmpuser.sign = this.user.sign
            this.tmpuser.phone = this.user.phone
            this.tmpuser.email = this.user.email
            this.hide = true
        },
        add () {
            this.$refs.file.click()
        },
        getFile (event) {
            this.file = event.target.files[0]
            const item = {
                name: this.file.name,
                size: this.file.size,
                file: this.file
            }
            this.html5Reader(this.file, item)
            this.user.img = item
        },
        // 将图片文件转成BASE64格式
        html5Reader (file, item) {
            const reader = new FileReader()
            reader.onload = (e) => {
                this.$set(item, 'name', e.target.result)
            }
            reader.readAsDataURL(file)
        },
        submitForm (event) {
            event.preventDefault()
            let formData = new FormData()
            formData.append('file', this.file)
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                }
            this.axios.post('http://127.0.0.1/index/index/upload', formData, config).then(function (res) {
                console.log(res)
                if (res.status === 200) {}
            })
        }

    },   
}
</script>

<style scoped>
#userInfo{
    width: 300px;
    height: 400px;
    border: solid 2px #746F6A;
    border-radius: 6px;
    margin: 40px 40px 40px 150px;
    float: left;
}
.img{
    height: 80px;
    width: 80px;
    margin: 10px 110px;
    border-radius: 50%;
    display: block;
}
.info{
    width: 250px;
    list-style:none;
    margin: 15px 25px;
    padding: 0px;
}
.info li{
    width: 250px;
    margin: 10px 0px;
    float: left;
    text-align: left;
}
.info li input{
    float: right;
}
.btn{
    width: 85px;
    height: 30px;
    border: 0px;
    margin: 5px 0px;
}
.sure{
    background-color: #64F107;
}
.cancel{
    background-color: #F10707;
}
.route{
    color: black;
    text-decoration: none;
}
.icon{
    display: block;
    margin: 40px 94px 0px 94px;
}
.pub{
    font-family: arial,"Hiragino Sans GB","Microsoft Yahei",sans-serif;;
    font-size: 20px;
}
</style>
