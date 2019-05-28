<template>
   <div id="usercontent">
       <div class="selectTab">
            <div v-for="(item, index) in tabList" class="item">
                <div v-if="idx==index">
                    <p class="active">{{item.text}}</p>
                    <div class="line"></div>
                </div>

                <div v-if="idx!=index" v-on:click="changeTabbar(index)">
                    <p class="normal">{{item.text}}</p>
                </div>
            </div>
        </div>
      
        <div v-if="idx==0">
            <div v-for="(item, index) in sellingList"  class="commo">
                <img :src="item.picture[0]" class="img"/>
                <div class="info">
                    <div class="up">
                        <span class="name">{{item.name}}</span>
                        <span class="price">{{item.price}}</span>
                    </div>
                    <div class="intro">{{item.intro}}</div>
                </div>
                <div class="btn">
                    <button class="sell" v-on:click="sell(index)" :hidden="!iden">已售</button>
                    <button class="delete" v-on:click="deleteC(index)" :hidden="!iden">删除</button>
                </div>
            </div>
        </div>
        <div v-if="idx==1">
            <div v-for="(item, index) in soldList"  class="commo">
                <img :src="item.picture[0]" class="img"/>
                <div class="info">
                    <div class="up">
                        <span class="name">{{item.name}}</span>
                        <span class="price">{{item.price}}</span>
                    </div>
                    <div class="intro">{{item.intro}}</div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'UserContent',
    props: {
        iden: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            tabList: [{id: 0, "text": "待售"},{id: 1, "text": "已售"}],
            sellingList: [ {name: '待售商品名1', price: '10', intro: 'test1,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点,再长一点,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic1.jpg')]}, 
                {name: '待售商品名2', price: '20', intro: 'test2,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic2.jpg')]}, 
                {name: '待售商品名3', price: '30', intro: 'test3,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic3.jpg')]}, 
                {name: '待售商品名4', price: '40', intro: 'test4,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic4.jpg')]},
                {name: '待售商品名5', price: '50', intro: 'test5,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic5.jpg')]},
            
                {name: '待售商品名6', price: '10', intro: 'test6,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic1.jpg')]}, 
                {name: '待售商品名7', price: '20', intro: 'test7,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic2.jpg')]}, 
                {name: '待售商品名8', price: '30', intro: 'test8,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic3.jpg')]}, 
                {name: '待售商品名9', price: '40', intro: 'test9,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic4.jpg')]}, 
                {name: '待售商品名10', price: '50', intro: 'test10,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic5.jpg')]}
            ],
            soldList: [ {name: '已售商品名1', price: '10', intro: 'test1,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点,再长一点,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic1.jpg')]}, 
                {name: '已售商品名2', price: '20', intro: 'test2,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic2.jpg')]}, 
                {name: '已售商品名3', price: '30', intro: 'test3,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic3.jpg')]}, 
                {name: '已售商品名4', price: '40', intro: 'test4,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', owner:{username: '123@qq.com'}, picture:[require('../assets/pic4.jpg')]},
                {name: '已售商品名5', price: '50', intro: 'test5,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic5.jpg')]},
            
                {name: '已售商品名6', price: '10', intro: 'test6,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic1.jpg')]}, 
                {name: '已售商品名7', price: '20', intro: 'test7,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic2.jpg')]}, 
                {name: '已售商品名8', price: '30', intro: 'test8,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic3.jpg')]}, 
                {name: '已售商品名9', price: '40', intro: 'test9,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic4.jpg')]}, 
                {name: '已售商品名10', price: '50', intro: 'test10,这是一段介绍，但是要长一点，否则看起来就很不舒服', owner:{username: '123@qq.com'}, picture:[require('../assets/pic5.jpg')]}
            ],
            idx: 0
        }
    },
    methods: {
        changeTabbar: function(index){
            this.idx = index
            console.log(this.idx)
        },
        sell: function(index){
            var commodity = this.sellingList[index]
            this.soldList.push(commodity)
            this.sellingList.splice(index, 1)
        },
        deleteC: function(index){
            var commodity = this.sellingList[index]
            this.sellingList.splice(index, 1)
        }
    },
}
</script>


<style scoped>
#usercontent{
    width: 600px;
    min-width: 600px;
    border: solid 2px #746F6A;
    border-radius: 6px;
    margin: 40px 40px;
}
.selectTab{
    width: 600px;
    height: 60px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: solid 2px  #746F6A;
    background: #077EF1;
    float: top;
    display: flex;
    flex-direction: row;
}
.item{
    flex: 1;
    margin: 10px 30px;
    cursor:pointer;
}
.normal{
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
.commo{
    width: 500px;
    height: 100px;
    margin: 20px 50px;
    border-bottom: solid 1px #746F6A;
    cursor:pointer;
}
.img{
    width: 100px;
    height: 80px;
    margin: 10px;
    float: left;
}
.info{
    height: 100px;
    width: 360px;
    float: left;
}
.up, .intro{
    height: 50px;
    text-align: left;
    padding: 0px 20px;
}
.up{
    display: flex;
    flex-direction: row;
}
.name{
    flex: 1;
    font-family: 'Microsoft YaHei';
    font-size: 20px;
}
.price{
    flex: 1;
    font-size: 17px;
    color: red;
    font-family: 'Verdana';
    text-align: center;
}
.intro{
    font-family: 'tahoma', 'arial', '宋体';
    font-size: 15px;
}
.btn{
    width: 20px;
    height: 100px;
    float: right;
}
.sell, .delete{
    color: #fff;
    border: 0px;
    border-radius: 3px;
}
.sell{
    background-color: greenyellow;
    margin-bottom: 5px;
}
.delete{
    background-color: red;
}
</style>
