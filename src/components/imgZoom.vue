<template>
    <div id="box" style="width: 500px;height: 500px;">
        <img src="../assets//map.jpg" style="width:200px; height:262px;" alt="">
    </div>
</template>

<script>
import { imgtest } from '../assets/demoZoom'
export default{
  name: 'imgZoom',
  mounted () {
    imgtest()
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{background: #333;}
#box{position: relative;overflow: hidden;margin: 50px auto;border: 1px solid red;background: #fff;}
#box img{position: absolute;}
</style>
