let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let i = 0; i < numbers.length; i +=1){  //percorera todo o array
    if (numbers[i] > maior){         //vai comparar os numeros
        maior = numbers[i];     //vai pegar o maior e atribuir a let
    }
};
console.log(maior);