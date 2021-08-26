<template>
    <div class="footer">
        <div class="footer-wrapper wrapper">
            <div class="footer-logo">
                <img src="./../assets/img/logo.png" alt="">
                <span>THIS IS OUR MOMENT</span>
                <span></span> 
            </div>
            <div class="footer-records">
                <p>Copyright 2021 mywen.net ALL Rights Reserved</p>
                <p><a href="https://beian.miit.gov.cn">浙ICP备2021025976号</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'nav-footer',
    
}
</script>
<style lang="scss" scoped>
.footer{
    width: 100%;
    background-color: #333;
    height: 180px;
    .footer-logo{
        padding-top: 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        span{
            color: #fff;
            font-family: "微软雅黑";
            font-size: 20px;
            font-weight: bold;
            line-height: 63px;
        }
    }
    .footer-records{
        padding-top: 30px;
        p{
            text-align: center;
            font-size:12px;
            color:#999;
        }
        a{
            color:#999;
            text-decoration: none;
        }
    }
}
</style>