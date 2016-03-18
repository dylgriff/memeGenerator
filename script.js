$(document).ready(function(){
    
//    setInterval(changy, 1500);
//    
//    function changy() {
//        $("html").css( "transition", "500ms");
//        $("html").css("backgroundColor","#434343");
//        $("body").css( "transition", "500ms");
//        $("body").css("backgroundColor","#434343");
//    }

    
    $(".images img").on( "click", changeImg);
    
    
    function changeImg (){
        var att = $(this).attr('src');
        $("#bigImg").attr('src', att).hide().fadeIn();
        
    }
    
    $('input[type="submit"]').on("click", function(){
        event.preventDefault();
    });
    
});