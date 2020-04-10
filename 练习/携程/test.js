var a = [1, 2, 6, 3, 4, 3];
var aa = [1,2,4];
function fn(arr) {
    if (arr.length > 1) {
        var c = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (i != j) {
                    var sum = arr[i] + arr[j];
                    c.push(sum);
                } 
            }
        }
        var b = Array.from(new Set(c));
        console.log(b);
        for(var m = 0;m < arr.length;m++){
            for(var n = 0;n < b.length;n++){
                if(arr[m]==b[n]){
                    console.log('true');
                    return;
                }
            }
        }
        console.log('false');
        return;
    }
    console.log('error');
}
fn(a);
fn(aa);