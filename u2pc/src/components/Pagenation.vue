<template>
    <div id="pagenation">
        <div class="el-page">
            <button class="btn lefta" v-on:click="pageUp"><i>PgUp</i></button>
            <ul v-if="currentPage < 4" class="apage" v-on:click="changePage">
                <li>
                    <a v-if="currentPage === 1" style="background-color: #FFCA33;">1</a>
                    <a v-else>1</a>
                </li>
                <li>
                    <a v-if="currentPage === 2" style="background-color: #FFCA33;">2</a>
                    <a v-else>2</a>
                </li>
                <li>
                    <a v-if="currentPage === 3" style="background-color: #FFCA33;">3</a>
                    <a v-else>3</a>
                </li>               
                <li>
                    <a v-if="currentPage === 4" style="background-color: #FFCA33;">4</a>
                    <a v-else>4</a>
                </li>
                <li>
                    <a v-if="currentPage === 5" style="background-color: #FFCA33;">5</a>
                    <a v-else>5</a>
                </li>
                <li>...</li>
                <li><a>{{lastPage}}</a></li>
            </ul>
            <ul v-else-if="currentPage <= (lastPage-3)" class="apage" v-on:click="changePage">
                <li><a>{{firstPage}}</a></li>
                <li>...</li>
                <li><a>{{currentPage-1}}</a></li>
                <li><a style="background-color: #FFCA33;">{{currentPage}}</a></li>
                <li><a>{{currentPage+1}}</a></li>
                <li>...</li>
                <li><a>{{lastPage}}</a></li>
            </ul>
            <ul v-else class="apage" v-on:click="changePage">
                <li><a>{{firstPage}}</a></li>
                <li>...</li>
                <li>
                    <a v-if="currentPage === (lastPage-4)" style="background-color: #FFCA33;">{{lastPage-4}}</a>
                    <a v-else>{{lastPage-4}}</a>
                </li>
                <li>
                    <a v-if="currentPage === (lastPage-3)" style="background-color: #FFCA33;">{{lastPage-3}}</a>
                    <a v-else>{{lastPage-3}}</a>
                </li>
                <li>
                    <a v-if="currentPage === (lastPage-2)" style="background-color: #FFCA33;">{{lastPage-2}}</a>
                    <a v-else>{{lastPage-2}}</a>
                </li>
                <li>
                    <a v-if="currentPage === (lastPage-1)" style="background-color: #FFCA33;">{{lastPage-1}}</a>
                    <a v-else>{{lastPage-1}}</a>
                </li>
                <li>
                    <a v-if="currentPage === (lastPage)" style="background-color: #FFCA33;">{{lastPage}}</a>
                    <a v-else>{{lastPage}}</a>
                </li>
            </ul>
            <button class="btn righta" v-on:click="pageDown"><i>PgDn</i></button>
        </div>        
    </div>
</template>

<script>
export default {
    name: "pagenation",
    data() {
        return {
            currentPage: 10,
            firstPage: 1,
            lastPage: 20
        }
    }, 
    methods: {
        changePage: function(e){
            var target = e.currentTarget; //整个ul
            var currentEventTarget = e.target;  //其中一个li 
            var page = Number(currentEventTarget.innerText);    //选中的页面号
            this.currentPage = page;

            
            //发送请求，请求新的一页的内容
        },
        pageDown: function(){
            if(this.currentPage < this.lastPage){
                this.currentPage++;
                //发送请求，请求下一页的内容
            }
            
        },
        pageUp: function(){
            if(this.currentPage > 1){
                this.currentPage--;
                //发送请求，请求上一页的内容
            }  
        }
    }
}
</script>

<style scoped>
#pagenation{
    width: 600px;
    height: 100px;
    margin: 10px 30px;
    position: relative;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);   
}
.el-page{
    display: flex;
    flex-direction: row;
    margin: 10px 50px;
}
.btn{
    display: inline-block;
    height: 30px;
    width: 40px;
    margin-top: 45px;
    margin-bottom: 45px;
}
.btn:hover{
    cursor:pointer;
}
.btn i{
    font-size: 12px;   
}
.lefta{
    float: left;
}
.righta{
    float: right;
}
.apage{
    padding: 15px 0px;
    height: 50px;
    width: 420px;
}
.apage li{
    list-style:none; 
    padding: 15px; 
    width: 30px;
    height: 30px;
    float:left; 
}
.apage li a{
    display:block;
    width: 30px;
    height: 30px;
    background:rgb(255, 255, 255);
    color:rgb(32, 30, 30);
    text-decoration:none;
    border-radius: 3px; 
    text-align: center;
    line-height: 30px;
}
.apage li a:hover{
    color:rgb(233, 128, 128);
    text-decoration:none;
    cursor:pointer;
}
</style>

