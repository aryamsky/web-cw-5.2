let food = ["pizza" , "pasta" , "popcorn"]
console.log(food)

let choice = prompt("choose a dish");
if(choice == 1){
    console.log("you chose pizza")
}
if(choice ==2){
    console.log("you chose pasta")
}
if(choice==3){
    console.log("you chose popcorn")
}
let choicee = prompt("pick a dish")
switch(choicee){
    case"1":
    console.log("you chose pizza");
    break;
    case"2":
    console.log("you chose pasta");
    break;
    case"3":
    console.log("you chose popcorn");

}

// التمرين الثاني
let numberone = prompt("اختر رقم")

let numbertwo = prompt("اختر رقم اخر")

let method = prompt("اختر عمليه حسابيه")

if(method == "*" ){
    console.log( numberone * numbertwo);
}
if(method == "/"){
    console.log( numberone / numbertwo);
}
if(method == "-"){
    console.log( numberone - numbertwo);
} else{
    console.log("هناك شيء خاطئ");
}

let age="15"

if( age < 10){
    console.log("انت في المدرسه الابتدائيه");
}


if( age > 14 ){
    console.log("انت في المدرسه الثانويه");
}

