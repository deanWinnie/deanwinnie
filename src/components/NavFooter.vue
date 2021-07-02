<template>
    <div class="footer">
        <div class="footer-wrapper wrapper">
            <div class="footer-logo">
                <img src="./../assets/img/logo.png" alt="">
                <span>THIS IS OUR MOMENT</span>
                <span></span> 
            </div>
            <div class="footer-records">
                <p>Copyright © 2001-2017 Chinese National Geography Press. All rights reserved.</p>
                <p>优秀科普网站 京ICP证090072号 京ICP备10014304号-4 京ICP备10014304号-5 京公网安备11010502026082 新出网证（京）字 049号 出版物经营许可证</p>
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
    }
}
</style>