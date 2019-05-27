<template>
    <div id="user">
        <div class="input-field">
            <div class="user-field">
                <span>账号:</span>
                <input type="text" maxlength="32" tabindex="1" aria-label="邮箱">
            </div>
            
            <div class="pwd-field">
                <span>密码:</span>
                <input type="text" maxlength="32" tabindex="2" aria-label="登录密码" autocomplete="off">
            </div>
        </div>

        <div class="button-field">
            <button class="loginbtn">登录</button>
            <button class="loginbtn">注册</button>
        </div>
    </div>
    
</template>

<style scoped>
    #user{
        position: absolute;
        top: 120px;
        right: 200px;
        width: 300px;
        height: 200px;
        border: 2px solid #eee;
        border-radius: 10px;
        background-color: #fff;
        padding: 5px;
    }
    .input-field{
        margin-top: 10px;
        padding: 10px;
    }
    .user-field{
        margin-top: 10px; 
    }
    span{
        margin: 10px;
        text-align: center;
    }
    .pwd-field{
        margin-top: 20px;
    }
    .button-field{
        margin: 15px 40px;
        display: flex;
        flex-direction: row;
    }
    .loginbtn{
        flex: 1;
        margin: 5px 10px;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border: none;
        border-radius: 5px; 
        background-color: #4CAF50;
    }
</style>

