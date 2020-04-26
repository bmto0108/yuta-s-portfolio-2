$(function(){

  $('.header').slideDown(1000);

  $('.top > p').slideDown(1200);
  $('.top > h1').slideDown(1300);  
  

  $('.header-right > li').mouseover(function(){
      $(this).removeClass('header-right-li-1').addClass('header-right-li-2')
    });
  $('.header-right > li').mouseout(function(){
      $(this).removeClass('header-right-li-2').addClass('header-right-li-1')
  });  
    

  $('.twitter').hover(
    function(){
      $(this).children('img').animate({
        'width':'40px'
      }, 250);
    },
    function(){
      $(this).children('img').animate({
        'width':'32px'
      }, 250);
    }
  );
  $('.instagram').hover(
    function(){
      $(this).children('img').animate({
        'width':'40px'
      }, 250);
    },
    function(){
      $(this).children('img').animate({
        'width':'32px'
      }, 250);
    }
  );
  $('.works-item').hover(
    function(){
      $(this).css('opacity','1')
    },
    function(){
      $(this).css('opacity','0.7')
    }
  );
  
  
  $('.header-right a').click(function(){
    var id = $(this).attr('href')
    var position = $(id).offset().top;
    
    $('html, body').animate({
      'scrollTop': position
    }, 500 );
    
  });
  
  $('.active-text-1').waypoint(function(direction){
    var activePoint = $(this.element);
    //scroll down
    if (direction === 'down') {
        activePoint.addClass('active');
    }
    else{
        activePoint.removeClass('active');
    }
  },{offset : '70%'});
 
  $('.active-img-1').waypoint(function(direction){
      var activePoint = $(this.element);
      //scroll down
      if (direction === 'down') {
          activePoint.addClass('active');
      }
      else{
          activePoint.removeClass('active');
      }       
  },{offset : '70%'});
  $('.active-text-2').waypoint(function(direction){
    var activePoint = $(this.element);
    //scroll down
    if (direction === 'down') {
        activePoint.addClass('active');
    }
    else{
        activePoint.removeClass('active');
    }
  },{offset : '70%'});
 
  $('.active-img-2').waypoint(function(direction){
      var activePoint = $(this.element);
      //scroll down
      if (direction === 'down') {
          activePoint.addClass('active');
      }
      else{
          activePoint.removeClass('active');
      }       
  },{offset : '70%'});
});
