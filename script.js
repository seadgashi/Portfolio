$(document).ready(function() {
    //nav bar
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
// Enter in any string, and watch it type at the speed you've set
    var typed = new Typed(".typing", {
        strings: ["computer science student"],
        typeSpeed: 100,
        loop: false
    });
});
//  Progress Bar 
$(function() {
    $('.chart').easyPieChart({
        size: 160,
        barColor: "crimson",
        scaleLength: 0,
        lineWidth: 15,
        lineCap: "Circle",
        animate: 2000,
    })
})