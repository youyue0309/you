$(function(){
    $('#jnBrandList').find('img').hover(function(){
        $(this).addClass('imageMask imageOver');
    },function(){
        $(this).removeClass('imageOver imageMask');
    })
})