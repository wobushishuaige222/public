<template>
    <div class='test'>
        <div>i am test</div>
    </div>
</template>
<script>
console.log(Vue.test())
export default {
  name: 'helloWorld',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    console.log(this.$http)
    console.log(Vue)
    // this.$http.get('../assets/text.txt')
    //   .then((result) => {
    //     console.log(result)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
  }
}
</script>

<style>
</style>
