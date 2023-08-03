//variable and Block scope

//scope -> Area where variable is defined or accessible

let score = 90;

if(true){
    //score = 60;

    let score = 50; //Block Scope

    console.log(score); //nearest value kbhi bhi leta hai

}
console.log(score);