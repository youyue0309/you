$(function(){
    $('#jnBrandTab li a').on('click',function(){
        var index = $(this).parent().index();
        //console.log(index);
        $(this).parent().addClass('chos').siblings().removeClass('chos');
        var oneWidth = $('#jnBrandList ul li').outerWidth()*4;
        //console.log(oneWidth);
        $('#jnBrandList').css({
            position:"absolute",
            top:0,
            left:-index*oneWidth+"px",
            transition: "left 1s linear"
        })
    })
})