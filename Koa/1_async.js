async function timeout(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(1);
            resolve();
        },2000);
    });
}

async function fn(){
    await timeout();
    console.log(2);
}

fn();



// console.log(timeout());
// timeout().then((result)=>{
//     console.log(result);
// });
// console.log('2');