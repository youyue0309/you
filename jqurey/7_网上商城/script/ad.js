$(function(){
    var now = 0;
    //console.log($('#jnImageroll>a').children().eq(0).get(0))
    for(var i=1;i<=4;i++){
        $('#jnImageroll>a').children().eq(i).hide();
    }
    /* $('#jnImageroll>a').children().eq(4).hide();
    $('#jnImageroll>a').children().eq(0).show(); */
    var test = setInterval(function(){
        now++;
        if(now==5){
            now=0;
        }
        $('#jnImageroll>a').children().eq(now).show().siblings().hide();
        $('#jnImageroll div').children().eq(now).addClass('chos').siblings().removeClass('chos');
     },2000);
    $('#jnImageroll').hover(function(){
        clearInterval(test);
    },function(){
        test = setInterval(function(){
            now++;
            if(now==5){
                now=0
            }
            $('#jnImageroll>a').children().eq(now).show().siblings().hide();
            $('#jnImageroll div').children().eq(now).addClass('chos').siblings().removeClass('chos');
        },2000)
    })
    $('#jnImageroll div').children().hover(function(){
        var index = $(this).index();
        $(this).addClass('chos').siblings().removeClass('chos');
        $('#jnImageroll>a').children().eq(index).show().siblings().hide();
        now=index;
        //console.log($('#jnImageroll>a').get(0));
    })
})