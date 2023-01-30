// 55 to 94 er jugfol er shomoshti ber koro

// var firstNum = parseFloat(prompt("please eanter a number :"))
// var secondNum = parseFloat(prompt("please enter second number :"))

// sum = 0;
// for(var i= firstNum; i <= secondNum; i++){
    
//     sum= sum+i;

// }
// document.write("jugfal =" + sum);

var sum = 0;
for (var i =1; i <= 100; i++){
    if (i%3==0 && i%5==0){
        sum =sum+i;
    }
}
document.write(sum);
