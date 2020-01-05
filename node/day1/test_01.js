// var str = "wangyibo";
// console.log(str);

console.log("start");
for(var i=0;i<5;i++){
    setTimeout(function(){
        var i = 0;
        console.log(i);
    },0)
}
console.log("end");
//start end 5 5 5 5 5

//setTimeout定时是不是真正的定时

/*1.先执行同步代码
2.异步代码 -->Event Loop
3.再执行同步代码
4.触发异步代码（1）当前线程空闲 （2）达到触发条件*/


// 当前线程空闲 同步代码全部执行完毕之后 （同步代码和同步跟随代码）
// 达到触发条件 时间I/O 磁盘I/O 网络I/O 自定义触发事件 emit addListener

/*
new Promise((resolve,reject)=>{
    console.log(123);
    resolve();
    console.log(456);
})*/

// $.post("/check",{id:1},function(data){
//     console.log(data);
// },'json');   JSON.parse

// Axios.post();  qs.stringfy  qs.parse  序列化 反序列化  

// 同步程序 异步程序

//content-type application/json ---JSON.parse application/form-data qs.parse