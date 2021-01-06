$(function(){

    //this area for jquery code//

    
    $(".green-box").fadeOut(4000);
    $(".blue-box").fadeOut(5000);

    $(".red-box").fadeIn(3000);
    $(".geen-box").fadeIn(4000);
    $(".blue-box").fadeIn(3000);

    $(".red-box").fadeTo(5000,0.2);

    $(".red-box").fadeToggle(3000);//
   


/////////hide and show the box////////////
    $(".green-box").hide();//hide the box//
    $(".green-box").show();//it show the hidden box//


//////////////slide-up and slide down///////////////////
    $(".green-box").slideUp(2000);
    $(".green-box").slideDown(2000);

    $("h1").slideUp(2000);

/////////animation feature////////////////////////

    $(".blue-box").animate({    ///thuis way or as mentioned in html both way we can give margin//
        "margin-left":"200px"
    },2000);
    //or//
    $(".blue-box").animate({
        "margin-left":"-150px"//because in html style="margin-left=150px" is given aready than we can bring that box to original place//
    },2000);//2000 is the time//
});