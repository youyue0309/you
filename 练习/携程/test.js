// var a = [1, 2, 6, 3, 4, 3];
// var aa = [1,2,4];
// function fn(arr) {
//     if (arr.length > 1) {
//         var c = [];
//         for (var i = 0; i < arr.length; i++) {
//             for (var j = 0; j < arr.length; j++) {
//                 if (i != j) {
//                     var sum = arr[i] + arr[j];
//                     c.push(sum);
//                 } 
//             }
//         }
//         var b = Array.from(new Set(c));
//         console.log(b);
//         for(var m = 0;m < arr.length;m++){
//             for(var n = 0;n < b.length;n++){
//                 if(arr[m]==b[n]){
//                     console.log('true');
//                     return;
//                 }
//             }
//         }
//         console.log('false');
//         return;
//     }
//     console.log('error');
// }
// fn(a);
// fn(aa);
function SumNum(arr){
    var key = new Array(101);
    var value = new Array(101);
    var length=0;
    for(var i=0;i<arr.length;i++){
        if(length==0){
            key[0]=arr[i];
            value[0]=1;
            length++;
        }else{
            var exist = false;
            for(var j=0;j<length;j++){
                if(arr[i]==key[j]){
                    value[j]++;
                    exist = true;
                    break;
                }
            }                                                                       
            if(!exist){
                key[length]=arr[i];
                value[length]=1;
                length=length+1;
                console.log(arr[i]);
                console.log('length='+length);
            }
        }
        console.log('i='+i+':length='+length);
    }
    
    var anspos = 0,v=0;
    for(var i=0;i<length;i++){
        if(value[i]>v){
            anspos = i;
            v = value[i];
        }
    }
    console.log('anspos='+anspos);
    console.log(length);
    return key[anspos];
}

var arr = [1,2,2,2,3,4,4,5];

console.log(SumNum(arr));