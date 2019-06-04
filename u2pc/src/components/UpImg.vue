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
        <button class="btn" v-on:click="finish" :disabled="num!=5">完成</button>       
    </div>
</template>

<script>
export default {
    name: 'UpImg',
    data() {
        return {
            pictures: [],
            params: new FormData(),
            num: 0,
            file: null
        }
    },
    methods: {
        add () {
            this.$refs.file.click()
        },
        finish: function(){
            var params = this.params
            var pictures = this.pictures
            this.$emit("getParams", params)
            this.$emit("getPictures", pictures)
        },
        getFile (event) {
            this.file = event.target.files[0]
            const item = {
                name: this.file.name,
                size: this.file.size,
                file: this.file
            }
            this.html5Reader(this.file, item)

            this.params.append('file', this.file);//通过append向form对象添加数据
            
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
        deleteImg (index){
            this.pictures.splice(index, 1)
            this.num--
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
