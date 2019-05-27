<template>
    <div id="content">
        <div v-for="(row,rdx) in commodities" class="row">
            
                <div v-for="(item,idx) in row" class="commo">
                    <router-link :to="{name:'Detail', query:{commodity:commodities[rdx][idx]}}" class="route">
                        <img :src="item.pictures[0].img" class="cimg"/>
                        <div class="cinfo"><span class="cname">{{item.name}}</span>: {{item.intro}}</div>
                        <div class="cprice">￥{{item.price}}</div>
                        <div class="uinfo">{{item.username}}</div>    
                    </router-link>            
                </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "mycontent",
    data() {
        return {
            commodity: {
                name: "c1",
                id: "1",
                price: "50",
                intro: "test1",
                kind: "二手书",
                username: '卖家名',
                userId: 1,
                pictures:[
                    {
                        img: require('../assets/pic1.jpg')
                    },
                    {
                        img: require('../assets/pic2.jpg')
                    },
                    {
                        img: require('../assets/pic3.jpg')
                    },
                    {
                        img: require('../assets/pic4.jpg')
                    },
                    {
                        img: require('../assets/pic5.jpg')
                    }
                ]
            },
            commodities: [ [{name: 'c1', price: '10', intro: 'test1,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点,再长一点,再长一点', kind: "二手书", username: '123@qq.com', userId: 1, pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]}, 
            {name: 'c2', price: '20', intro: 'test2,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', username: '123@qq.com', userId: 1, pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]}, 
            {name: 'c3', price: '30', intro: 'test3,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', username: '123@qq.com', userId: 1, pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]}, 
            {name: 'c4', price: '40', intro: 'test4,这是一段介绍，但是要长一点，否则看起来就很不舒服,再长一点', username: '123@qq.com', userId: 1,  pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]},
            {name: 'c5', price: '50', intro: 'test5,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]} ],
            
            [{name: 'c6', price: '10', intro: 'test6,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]}, 
            {name: 'c7', price: '20', intro: 'test7,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]}, 
            {name: 'c8', price: '30', intro: 'test8,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]}, 
            {name: 'c9', price: '40', intro: 'test9,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]}, 
            {name: 'c10', price: '50', intro: 'test10,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, pictures:[{img: require('../assets/pic1.jpg')},{img: require('../assets/pic2.jpg')},{img: require('../assets/pic3.jpg')},{img: require('../assets/pic4.jpg')},{img: require('../assets/pic5.jpg')}]}],
            ]
            // [{name: 'c11', price: '10', intro: 'test11,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, picture:[require('../assets/pic2.jpg')]}, 
            // {name: 'c12', price: '20', intro: 'test12,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, picture:[require('../assets/pic3.jpg')]}, 
            // {name: 'c13', price: '30', intro: 'test13,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, picture:[require('../assets/pic1.jpg')]}, 
            // {name: 'c14', price: '40', intro: 'test14,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, picture:[require('../assets/pic2.jpg')]}, 
            // {name: 'c15', price: '50', intro: 'test15,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, picture:[require('../assets/pic3.jpg')]}],
            
        //     [{name: 'c16', price: '10', intro: 'test16,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, picture:[require('../assets/pic1.jpg')]}, 
        //     {name: 'c17', price: '20', intro: 'test17,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, picture:[require('../assets/pic2.jpg')]}, 
        //     {name: 'c18', price: '30', intro: 'test18,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, picture:[require('../assets/pic3.jpg')]}, 
        //     {name: 'c19', price: '40', intro: 'test19,这是一段介绍，但是要长一点，否则看起来就很不舒服', username: '123@qq.com', userId: 1, picture:[require('../assets/pic1.jpg')]}, 
        //    ]]
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
    },
    
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

