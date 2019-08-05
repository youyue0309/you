$(function(){
    $('#skin').children().on('click',function(){
        var index = $(this).index();
        var skin = getCookie('skin');
        index=skin*1;
        $(this).addClass('selected').siblings().removeClass('selected');
        if($(this).index()==0){
            $('.mainNav').css('background-color','#4A4A4A');
            $('#jnCatalog h2').css('background-color','#6E6E6E');
            setCookie('skin','0',30);
        }
        if($(this).index()==1){
            $('.mainNav').css('background-color','#BE46D8');
            $('#jnCatalog h2').css('background-color','#D49AE1');
            setCookie('skin','1',30);
        }
        if($(this).index()==2){
            $('.mainNav').css('background-color','#E44072');
            $('#jnCatalog h2').css('background-color','#F296B2');
            setCookie('skin','2',30);
        }
        if($(this).index()==3){
            $('.mainNav').css('background-color','#37C7D4');
            $('#jnCatalog h2').css('background-color','#98E0E6');
            setCookie('skin','3',30);
        }
        if($(this).index()==4){
            $('.mainNav').css('background-color','#F9AF2A');
            $('#jnCatalog h2').css('background-color','#FFCF78');
            setCookie('skin','4',30);
        }
        if($(this).index()==5){
            $('.mainNav').css('background-color','#B1D410');
            $('#jnCatalog h2').css('background-color','#CDE074');
            setCookie('skin','5',30);
        }
        
    });
    
    function setCookie(attr,value,day){
            var str="";
            str += attr+"="+value+";";
            if(day){
                var date = new Date();
                var today = date.getDate();
                date.setDate(today+day);
                str += "expires="+date;
            }
            document.cookie = str;
    }
    function getCookie(key){
            var str=document.cookie;
            var arr=str.split('; ');
            for(var i=0;i<arr.length;i++){
                var arr1=arr[i].split('=');
                if(arr1[0]==key){
                    return arr1[1];
                }
                return "";
            }
    }
});