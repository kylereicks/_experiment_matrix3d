;(function(window, document, undefined){
  var img = document.getElementById('image'),
  m = window.getComputedStyle(img).transform || window.getComputedStyle(img).webkitTransform,
  frame = frame || 0,
  deg = Math.PI/180,
  baseMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ],
  matrix3dMultiply = function(a, b){
    return [
      a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12],
      a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13],
      a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14],
      a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15],
      a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12],
      a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13],
      a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14],
      a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15],
      a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12],
      a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13],
      a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14],
      a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12],
      a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13],
      a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14],
      a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15],
      a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15],
    ];
  },
  animate = {
    init: function(){
      var intervalId = window.setInterval(function(){
        var xr = baseMatrix.slice(0);
        var zr = baseMatrix.slice(0);
        var yr = baseMatrix.slice(0);
        var sx = baseMatrix.slice(0);
        var sy = baseMatrix.slice(0);
        var sa = baseMatrix.slice(0);
        var tx = baseMatrix.slice(0);
        var ty = baseMatrix.slice(0);
        var tz = baseMatrix.slice(0);
        var ta = baseMatrix.slice(0);
        if(frame <= 360){
          // x rotation
          xr[5] = Math.cos(frame * deg);
          xr[6] = -Math.sin(frame * deg);
          xr[9] = Math.sin(frame * deg);
          xr[10] = Math.cos(frame * deg);
          // y rotation
          yr[0] = Math.cos(frame * deg);
          yr[2] = Math.sin(frame * deg);
          yr[8] = -Math.sin(frame * deg);
          yr[10] = Math.cos(frame * deg);
          // z rotation
          zr[0] = Math.cos(frame * deg);
          zr[1] = -Math.sin(frame * deg);
          zr[4] = Math.sin(frame * deg);
          zr[5] = Math.cos(frame * deg);
          // scale x
          sx[0] = sx[0] + Math.sin(frame * deg);
          // scale y
          sy[5] = sy[5] + Math.sin(frame * deg);
          // scale all
          sa[0] = sa[0] + Math.sin(frame * deg);
          sa[5] = sa[5] + Math.sin(frame * deg);
          // translate x
          tx[13] = tx[13] + Math.sin(frame * deg) * frame;
          // translate y
          ty[14] = ty[14] + Math.sin(frame * deg) * frame;
          // translate z
          tz[15] = tz[15] + Math.sin(frame * deg) * 1;
          // translate all
          ta[13] = ta[13] + -Math.sin(frame * deg) * frame;
          ta[14] = ta[14] + Math.sin(frame * deg) * frame * .5;
          ta[15] = ta[15] + Math.sin(frame * deg) * .5;
//          sa[10] = sa[10] + Math.sin(frame * deg);
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(m, xr) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(m, yr) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(m, zr) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(m, sx) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(m, sy) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(m, sa) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(m, ty) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(m, ta) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(matrix3dMultiply(m, xr), yr) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(matrix3dMultiply(m, xr), zr) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(matrix3dMultiply(m, zr), yr) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(matrix3dMultiply(matrix3dMultiply(m, xr), yr), zr) + ')';
//          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(matrix3dMultiply(matrix3dMultiply(matrix3dMultiply(m, xr), yr), zr), sa) + ')';
          img.style['-webkit-transform'] = 'matrix3d(' + matrix3dMultiply(matrix3dMultiply(matrix3dMultiply(matrix3dMultiply(matrix3dMultiply(m, xr), yr), zr), sa), ta) + ')';
          console.log(img.style['-webkit-transform']);
          frame = frame + 1;
        }else{
          window.clearInterval(intervalId);
          frame = 0;
          console.log('end');
        }
      }, 1000/60);
    }
  };
  if('matrix3d' === m.substr(0, 8)){
    m = m.substr(8).replace(/[\(\)]/g, '').split(',');
    for(var i = 0, ml = m.length; i < ml; i++){
      m[i] = +m[i];
    }
  }else if('matrix(' === m.substr(0, 7)){
    m = m.substr(6).replace(/[\(\)]/g, '').split(',');
    for(var i = 0, ml = m.length; i < ml; i++){
      m[i] = +m[i];
    }
    m = [
    m[0], m[1], 0, 0,
    m[2], m[3], 0, 0,
    m[4], m[5], 1, 0,
    0, 0, 0, 1
    ];
  }else{
    m = baseMatrix.slice(0);
  }
  console.log(m);
  img.addEventListener('click', animate.init, false);
}(this, document));
