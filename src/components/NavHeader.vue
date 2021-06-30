<template>
    <div class="header">
        <div class="header-logo">
            <div class="wrapper logo-wrapper">
                <img src="../assets/img/logo.png" alt="">
                <div class="header-search">
                    <input type="text" name="" id="">
                    <img src="../assets/img/search_btn.png" alt="">
                </div>
            </div>
        </div>
        <div class="header-link">
            <div class="wrapper link-wrapper">
                <ul>
                    <li>首页</li>
                    <li>游记</li>
                    <li>攻略</li>
                    <li>寄语</li>
                </ul>
                <div class="link-login">
                    <span>登录</span>
                    <span>/</span>
                    <span>注册  </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'nav-header',
    // mounted(){
    //     alert(this.$route.params.path)
    //     if(this.$route.params.path == 'index'){
    //         alert(this.$route.params.path)

    //     }
    // },
    methods:{

    }
    
}
</script>
<style lang="scss">
.header-logo{
    background-color: #333;
    height: 63px;
    .logo-wrapper{
        display: flex;
        justify-content: space-between;
        .header-search{
            position: relative;
            width: 285px;
            height: 30px;
            input{
                width: 100%;
                background-color: #525362;
                border: none;
                height: 100%;
                color: #fff;
                margin-top: 15px;
                padding: 0px 35px 0px 20px;
                box-sizing: border-box;
                position: relative;
            }
            img{
                position: absolute;
                width: 16px;
                height: 16px;
                right: 10px;
                top: 22px;
            }
        }
    }
}
 .header-link{
    background-color: #222;
    height: 50px;
    .link-wrapper{
        display: flex;
        justify-content: space-between;
        ul{
            display: inline-block;
            border-right: 1px solid #0d0c08;
        }
        li{
            display: inline-block;
            width: 100px;
            color: #fff; 
            line-height: 50px;
            background-color:#2a2a2a;
            font-size: 16px;
            text-align: center;
            border-right: 1px solid #353535;
            border-left: 1px solid #0d0c08;
            transition: all .3s ease;
            cursor: pointer;
            position: relative;
        }
        li::before{
            content:'';
            position: absolute;
            border-bottom: 4px #dc1720 solid;
            bottom: 0px;
            left: 0px;
            width: 0;
        }
        li:nth-child(1){
           border-left:none; 
        }
        li:nth-child(1):hover{
            background-color: #dc1720;
        }
        li:nth-child(2):hover{
            background-color: #00c3c3;
        }
        li:nth-child(2)::before{
            border-bottom: 4px #00c3c3 solid;
        }
        li:nth-child(3):hover{
            background-color: #053960;
        }
        li:nth-child(3)::before{
            border-bottom: 4px #053960 solid;
        }
        li:nth-child(4):hover{
            background-color: #fa5f00;
        }
        li:nth-child(3)::before{
            border-bottom: 4px #fa5f00 solid;
        }
        .link-login{
            color: #fff;
            span{
                display: inline-block;
                line-height: 50px;
                padding-left: 4px;
            }
        }
        
    }
}

</style>