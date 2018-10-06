<template>
    <div id="test_3">
        <img ref='btnImg' class="btn-move" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="slideEffect">
    </div>
</template>

<script>
export default{
  name: 'test',
  mounted () {
    // document.onmouseup = () => {
    //   console.log(1)
    //   this.isDragFlag = false
    // }
  },
  data () {
    return {
      isShow: false,
      startX: 0,
      moveX: 0,
      endX: 0,
      disX: 0,
      slideEffect: ''
    }
  },
  methods: {
    start (e) {
      if (e.button === 0) {
        this.canDrag = true
        this.x0 = e.clientX
        this.y0 = e.clientY
      }
    },
    stop (e) {
      this.canDrag = false
    },
    move (e) {
      if (this.canDrag === true) {
        this.x1 = e.clientX
        this.y1 = e.clientX
        let x = this.x1 - this.x0
        let y = this.y1 - this.y0
        let img = document.querySelector('#test_3 img')
        this.style = `left:${img.offsetLeft + x}px;top:${img.offsetTop + y}px`
        this.x0 = this.x1
        this.y0 = this.y1
      }
    }
  }
}
</script>
<style scoped>
 *{
    padding: 0;
    margin: 0
}
#test_3 img{
    position: absolute;
    cursor: move;
}
#test_3 {
    position: relative;
    width: 1000px;
    height: 1000px;
    overflow: hidden;
    border: 1px red dashed
}
</style>
