//the id of the sections
var secOne = document.getElementById('secOne');
var secOneNxt = document.getElementById('secOneNxt');
var secTwo = document.getElementById('secTwo');
var secThree = document.getElementById('secThree');

//other stuffs
var audio = document.getElementById('audio');

secOne.style.display = 'block';
secOneNxt.style.display = 'none';
secTwo.style.display = 'none';
secThree.style.display = 'none';


//the id of the animated image
var open = document.getElementById('present');

//the function that changes the animated image state
open.addEventListener('click', function open(){
    secOne.style.display = 'none';
    secOneNxt.style.display = 'block';
    		var x = 10;
      
      var myInterval = setInterval(function() {
         x -= 1;
         document.getElementById("cD").innerHTML = x;
      }, 1000);
    var count1 = setTimeout(function() {
    				secOneNxt.style.display = 'none';
        secTwo.style.display = 'block';
        audio.play();
       var count2 = setTimeout(function() {
        secTwo.style.display = 'none';
        secThree.style.display = 'block';
    }, 50000);
    }, 10000);
    stopInterval()
});





      
      function stopInterval() {
         clearInterval(myInterval);
      }