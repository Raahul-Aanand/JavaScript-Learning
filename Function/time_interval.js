//SetTimeout and SetInterval

//setTimeout -> Run function "once" after "interval" of time

//setInterval -> Run function repeatedly,starting after the interval of time


//setTimeOut

// setTimeout(func|Code,delay,arg1,arg2 . . . )

// setTimeout(function greeting(){
//   console.log("Welcome to Our Home Baby");
// },1000); //here 5000 = 5sec


function greeting(name){
    console.log(`Welcome !! ${name} to our home`);
}
//setTimeout(greeting,5000,"Rahul");

//setInterval(func|Code,delay,arg1 .. )
setInterval(greeting,1000,"JohnySins")