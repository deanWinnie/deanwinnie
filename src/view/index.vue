<template>
    <div class="index-wrapper wrapper clearfix">
      <div class="index-left clearfix">
        <div class="swiper-left clearfix">
          <div class="swiper-left-l clearfix">
            <h2 class="subtitle">
              <span>地点</span>
              <br>
              <span class="small">PLACE</span>
            </h2>
            <ul>
              <li>
                <h3>吉林</h3>
                <span>身侧的朝鲜</span>
              </li>
              <li>
                <h3>宁夏</h3>
                <span>黄河边的自驾</span>
              </li>
              <li>
                <h3>江苏</h3>
                <span>我在苏州很想你</span>
              </li>
              <li>
                <h3>湖北</h3>
                <span>一起来过早</span>
              </li>
              <li>
                <h3>广西</h3>
                <span>来到广西的第一天</span>
              </li>
            </ul>
          </div>
          <div class="swiper-left-r clearfix">
            <swiper :options="swiperOptions">
            <swiper-slide v-for="(item, index) in slideList" :key="index">
                <a :href="'/' + item.id"><img :src="item.img" /></a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next" slot="button-next"></div>
            <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
          </swiper>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
// import 'swiper/css/swiper.css';
import "swiper/swiper.scss";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
  },
   computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
            id: "42",
            img: "/imgs/jilin/lunbo-10.jpg",
        },
        {
            id: "45",
            img: "/imgs/jilin/lunbo-6.jpg",
        },
        {
            id: "46",
            img: "/imgs/jilin/lunbo-7.jpg",
        },
        {
            id: "42",
            img: "/imgs/jilin/lunbo-8.jpg",
        },
        {
            id: "42",
            img: "/imgs/jilin/lunbo-9.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
//导航栏的下划线效果
.header-link {
  .link-wrapper {
    li:nth-child(1)::before {
      width: 100%;
    }
  }
}

.index-wrapper{
  .index-left{
     width: 960px;
     float: left;
     background-color: #FFF;
     box-shadow: 0 0 3px #999;
     padding-top:20px;
    .swiper-left{
      .swiper-left-l{
        width: 180px;
        border-bottom: 2px solid #676869;
        float: left;
        .subtitle{
          color: #FFF;
          font-family: "微软雅黑";
          font-size: 18px;
          text-align: right;
          background-color: #5c5d5e;
          padding: 7px 20px;
          line-height: 20px;
          height: 40px;
          width: 140px;
          float: right;
        }
        ul{
          font-family: "宋体";
          text-align: right;
          float: right;
          font-weight: lighter;
          padding: 0 0 15px 20px;
          height: 415px;
          color: #7e7e7e;
          li{
            cursor: pointer;
            padding: 15px 20px 10px 0;
            border-bottom: 1px solid #dee0e3;
            border-right: 1px solid #dee0e3;
            position: relative;
            height: 58px;
            width: 135px;
            h3{
              font-size: 16px;
              font-family: "微软雅黑";
            }
            span{
              font-size: 12px;
            }
          }
        }
      }
      .swiper-left-r{
        // height: 460px;
        width: 740px;
        float: left;
        margin-left: 20px;
        border-bottom: 2px solid #676869;
        padding-bottom: 6px;
      }
    }
  }
}
.swiper-container{
  img{
    width: 740px;
    height: 474px;
  }
}
</style>