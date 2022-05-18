$(document).ready(function(){
  //슬라이드
  let n = 0;
  function fadeInOut(){
    $('.slide li').stop().fadeOut();
    if(n==3){n=0;
    }else{
      n++;
    }
    $('.slide li').eq(n).stop().fadeIn();
  }
  let Timer = setInterval(fadeInOut,3000);
});