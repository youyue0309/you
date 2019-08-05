$(function(){
    $('.nav').children().hover(function(){
        $(this).find('.jnNav').show();
    },function(){
        $(this).find('.jnNav').hide();
    })
})