// var colors = ['blue', 'green', 'white", "yellow', 'orange', 'red'],
//          pieces = document.getElementsByClassName('piece');
// function mx(i, j) {
//     return ([2, 4, 3, 5][j % 4 |0] + i % 2 * ((j|0) % 4*2+3)+2 *(i/2 |0)) % 6;
//       }
// function getAxis (face) {
//     return String.fromCharCode('X'.charCodeAt(0) + face / 2); // X, Y or Z
//       }
// function assembleCube() {
//    function moveto(face) {
//       id = id+ (1 << face);
//       pieces[i].children[face].appendChild(document.createElement('div'))
//             .setAttribute('class', 'sticker' + colors [face]);
//             return 'translate' + getAxis (face) + '('+ (face% 2*4-2) + 'em)'; }

//    for (var id, x, i= 0; id= 0, i<26; i++) {
//          x= mx(i,i% 18);
//          pieces[i].style.transform = 'rotateX(0deg)' + moveto(i % 6) + (i > 5? moveto(x) + (i >17 ? moveto(mx(x, x+2)) : ''): '';
//          pieces[i].setAttribute('id', 'piece' + id); }}
(function()
   { 
      let scale = 0;
      let supportPassive = false;
      try {
          window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
              get: function () { supportPassive = true; }
          }));
      } catch (e) {}
  
      const wheelOpt = supportPassive ? { passive: false } : false;
      const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  
      window.addEventListener('DOMMouseScroll', handler, false);
      window.addEventListener(wheelEvent, handler, wheelOpt);
      document.addEventListener('gesturechange', pinchHandler, false);
  
      function pinchHandler(event) {
          event.preventDefault();
  
          if (event.scale < 1.0) {
              scale -= event.scale;
          } else if (event.scale > 1.0) {
              scale += event.scale * .1;
          }
  
          render();
      }
  
      function handler(event) {
          event.preventDefault();
          scale -= event.deltaY * 0.1;
          render();
      }
  
      function render() {
          scale = Math.max(scale, 0);
  
          const factor = 4 + scale;
          const cornerFactor = 4 + scale * .4;
          const edgeFactor = 4 + scale * .6;
          const rotation = scale;
  
          document.querySelector('.cube.middle.white').style.transform = 'translateY(' + factor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 2 + 'deg)';
          document.querySelector('.cube.middle.red').style.transform = 'translateZ(' + factor + 'em) rotate3d(1, 1, 1, ' + rotation * 5 + 'deg)';
          document.querySelector('.cube.middle.green').style.transform = 'translateX(' + factor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 3 + 'deg)';
          document.querySelector('.cube.middle.orange').style.transform = 'translateZ(' + factor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 7 + 'deg)';
          document.querySelector('.cube.middle.blue').style.transform = 'translateX(' + factor + 'em) rotate3d(1, 1, 1, ' + rotation + 'deg)';
          document.querySelector('.cube.middle.yellow').style.transform = 'translateY(' + factor + 'em) rotate3d(1, 1, 1, ' + rotation * 4 + 'deg)';
          document.querySelector('.cube.corner.corner-white-red-green').style.transform = 'translateX(' + cornerFactor * -1 + 'em) translateY(' + cornerFactor * -1 + 'em) translateZ(' + cornerFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 8 + 'deg)';
          document.querySelector('.cube.corner.corner-white-green-orange').style.transform = 'translateX(' + cornerFactor * -1 + 'em) translateY(' + cornerFactor * -1 + 'em) translateZ(' + cornerFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 10 + 'deg)';
          document.querySelector('.cube.corner.corner-white-orange-blue').style.transform = 'translateX(' + cornerFactor + 'em) translateY(' + cornerFactor * -1 + 'em) translateZ(' + cornerFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 3 + 'deg)';
          document.querySelector('.cube.corner.corner-white-blue-red').style.transform = 'translateX(' + cornerFactor + 'em) translateY(' + cornerFactor * -1 + 'em) translateZ(' + cornerFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 20 + 'deg)';
          document.querySelector('.cube.corner.corner-yellow-red-green').style.transform = 'translateX(' + cornerFactor * -1 + 'em) translateY(' + cornerFactor + 'em) translateZ(' + cornerFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 9 + 'deg)';
          document.querySelector('.cube.corner.corner-yellow-green-orange').style.transform = 'translateX(' + cornerFactor * -1 + 'em) translateY(' + cornerFactor + 'em) translateZ(' + cornerFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 5 + 'deg)';
          document.querySelector('.cube.corner.corner-yellow-orange-blue').style.transform = 'translateX(' + cornerFactor + 'em) translateY(' + cornerFactor + 'em) translateZ(' + cornerFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 10 + 'deg)';
          document.querySelector('.cube.corner.corner-yellow-blue-red').style.transform = 'translateX(' + cornerFactor + 'em) translateY(' + cornerFactor + 'em) translateZ(' + cornerFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 2 + 'deg)';
          document.querySelector('.cube.edge.edge-white-red').style.transform = 'translateY(' + edgeFactor * -1 + 'em) translateZ(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 18 + 'deg)';
          document.querySelector('.cube.edge.edge-white-green').style.transform = 'translateX(' + edgeFactor * -1 + 'em) translateY(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 12 + 'deg)';
          document.querySelector('.cube.edge.edge-white-blue').style.transform = 'translateX(' + edgeFactor + 'em) translateY(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 2 + 'deg)';
          document.querySelector('.cube.edge.edge-white-orange').style.transform = 'translateY(' + edgeFactor * -1 + 'em) translateZ(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation + 'deg)';
          document.querySelector('.cube.edge.edge-red-green').style.transform = 'translateX(' + edgeFactor * -1 + 'em) translateZ(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 7 + 'deg)';
          document.querySelector('.cube.edge.edge-green-orange').style.transform = 'translateX(' + edgeFactor * -1 + 'em) translateZ(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 11 + 'deg)';
          document.querySelector('.cube.edge.edge-orange-blue').style.transform = 'translateX(' + edgeFactor + 'em) translateZ(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 3 + 'deg)';
          document.querySelector('.cube.edge.edge-blue-red').style.transform = 'translateX(' + edgeFactor + 'em) translateZ(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 10 + 'deg)';
          document.querySelector('.cube.edge.edge-yellow-red').style.transform = 'translateY(' + edgeFactor + 'em) translateZ(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 24 + 'deg)';
          document.querySelector('.cube.edge.edge-yellow-green').style.transform = 'translateX(' + edgeFactor * -1 + 'em) translateY(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 4 + 'deg)';
          document.querySelector('.cube.edge.edge-yellow-orange').style.transform = 'translateY(' + edgeFactor + 'em) translateZ(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 12 + 'deg)';
          document.querySelector('.cube.edge.edge-yellow-blue').style.transform = 'translateX(' + edgeFactor + 'em) translateY(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 6 + 'deg)';
      }
