$(document).ready(function(){
    $('.thumb a').click(function(e){
        e.preventDefault();
        $('.imgBox img').attr("src", $(this).attr("href"));
    })
});