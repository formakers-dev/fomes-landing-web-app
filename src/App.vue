<template>
  <div>
    <HomeComponent></HomeComponent>
    <footer class="footer">
      <div class="content" style="text-align: center; color: white; font-size: 10px">
        상호: 포메이커스 | 대표: 이보림 | 이메일: support@formakers.net<br/>
        주소: 서울특별시 서초구 남부순환로289길 5 삼영빌딩 | 사업자등록번호: 280-86-01268 | 통신판매: 2020-서울서초-1319<br/>
        <a href="https://docs.google.com/document/d/1hcU3MQvJf0L2ZNl3T3H1n21C4E82FM2ppesDwjo-Wy4/view" target="_blank">이용약관</a> | <a href="https://docs.google.com/document/d/1QxWuv2zlKYsGYglUTiP5d5IFxZUy6HwKGObXC8x0034/view" target="_blank">개인정보처리방침</a>
      </div>
    </footer>
  </div>
</template>

<script>
  import HomeComponent from './components/Home'

  export default {
    components: {
      HomeComponent
    },
  }
</script>

<!--reset.scss 적용-->
<style lang="scss" src="./assets/commons/reset.scss">
</style>

