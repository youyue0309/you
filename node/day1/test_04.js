//node 写webServer php--Apache/Ngnix  java/Tamcat resin Weblogic
//commonJS --require exports module.exports
//node 写后端代码 把文件加载成模块

//JS如何完成继承的 ES6 extends ES5 原型链
//JS 如何完成封装的 private public protected

function Demo(){
    // var b = 456;
    this.a = 123;
    this.bb = function(){
        console.log(123);
    }
    // console.log(b);
}

Demo.prototype.write = function(){
    console.log(789);
}
var demo = new Demo();
demo.write();
console.log(demo);
// console.log(Demo.prototype);
// console.log(demo.__proto__);
console.log(Demo.prototype == demo.__proto__);


// module.exports = Demo;
// Demo();

// var demo = new Demo();
// console.log(demo);
// demo.bb();
// console.log(demo.a);
// console.log(demo.b);


/*
<script src='1.js' async></script>
<script src='2.js'></script>
<script src='3.js'></script>   require.js AMD CMD require define sea.js
commonJS

require(['module1','module2'],function(define){

})

1.js
var a=123;

2.js
var c=a+2;
console.log(c);*/