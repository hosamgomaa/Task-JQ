


$(document).ready(function(){
    
    const eventDate="2021-10-3";
    const maxChars=100;

    let x=$('.sideNav').innerWidth();
    $('.sideNav').css('left',`-${x}`)


    $(".sideNav a").click(function(){

   var offset = $($(this).attr("href")).offset();
   var t = offset.top;
   $("html,body").animate({scrollTop:t},1500);

   
    
    });


setInterval(function(){
    const total = Date.parse(eventDate) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    $("#day").html(days+" D");
    $("#hour").html(hours+" H");
    $("#minute").html(minutes+" M");
    $("#second").html(seconds+" S");
},1000);




$("#exampleTextarea1").keyup(function () { 

  let len=  maxChars-this.value.length

    $("#remainingChars").html(len<0? "your available character finished":len);
});

    $('#singers h2').click(function(){

         $(this).next().slideToggle(500);
         $("#singers p").not($(this).next()).slideUp(500);

    });
    $('#open').click(function(){
        $('.sideNav').animate({left: '0'})
        $('.content').animate({'marginLeft':'300'});
        $('#open').animate({'marginLeft':`${x-30}`});

    });
    $('#closeSidenav').click(function(){
        $('.sideNav').animate({left: `-${x}`})
        $('.content').animate({'marginLeft':'0'});
        $('#open').animate({'marginLeft':`0`});
    });


})
