<template>
    <div id="UpImg">
        <div class="imgwall">
            <div v-for="(item, index) in pictures" class="item">
                <img :src="item.name" class="img"/> 
                <img src="../assets/xx.png" class="cancel" v-on:click="deleteImg(index)">   
            </div>
        </div>
        <input class="value" style="display:none" type="file" ref="file" accept="image/*" multiple="multiple" @change="getFile($event)"/>
        <button class="btn" @click="add" :disabled="num==5">上传照片</button>       
    </div>
</template>

<script>
export default {
    name: 'UpImg',
    data() {
        return {
            pictures: [],
            num: 0,
            file: null
        }
    },
    methods: {
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
            
            this.pictures.push(item)
            console.log(this.pictures)
            this.num++
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
        },
        deleteImg (index){
            this.pictures.splice(index, 1)
            console.log(this.pictures)
        }
    },    
}
</script>

<style scoped>
#UpImg{
    width: 100%;
    height: 250px;
}
.imgwall{
    height: 150px;
    width: 750px;
    margin: 20px auto;
    border-radius: 5px;
    background-color: #EDFDFC;
}
.item{
    height: 150px;
    width: 150px;
    float: left;
}
.img{
    height: 100px;
    width: 100px;
    margin-top: 25px;
    margin-left: 25px;
    margin-bottom: 25px;
    float: left;
}
.cancel{
    width: 25px;
    height: 25px;
    margin-top: 10px;
    cursor: pointer;
}
.btn{
    width: 85px;
    height: 30px;
    border: 0px;
}
</style>
