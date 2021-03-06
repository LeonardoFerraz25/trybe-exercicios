const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const container = document.querySelector('.container')
const item = document.querySelectorAll('li');
// 1. Copie esse arquivo e edite apenas ele;

// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.

// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

item[0].addEventListener("click", addClass);
item[1].addEventListener("click", addClass);
item[2].addEventListener("click", addClass);

function addClass(origem){
    origem.target.className = "tech"; 
    
    let primeiro = firstLi.classList.contains("tech");
    let segundo = secondLi.classList.contains("tech");
    let terceiro= thirdLi.classList.contains("tech");
    
    if(primeiro === true){
        secondLi.classList.remove('tech');
        thirdLi.classList.remove('tech');
    }
    if(segundo == true){
        firstLi.classList.remove('tech');
        thirdLi.classList.remove('tech');
    }
    if(terceiro == true){
        firstLi.classList.remove('tech');
        secondLi.classList.remove('tech');
    }
}


// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


input.addEventListener("input", function(texto) {
    const caixa = document.querySelector('.tech');
    caixa.innerText = texto.target.value;

})

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
const top3 = document.querySelector('#my-spotrybefy');
top3.addEventListener("dblclick", function () {
    window.location.replace('https://leonardoferraz25.github.io/portifolio/')
} )
// redirecione para alguma página;

// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
top3.addEventListener('mouseenter', function (){
    top3.style.color = "#2fc18c" ;
    top3.style.cursor = "pointer";
})
top3.addEventListener('mouseleave', function (){
    top3.style.color = "#eee" ;
})


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.