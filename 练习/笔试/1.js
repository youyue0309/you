// function fn(n){
//     var t = parseInt(n);
//     var a = [1,1];
//     for(var i = 2;i<51;i++){
//         var sum = 0;
//         sum = a[i-1] +a[i-2];
//         a.push(sum);
//     }
//     print(a[t]);
// }
// var m = readline();
// if(m){
//     fn(m);
// }
// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// const lines = [];
// var arr = [];
// var key = '';
// rl.on('line', function(line){
//     lines.push(line);
//     if(lines.length == 2){
//         arr = lines[0];
//         key = parseInt(lines[1]);
//         var count = 0;
//         for(var i = 0;i <arr.length;i++ ){
//             if(arr[i] == key){
//                 count = count +1;
//             }
//         }
//         console.log(count);
//     }

    
// });
// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var arr = [];
// rl.on('line', function(line){
//    var arr = line.split(' ');
//    for(var i = 0;i <arr.length;i++ ){
//        arr[i] = parseInt(arr[i]);
//        arr[i] = arr[i]*arr[i];
//    }
//    console.log(arr);
// });
// rl.on('close',function(){
//     process.exit();
// })

var count = 0;
var x = 9999;
while(x){
    count++;
    x = x&(x-1);
}
console.log(count);