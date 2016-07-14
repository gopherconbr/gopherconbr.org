$(document).ready(function(){
    checkNavScrolled();
    
    $(window).scroll(function(){
      checkNavScrolled();
    })
});

function checkNavScrolled() {
    if($(window).scrollTop() > $("#top-nav").height()){
        $("#top-nav").addClass('scrolled');  
    } else {
        $("#top-nav").removeClass('scrolled');  
    }
}
