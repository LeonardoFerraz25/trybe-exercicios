let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 13];
//let numbers = [70, 8, 100, 2];
let impar = 0;

for (let i = 0; i < numbers.length; i +=1 ){
    if(numbers[i]%2 != 0){
        impar += 1;
    }
}
if(impar == 0){
    console.log("nenum valor impar")
}else{
    console.log(`${impar} numeros impares`);
}