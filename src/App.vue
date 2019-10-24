<template>
  <div id="app">
    <img-zoom></img-zoom>
    <hello-world></hello-world>
  </div>
</template>

<script>
import imgZoom from '@/components/imgZoom'
import helloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  data() {
    return {
      key: 111
    }
  },
  components: {
    imgZoom,
    helloWorld
  }
}
</script>

<style>
</style>
