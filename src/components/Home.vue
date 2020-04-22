<template>
   <div class="home">
      <div id="starsFirst"></div>
      <div id="starsSecond"></div>
      <div id="starsThird"></div>
      <div class="content">
         <div class="contactBox">
            <a href="mailto:contact@formakers.net">
               <span class="contact">contact@formakers.net</span>
            </a>
         </div>

         <!--캐러셀 인트로카드-->
         <VueSlickCarousel class="carouselContainer" v-bind="carouselSettings"
                           v-if="this.windowSize <= 768">
            <div>
               <div class="carouselCard">
                  <span class="firstSub">사전예약 없는!<br>신작 게임 플레이</span>
                  <span class="secondSub">바로 플레이 하세요.</span>
                  <img class="cardImg" src="../assets/images/intro-img-1.png" alt="">
               </div>
            </div>
            <div>
               <div class="carouselCard">
                  <span class="firstSub">탈락 없는!<br>베타 테스트 참여</span>
                  <span class="secondSub">자유롭게 참여 가능해요.</span>
                  <img class="cardImg" src="../assets/images/intro-img-2.png" alt="">
               </div>
            </div>
            <div>
               <div class="carouselCard">
                  <span class="firstSub">짭짤해!<br>포메스 리워드</span>
                  <span class="secondSub">게임 피드백주고 보상을 받으세요.</span>
                  <img class="cardImg" src="../assets/images/intro-img-3.png" alt="">
               </div>
            </div>
         </VueSlickCarousel>

         <!--일반 인트로카드-->
         <div class="cardContainer">
            <div class="card">
               <span class="firstSub">사전예약 없는!<br>신작 게임 플레이</span>
               <span class="secondSub">바로 플레이 하세요.</span>
               <img class="cardImg" src="../assets/images/intro-img-1.png" alt="">
            </div>
            <div class="card">
               <span class="firstSub">탈락 없는!<br>베타 테스트 참여</span>
               <span class="secondSub">자유롭게 참여 가능해요.</span>
               <img class="cardImg" src="../assets/images/intro-img-2.png" alt="">
            </div>
            <div class="card">
               <span class="firstSub">짭짤해!<br>포메스 리워드</span>
               <span class="secondSub">게임 피드백주고 보상을 받으세요.</span>
               <img class="cardImg" src="../assets/images/intro-img-3.png" alt="">
            </div>
         </div>
         <div class="logoContainer">
            <div>
               <img class="colorBar" src="../assets/images/color-bar.png" alt="">
            </div>
            <div>
               <img class="fomesLogo" src="../assets/images/fomes.png" alt="">
               <vue-typed-js class="fomesSub" v-bind="fomesSubSettings">
                  <span class="fomesSub">신작게임 놀이터, <span class="typing"></span></span>
               </vue-typed-js>
            </div>
            <div>
               <a href="https://play.google.com/store/apps/details?id=com.formakers.fomes&hl=ko"
                  target="_blank">
                  <img class="download" src="../assets/images/download.png" alt="">
               </a>
            </div>
         </div>
         <div class="copyright">Copyright © 2020 ForMakers</div>
      </div>
   </div>
</template>

<script>
   import VueSlickCarousel from 'vue-slick-carousel'
   import 'vue-slick-carousel/dist/vue-slick-carousel.css'
   import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

   export default {
      created() {
         this.windowSize = window.innerWidth
         window.addEventListener('resize', () => {
            this.windowSize = window.innerWidth
         })
      },
      components: {VueSlickCarousel},
      data() {
         return {
            windowSize: '',
            carouselSettings: {
               dots: true,
               arrows: false,
               touchMove: true,
               dotsClass: 'slick-dots',
               autoplay: true,
               autoplaySpeed: 3000,
            },
            fomesSubSettings: {
               smartBackspace: true,
               typeSpeed: 90,
               startDelay: 1000,
               backSpeed: 250,
               backDelay: 900,
               loop: true,
               strings: ['포메스'],
            },
         }
      },
      // methods: {
      //    windowWidth() {
      //       this.windowSize = window.innerWidth
      //    }
      // }
   }
</script>

<style lang="scss" src="./Home.scss">

</style>
