/* =============JQ============*/
$(document).ready(function(){
      
      alert("hello");
      //counterup
      $('.counter').counterUp({
      	delay:10,
      	time:1000
      });
      $(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });
});
 /*     $('.counter').counterUp({
    delay: 10,
    time: 1000
});*/
 

})