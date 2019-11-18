function havelunch(food,drink,callback){
    console.log("having lunch of" + food + " " + drink);
    if(callback && typeof(callback)==='function'){
        setTimeout(function(){
            callback();
        },5000)
    }
}

havelunch('toast','coffee',function(){
    console.log("lunch finished");
})