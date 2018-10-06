function imgtest () {
  var d = document
  var on = function (b, o) {
    for (var a in o) {
      b['on' + a] = o[a]
    }
  }
  var isRun
  var startX
  var startY
  var endX
  var endY
  var rX
  var rY
  var bgX = 0
  var bgY = 0
  var $b = d.getElementById('box')
  console.log($b)
  var ww = parseInt($b.style.width)
  var wh = parseInt($b.style.height)
  var i = $b.getElementsByTagName('img')[0]
  var img = i.style
  var imgw = parseInt(img.width)
  var imgh = parseInt(img.height)
  var scaleSize = 1
  function rs () {
    var w
    var h
    if (ww / wh < imgw / imgh) {
      w = ww
      h = imgh * ww / imgw
      bgX = 0
      bgY = -(h - wh) / 2
      scaleSize = ww / imgw
    } else {
      w = imgw * wh / imgh
      h = wh
      bgX = -(w - ww) / 2
      bgY = 0
      scaleSize = wh / imgh
    }
    img.width = w + 'px'
    img.height = h + 'px'
    img.left = bgX + 'px'
    img.top = bgY + 'px'
  }
  rs()
  on(d, {
    'mousedown': function (e) {
      if (e.which === 2) {
        rs()
      }
      if (e.which === 1 && e.target && (e.target === i)) {
        isRun = true
        startX = e.pageX
        startY = e.pageY
        return false
      }
    },
    'mouseup': function (e) {
      if (e.which !== 1) {
        return
      }
      img.cursor = 'default'
      isRun = false
      bgX = rX
      bgY = rY
      return false
    },
    'mousemove': function (e) {
      if (e.which !== 1) {
        return
      }
      if (isRun) {
        img.cursor = 'move'
        endX = e.pageX
        endY = e.pageY
        rX = bgX + endX - startX
        rY = bgY + endY - startY
        img.left = rX + 'px'
        img.top = rY + 'px'
      }
    },
    'mousewheel': function (e) {
      var x = e.pageX
      var y = e.pageY
      e.preventDefault()
      if (e.target && (e.target === i)) {
        x = x - $b.offsetLeft
        y = y - $b.offsetTop
        var p = -(e.deltaY) / 1000
        var ns = scaleSize
        console.log(scaleSize)
        console.log(p)
        ns += p
        ns = ns < 0.3 ? 0.3 : (ns > 6 ? 6 : ns)
        console.log(ns)
        bgX = bgX - (x - bgX) * (ns - scaleSize) / (scaleSize)
        bgY = bgY - (y - bgY) * (ns - scaleSize) / (scaleSize)
        scaleSize = ns
        img.width = imgw * ns + 'px'
        img.height = imgh * ns + 'px'
        img.top = bgY + 'px'
        img.left = bgX + 'px'
      }
    }
  })
}

export {
  imgtest
}
