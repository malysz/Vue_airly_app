<template>
    <div id="nav">
        <div class="logo">
            SMOGER
        </div>
        <ul class="nav-links">
            <li><router-link class="li-a" to="/" exact>Home</router-link></li>
            <li><router-link class="li-a" to="/about" exact>About</router-link></li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|ZCOOL+QingKe+HuangYou');
    #nav{
        font-family: 'ZCOOL QingKe HuangYou', cursive;
        display: flex;
        background-color: #262626;
        justify-content: space-around;
        align-items: center;
        min-height: 8vh;
    }
    .logo{
        color: #B2B2B2;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 20px;
    }
    .nav-links{
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #262626;
    }
    li {
        float: left;
    }
    .li-a{
        display: block;
        color: #B2B2B2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    .li-a:hover{
        background-color: #0F0F0F;
    }
    .router-link-active{
        background-color: #1F1F1F;
    }
    .burger{
        display: none;
        cursor: pointer;
    }
    .burger div{
        width: 20px;
        height: 2px;
        background-color: #B2B2B2;
        margin: 3px;
    }

    @media(max-width: 768px){
        #nav{
            width: 100%;
        }
        .logo{
            color: #B2B2B2;
            font-weight: bold;
            letter-spacing: 2px;
            font-size: 10px;
        }
    }
</style>