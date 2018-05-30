$(document).ready(function(){
    
$('.js-section-features').waypoint(function(direction){

    if(direction=="down"){
       $('nav').addClass('sticky');
    }else{
       
        $('nav').removeClass('sticky');
    }}, {
  offset: '25px;'
});

//scrolling nav item

$(document).ready(function() {
   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
       
	var target = $(this).attr("href"); //Get the target
			
	// perform animated scrolling by getting top-position of target-element and set it as scroll target
	$('html, body').stop().animate({ scrollTop: $(target).offset().top},500, function() {
	     location.hash = target;  //attach the hash (#jumptarget) to the pageur
	});
			
	return false;
   });
});
  
    
    $('.js-wp-1').waypoint(function(direction){

       $('.js-wp-1').addClass('animated fadeIn');},
        
    {offset: '50%;'
});

        $('.js-wp-2').waypoint(function(direction){

       $('.js-wp-2').addClass('animated fadeInUp');},
        
            {offset: '50%;'
        });

    
          $('.js-wp-3').waypoint(function(direction){

       $('.js-wp-3').addClass('animated fadeIn');},
        
            {offset: '50%;'
        });
    
          $('.js-wp-4').waypoint(function(direction){

       $('.js-wp-4').addClass('animated pulse');},
        
            {offset: '50%;'
        });
    var map=new GMaps({
  div: '#map',
  lat: 22.4765597,
  lng: 91.5637612,
  zoom:10
});
    
    map.addMarker({
  lat: 22.3965597,
  lng:91.7837612,
  title: 'chandgaon',
    infoWindow: {
  content: '<p>our headquarter</p>'
}
});
  
        
});    



