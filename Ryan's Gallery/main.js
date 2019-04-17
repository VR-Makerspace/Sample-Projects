AFRAME.registerComponent('school-playground', {
  init: function () {
    var sceneEl = document.querySelector('a-scene'); 
    var boxEl = sceneEl.querySelector('a-box')
    var boxState = 0;
   
    boxEl.addEventListener('click', function () {
      if (boxState == 0) {
        boxEl.setAttribute('color', 'blue');  
        boxState = 1;
      } else {
        boxEl.setAttribute('color', 'red');  
        boxState = 0;
      }
    });
  }
});