$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.navbar .menu li a').click(function(){
    
        $('html').css("scrollBehavior", "smooth");
    });
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["computer science student"],
        typeSpeed: 100,
        loop: false
    });
});

$(function(){
$('.chart').easyPieChart({
    size:160,
    barColor:"crimson",
    scaleLength: 0,
    lineWidth: 15,
    lineCap:"Circle",
    animate:2000,
})
})
