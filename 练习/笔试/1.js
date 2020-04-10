function fn(n){
    var t = parseInt(n);
    var a = [1,1];
    for(var i = 2;i<51;i++){
        var sum = 0;
        sum = a[i-1] +a[i-2];
        a.push(sum);
    }
    print(a[t]);
}
var m = readline();
if(m){
    fn(m);
}