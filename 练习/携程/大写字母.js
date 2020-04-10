var a = 'My name is x';
function fn(str){
    var arr = [];
    arr = str.split(" ");
    for(var i=0;i<arr.length;i++){
        var start = arr[i].charAt(1);
        start = start.toUpperCase();
        arr[i] = arr[i].replace(arr[i].charAt(1),start);
    };
    str = arr.join(" ");
    console.log(str);
}
fn(a);