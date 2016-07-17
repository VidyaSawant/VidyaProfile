$(window).load(function() 
    {     
	   $("#loading-center").click(function() 
            {
	           $("#loading").fadeOut(5000);
	        })		
    });
$(window).load(function() 
    {
        $("#loading").fadeOut(5000);
    })
   
     
$(document).ready(function() 
    {
        var active1 = false;
        var active2 = false;
        var active3 = false;
        var active4 = false;
        var active5 = false;
        var active6 = false;

 $('.parent2').on('mousedown touchstart',function()
            {
                document.getElementById("frame1").style.display="none"; 
                if (!active1) $(this).find('.test1').css({'background-color': '#69FAC2', 'transform': 'translate(0px,125px)'});
                else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
                if (!active2) $(this).find('.test2').css({'background-color': '#69FAC2', 'transform': 'translate(70px,95px)'});
                else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
                if (!active3) $(this).find('.test3').css({'background-color': '#69FAC2', 'transform': 'translate(105px,35px)'});
                else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
                if (!active4) $(this).find('.test4').css({'background-color': '#69FAC2', 'transform': 'translate(105px,-35px)'});
                else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
                if (!active5) $(this).find('.test5').css({'background-color': '#69FAC2', 'transform': 'translate(70px,-95px)'});
                else $(this).find('.test5').css({'background-color': 'silver', 'transform': 'none'});
                if (!active4) $(this).find('.test6').css({'background-color': '#69FAC2', 'transform': 'translate(0px,-125px)'});
                else $(this).find('.test6').css({'background-color': 'silver', 'transform': 'none'});
            
                active1 = !active1;
                active2 = !active2;
                active3 = !active3;
                active4 = !active4;
                active5 = !active5;
                active6 = !active6; 
            });
    });
      
      
      
 $(document).ready(function()
     {
        $('#test6').hide();
     
            {
                $('.test6').mouseup(function()
                    {
                        var div = $('#test6').toggle(1000)
                            {
                                $('#test5').hide('slow');
                                $('#test4').hide('slow');
                                $('#test3').hide('slow');
                                $('#test2').hide('slow');
                                $('#test1').hide('slow');
                                div.animate({ right: "190px" }, 'slow');
                                div.animate({fontSize: '50em'}, 3000); 
                            }
                    });
         
         
            }
      });
      
  $(document).ready(function()
     {
        $('#test5').hide();
            {
                $('.test5').mouseup(function()
                    {
                        var div = $('#test5').toggle(2000)
                            {
                                $('#test6').hide('slow');
                                $('#test4').hide('slow');
                                $('#test3').hide('slow');
                                $('#test2').hide('slow');
                                $('#test1').hide('slow');
                                div.animate({ right: "100px" }, 'slow');
                                div.animate({fontSize: '5em'}, 'slow'); 
                            }
                    });        
            }
     });
       
  $(document).ready(function()
     {
        $('#test2').hide();
            {
                $('.test2').mouseup(function()
                    {
                        var div = $('#test2').toggle(2000)
                            {
                                $('#test5').hide('slow');
                                $('#test4').hide('slow');
                                $('#test3').hide('slow');
                                $('#test6').hide('slow');
                                $('#test1').hide('slow');
                                div.animate({right: "175px" }, 'slow');
                                div.animate({fontSize: '5em'}, 'slow'); 
                            }
                    });        
            }
     });
                   
  $(document).ready(function()
     {
        $('#test4').hide();
            {
                $('.test4').mouseup(function()
                    {
                        var div = $('#test4').toggle(2000)
                            {
                                $('#test5').hide('slow');
                                $('#test6').hide('slow');
                                $('#test3').hide('slow');
                                $('#test2').hide('slow');
                                $('#test1').hide('slow');
                                div.animate({right: "170px" }, 'slow');
                                div.animate({fontSize: '5em'}, 'slow'); 
                            }
                    });        
            }
      });

  $(document).ready(function()
      {
         $('#test1').hide();
            {
                $('.test1').mouseup(function()
                    {
                        var div = $('#test1').toggle(2000)
                            {
                                $('#test5').hide('slow');
                                $('#test4').hide('slow');
                                $('#test3').hide('slow');
                                $('#test2').hide('slow');
                                $('#test6').hide('slow');
                                div.animate({right: "190px" }, 'slow');
                                div.animate({fontSize: '5em'}, 'slow'); 
                            }
                    });
            }
        });
       
   $(document).ready(function()
        {
            $('#test3').hide();
                {
                    $('.test3').mouseup(function()
                        {
                            var div = $('#test3').toggle(2000)
                                {
                                $('#test5').hide('slow');
                                $('#test4').hide('slow');
                                $('#test6').hide('slow');
                                $('#test2').hide('slow');
                                $('#test1').hide('slow');
                                    div.animate({right: "180px" }, 'slow');
                                    div.animate({fontSize: '5em'}, 'slow'); 
                                }
                        });        
                }
        });
  
   $( document ).ready(function()
        {
    //fade in boxes
            $('.box').each(function(i) 
                {
                    $(this).delay((i++) * 4000).fadeTo(4000, 1); 
                })
            .css("display","inline-block");

    //randomize bg color within green-blue hues
            $(".box").each(function()
                {
                var hue = 'rgb(' + (Math.floor((100-050)*Math.random()) + 50) + ',' + (Math.floor((150-100)*Math.random()) + 80) + ',' + (Math.floor((200-150)*Math.random()) + 100) + ')';
                    $(this).css("background-color", hue);
                });
        });


//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

function myFunction()
{ 
	document.getElementById("frame1").style.display="none"; 
	document.getElementById("mainFrameTwo").style.display="block"; 
}