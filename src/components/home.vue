<template>
   <div class="operator-bg">
    <div id="screen" class="screen">
      <div class="header">
        <div class="header-title">
            <p>无人点运营平台</p>
        </div>
        <div class="header-time">
          <p>数据更新时间</p>
          <span>{{ date }}</span>
          <span>{{ time }}</span>
        </div>
      </div>
      <div class="left">
           <div class="left-top">
             <!-- 访客数 -->
              <visitors-number></visitors-number>
              <div class="chart-wrap">
                <!-- 折线图 -->
                <line-diagram></line-diagram>
              </div>
           </div>
            <div class="left-bottom title_bar">
                  <title-bar label="支付方式分布"></title-bar>
                <div class="chart-wrap">
                  <payment-way></payment-way>
                </div>
           </div>
      </div>
      <div class="middle">       
        <div class="middle-top" >
            <middle-count></middle-count>
              <div class="chart-wrap">
                  <middle-line></middle-line>
              </div>
        </div>
        <div class="middle-bottom title_bar">
            <title-bar label="客流转化"></title-bar>
           <middle-transform></middle-transform>
        </div>
      </div>
      <div class="right">
           <div class="right-top title_bar">
              <title-bar label="品类分析排行"></title-bar>
             <right-sort></right-sort>
           </div>
           <div class="right-middle title_bar">
                <title-bar label="店铺排行榜"></title-bar>
                <right-ranking></right-ranking>
           </div>
            <div class="right-bottom title_bar">
                <title-bar label="热销单品"></title-bar>
               <right-single></right-single>
           </div>
      </div>
    </div>
  </div>
</template>
<script>
import setScreen from '@/utils/setScreen'
import titleBar from '../components/titleBar/index.vue'
import common from '../utils/common.js'
import urls from '../utils/api.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      date: '',
      time: '',
      dateTimer: null,
      swiperActive: 0,
      swiperOption: {
        pagination: '.swiper-pagination',
        spaceBetween: 0,
        autoplay: true,
        loop: true
      }
    }
  },
  components: {
    titleBar
  },
  computed: {
    // swiper () {
    //   return this.$refs.mySwiper.swiper
    // }
  },
  methods: {
    getDate () {
      let _date = new Date()
      this.date = common.dateParse(_date, 'yyyy年MM月dd日')
      this.time = common.dateParse(_date, 'hh:mm:ss')
    },
    timer () {
      this.getDate()
      clearInterval(this.dateTimer)
      this.dateTimer = setInterval(this.getDate, 1000)
    },
    // 最近七天的趋势
    axiosgetHistoryTrend () {
      console.log('dfhgbnnnnnnnnnnnnnnnn')
      this.$axios
        .post(urls.baseURL + urls.getHistoryTrend)
        .then(res => {
          console.log('bffhbvfhbnbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
          console.log(res, '================', 'vhfbvhfbfd')
          let data = res.data
          if (data.code === 0) {
            // let record = data.data
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    axiosAll () {
      this.axiosgetHistoryTrend()
    }
  },
  mounted () {
    setScreen(1920, 1080, 'screen')
    this.timer()
    this.axiosAll()
    clearInterval(this.swiperTimer_)
    this.swiperTimer_ = setInterval(() => {
      if (this.swiperActive < 2) {
        this.swiperActive++
      } else {
        this.swiperActive = 0
      }
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.operator-bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url('../assets/img/bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .screen {
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 20px 20px 0 20px;
   .header {
      margin-bottom: 18px;
        font-family:PingFangSC-Semibold;
     .header-title {
        font-size: 51px;
        color:rgba(255,255,255,1);
        line-height: 73px;
        text-align: center;
        letter-spacing: 11px;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(to left,#00BBFF, #00FFFF );
     }
     .header-time {
        text-align: right;
        font-size: 26px;
         position: absolute;
         right: 40px;
         top: 27px;
        // background-clip: text;
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        // background-image: linear-gradient(to left, #00FFFF 0%, #00BBFF);
         color: #00FFFF;
     }
   }
   .title_bar {
     padding: 20px;
   }
   .left {
     float: left;
     width: 513px;
     .left-top {
       height: 629px;
       margin-bottom: 20px;
       .chart-wrap {
         height: 300px;
      }
     }
     .left-bottom{
      width:513px;
      height:300px; 
      background:linear-gradient(180deg,rgba(100,120,163,0.2),rgba(19,54,102,0.2));
      // opacity:0.5; 
       .chart-wrap {
         margin-top: 20px;
        height: 200px;
      }
     }
   }
   .middle {
     float: left;
      width: 809px;
      margin: 0 22px;
     .middle-top {
      height: 629px;
      margin-bottom: 20px;
      .chart-wrap {
        height: 300px;
      }
     }
     .middle-bottom {
       height: 299px;
     }
   }
   .right {
     float: left;
     width: 514px;
     .right-top {
       height: 310px;
     }
    .right-middle {
      height: 300px;
      margin: 19px 0;
    }
    .right-bottom {
      height: 299px;
    }
   }
  }
}
</style>
