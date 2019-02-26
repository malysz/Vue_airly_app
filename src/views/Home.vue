<template>
  <div class="home">
    <h1 id="title">SMOGER</h1>
    <p id="description">Air quality and measurements in the biggests cities in Poland.</p>
    <show-cities></show-cities>
  </div>
</template>

<script>
// @ is an alias to /src
import showcities from '@/components/searchCities'
export default {
  name: 'home',
  components: {
    'show-cities' : showcities
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|ZCOOL+QingKe+HuangYou');
  .home{
    max-width: 800px;
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    margin: 0px auto;
  }
  #title{
    text-align: center;
    color: #B2B2B2;
  }
  #description{
    text-align: center;
    color: #B2B2B2;
    font-family: 'Open Sans Condensed', sans-serif;
  }
</style>
