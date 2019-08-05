$(function(){
    $('.search input').focus(function(){
        $('.search input').val("");
    });
    $('.search input').blur(function(){
        $('.search input').val("请输入商品名称");
    });
})
