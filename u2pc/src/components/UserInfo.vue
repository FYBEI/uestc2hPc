<template>
    <div id="userInfo">
        <div v-if="iden">
            <img :src="user.img.name" class="img"/>
            <input class="value" style="display:none" type="file" ref="file" accept="image/*" multiple="multiple" @change="getFile($event)"/>
            <button class="btn" @click="add">上传照片</button>
            <ul class="info">
                <li>用户名：<input v-model="tmpuser.username" :placeholder="user.username" :readonly="hide" :clearable="hide"></li>
                <li>个性签名：<input v-model="tmpuser.sign" :placeholder="user.sign" :readonly="hide" :clearable="hide"></li>
                <li>手机：<input v-model="tmpuser.phone" :placeholder="user.phone" :readonly="hide" :clearable="hide"></li>
                <li>邮箱：<input v-model="tmpuser.email" :placeholder="user.email" :readonly="hide" :clearable="hide"></li>
            </ul>
            <button class="btn" v-on:click="changeInfo" :hidden="!hide">修改信息</button>
            <button class="btn sure" v-on:click="sure" :hidden="hide">确认</button>
            <button class="btn cancel" v-on:click="cancel" :hidden="hide">取消</button>
        </div>
        <div v-if="!iden">
            <img :src="user.img.name" class="img"/>
            <ul class="info">
                <li>用户名：<input v-model="tmpuser.username" :readonly="hide" clearable></li>
                <li>个性签名：<input v-model="tmpuser.sign" :readonly="hide" clearable></li>
                <li>手机：<input v-model="tmpuser.phone" :readonly="hide" clearable></li>
                <li>邮箱：<input v-model="tmpuser.email" :readonly="hide" clearable></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    data() {
        return {
            // user:{
            //     img: {
            //         name: require("../assets/head.jpg"),
            //         size: 0,
            //         file: null
            //     },
            //     username: '用户名',
            //     sign: '个性签名',
            //     phone: '15759180826',
            //     email: 'liuwenxin@gmail.com'
            // },
            // tmpuser:{
            //     img: {
            //         name: require("../assets/head.jpg"),
            //         size: 0,
            //         file: null
            //     },
            //     username: '用户名',
            //     sign: '个性签名',
            //     phone: '15759180826',
            //     email: 'liuwenxin@gmail.com'
            // },
            // iden: true,
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
        changeInfo(){
            this.hide = false
        },
        sure(){
            this.hide = true
            this.user.username = this.tmpuser.username
            this.user.sign = this.tmpuser.sign
            this.user.phone = this.tmpuser.phone
            this.user.email = this.tmpuser.email
        },
        cancel(){
            console.log(this.tmpuser.username)
            console.log(this.user.username)

            this.tmpuser.username = this.user.username
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
</style>
