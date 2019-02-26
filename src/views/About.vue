<template>
  <div class="about">
    <div class="about-content">
      <h1>SMOGER</h1>
      <h3>Simple app created to learn and practice Vue.js. The app uses Airly API to retrieve air measurements. For the styling used only CSS</h3>
      <h3>App functionality - lists cities with the name of the city, level of pollution and a sign of pollution, after click, shows modal with details</h3>
      <a href="https://airly.eu" style="font-family: 'Open Sans Condensed', sans-serif; text-decoration: none; color: inherit;">https://airly.eu</a>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'about'
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|ZCOOL+QingKe+HuangYou');
  .about-content{
    text-align: center;
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    font-size: 20px;
    color: #B2B2B2;
  }

</style>