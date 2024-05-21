

//som do jogo
let somGanho = document.querySelector(".somGanho")
let roda = document.querySelector(".RodaRoleta");
let botao_jogar = document.querySelector(".botao_jogar");
let botao_jogando = document.querySelector(".botao_jogando");
let parag_saldo = document.querySelector(".parag_saldo ")
let saldo = 100;
let resultado = 0;

let dinheiroApostado = 0.5;

let ficha_coroa = 0;
let ficha_dinheiro = 0;
let ficha_vemelha = 0;
let ficha_baralho = 0;


let dinheiro = document.querySelector(".dinheiro");
let valorAposta = document.querySelector(".aposta");
let variavalor =["0.50","1.00","1.50","2.00","2.50","3.00","3.50","4.00"
,"4.50","5.00","5.50","6.00","6.50","7.00","7.50","8.00","8.50","9.00","9.50","10.00"]
let num = 0;



function AumentaAposta(){
  dinheiro.play();
if(num<=18){
  dinheiroApostado = dinheiroApostado + 0.5 
  num++
  valorAposta.textContent ="valor da aposta:"+ variavalor[num];
}
else{
  return
}
}

function DiminuiAposta(){
  
  dinheiro.play();
  if(num>=1){

    dinheiroApostado = dinheiroApostado - 0.5
    num--
    valorAposta.textContent ="valor da aposta:"+ variavalor[num];
  }
  else{
    return
  }
  }






////// aaaaaaaaaaaaaaaaaaaaaaaaa

const ficha1Div = document.querySelector('.ficha1');
const ficha2Div = document.querySelector('.ficha2');
const ficha3Div = document.querySelector('.ficha3');
const ficha4Div = document.querySelector('.ficha4');

// Função para gerar um número aleatório entre 1 e 4
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 4) + 1; // Gera um número entre 0 e 3, adiciona 1 para ter entre 1 e 4
}

 function criarImagensColuna1(){

  // Seleciona a div com a classe "ficha"


  // Cria um array com as classes das imagens
  const classes = ['icone1', 'icone2', 'icone3'];

  // Itera sobre o array de classes para criar e adicionar as imagens
  classes.forEach((classe) => {
      // Cria um elemento de imagem
      const img = document.createElement('img');
      const numeroAleatorio = gerarNumeroAleatorio();
      
      // Define o atributo src para o caminho da imagem (você deve ajustar o caminho para onde estão suas imagens)
      img.src = `./icones/ficha${numeroAleatorio}.png`; // Substitua com o caminho real das suas imagens

      // Define a classe da imagem
      img.className = classe;

      // Adiciona a imagem à div "ficha"
      ficha1Div.appendChild(img);
  });
}




function criarImagensColuna2(){

  // Seleciona a div com a classe "ficha"


  // Cria um array com as classes das imagens
  const classes = ['icone4', 'icone5', 'icone6'];

  // Itera sobre o array de classes para criar e adicionar as imagens
  classes.forEach((classe) => {
      // Cria um elemento de imagem
      const img = document.createElement('img');
      const numeroAleatorio = gerarNumeroAleatorio();
      
      // Define o atributo src para o caminho da imagem (você deve ajustar o caminho para onde estão suas imagens)
      img.src = `./icones/ficha${numeroAleatorio}.png`; // Substitua com o caminho real das suas imagens

      // Define a classe da imagem
      img.className = classe;

      // Adiciona a imagem à div "ficha"
      ficha2Div.appendChild(img);
  });
}




function criarImagensColuna3(){

  // Seleciona a div com a classe "ficha"


  // Cria um array com as classes das imagens
  const classes = ['icone7', 'icone8', 'icone9'];

  // Itera sobre o array de classes para criar e adicionar as imagens
  classes.forEach((classe) => {
      // Cria um elemento de imagem
      const img = document.createElement('img');
      const numeroAleatorio = gerarNumeroAleatorio();
      
      // Define o atributo src para o caminho da imagem (você deve ajustar o caminho para onde estão suas imagens)
      img.src = `./icones/ficha${numeroAleatorio}.png`; // Substitua com o caminho real das suas imagens

      // Define a classe da imagem
      img.className = classe;

      // Adiciona a imagem à div "ficha"
      ficha3Div.appendChild(img);
  });
}





function criarImagensColuna4(){

  // Seleciona a div com a classe "ficha"


  // Cria um array com as classes das imagens
  const classes = ['icone10', 'icone11', 'icone12'];

  // Itera sobre o array de classes para criar e adicionar as imagens
  classes.forEach((classe) => {
      // Cria um elemento de imagem
      const img = document.createElement('img');
      const numeroAleatorio = gerarNumeroAleatorio();
      
      // Define o atributo src para o caminho da imagem (você deve ajustar o caminho para onde estão suas imagens)
      img.src = `./icones/ficha${numeroAleatorio}.png`; // Substitua com o caminho real das suas imagens

      // Define a classe da imagem
      img.className = classe;

      // Adiciona a imagem à div "ficha"
      ficha4Div.appendChild(img);
  });
}


// duplicação dos icones para dar parece que ta rodando



function criarImagensColuna1falso(){

  // Seleciona a div com a classe "ficha"


  // Cria um array com as classes das imagens
  const classes = ['falso1', 'falso2', 'falso3'];

  // Itera sobre o array de classes para criar e adicionar as imagens
  classes.forEach((classe) => {
      // Cria um elemento de imagem
      const img = document.createElement('img');
      const numeroAleatorio = gerarNumeroAleatorio();
      
      // Define o atributo src para o caminho da imagem (você deve ajustar o caminho para onde estão suas imagens)
      img.src = `./icones/ficha${numeroAleatorio}.png`; // Substitua com o caminho real das suas imagens

      // Define a classe da imagem
      img.className = classe;

      // Adiciona a imagem à div "ficha"
      ficha1Div.appendChild(img);
  });
}




function criarImagensColuna2falso(){

  // Seleciona a div com a classe "ficha"


  // Cria um array com as classes das imagens
  const classes = ['falso4', 'falso5', 'falso6'];

  // Itera sobre o array de classes para criar e adicionar as imagens
  classes.forEach((classe) => {
      // Cria um elemento de imagem
      const img = document.createElement('img');
      const numeroAleatorio = gerarNumeroAleatorio();
      
      // Define o atributo src para o caminho da imagem (você deve ajustar o caminho para onde estão suas imagens)
      img.src = `./icones/ficha${numeroAleatorio}.png`; // Substitua com o caminho real das suas imagens

      // Define a classe da imagem
      img.className = classe;

      // Adiciona a imagem à div "ficha"
      ficha2Div.appendChild(img);
  });
}




function criarImagensColuna3falso(){

  // Seleciona a div com a classe "ficha"


  // Cria um array com as classes das imagens
  const classes = ['falso7', 'falso8', 'falso9'];

  // Itera sobre o array de classes para criar e adicionar as imagens
  classes.forEach((classe) => {
      // Cria um elemento de imagem
      const img = document.createElement('img');
      const numeroAleatorio = gerarNumeroAleatorio();
      
      // Define o atributo src para o caminho da imagem (você deve ajustar o caminho para onde estão suas imagens)
      img.src = `./icones/ficha${numeroAleatorio}.png`; // Substitua com o caminho real das suas imagens

      // Define a classe da imagem
      img.className = classe;

      // Adiciona a imagem à div "ficha"
      ficha3Div.appendChild(img);
  });
}





function criarImagensColuna4falso(){

  // Seleciona a div com a classe "ficha"


  // Cria um array com as classes das imagens
  const classes = ['falso10', 'falso11', 'falso12'];

  // Itera sobre o array de classes para criar e adicionar as imagens
  classes.forEach((classe) => {
      // Cria um elemento de imagem
      const img = document.createElement('img');
      const numeroAleatorio = gerarNumeroAleatorio();
      
      // Define o atributo src para o caminho da imagem (você deve ajustar o caminho para onde estão suas imagens)
      img.src = `./icones/ficha${numeroAleatorio}.png`; // Substitua com o caminho real das suas imagens

      // Define a classe da imagem
      img.className = classe;

      // Adiciona a imagem à div "ficha"
      ficha4Div.appendChild(img);
  });
}

function removeImagens() {

  setTimeout(() => {
    ficha1Div.innerHTML = '';
    ficha2Div.innerHTML = '';
    ficha3Div.innerHTML = '';
    ficha4Div.innerHTML = '';

}, 1000);


}







function pontuacao() {

  let imgsFicha1 = ficha1Div.querySelectorAll("img");
  let imgsFicha2 = ficha2Div.querySelectorAll("img");
  let imgsFicha3 = ficha3Div.querySelectorAll("img");
  let imgsFicha4 = ficha4Div.querySelectorAll("img");
    
  // Itere sobre as imagens
  for (let i = 0; i < 3; i++) {
 
      // Verifique se o src da imagem é o desejado
      if (imgsFicha1[i].getAttribute("src") === "./icones/ficha1.png") {
        ficha_coroa++
      }
      if (imgsFicha1[i].getAttribute("src") === "./icones/ficha2.png") {
        ficha_vemelha++
      }
      if (imgsFicha1[i].getAttribute("src") === "./icones/ficha3.png") {
        ficha_dinheiro++
      }
      if (imgsFicha1[i].getAttribute("src") === "./icones/ficha4.png") {
        ficha_baralho++

      }
    };
    
    
    // ficha2

    for (let i = 0; i < 3; i++) {
 
      // Verifique se o src da imagem é o desejado
      if (imgsFicha2[i].getAttribute("src") === "./icones/ficha1.png") {
        ficha_coroa++
      }
      if (imgsFicha2[i].getAttribute("src") === "./icones/ficha2.png") {
        ficha_vemelha++
      }
      if (imgsFicha2[i].getAttribute("src") === "./icones/ficha3.png") {
        ficha_dinheiro++
      }
      if (imgsFicha2[i].getAttribute("src") === "./icones/ficha4.png") {
        ficha_baralho++

      }
    };



        // ficha3

        for (let i = 0; i < 3; i++) {
 
          // Verifique se o src da imagem é o desejado
          if (imgsFicha3[i].getAttribute("src") === "./icones/ficha1.png") {
            ficha_coroa++
          }
          if (imgsFicha3[i].getAttribute("src") === "./icones/ficha2.png") {
            ficha_vemelha++
          }
          if (imgsFicha3[i].getAttribute("src") === "./icones/ficha3.png") {
            ficha_dinheiro++
          }
          if (imgsFicha3[i].getAttribute("src") === "./icones/ficha4.png") {
            ficha_baralho++
    
          }
        };




            // ficha4

            for (let i = 0; i < 3; i++) {
 
              // Verifique se o src da imagem é o desejado
              if (imgsFicha4[i].getAttribute("src") === "./icones/ficha1.png") {
                ficha_coroa++
              }
              if (imgsFicha4[i].getAttribute("src") === "./icones/ficha2.png") {
                ficha_vemelha++
              }
              if (imgsFicha4[i].getAttribute("src") === "./icones/ficha3.png") {
                ficha_dinheiro++
              }
              if (imgsFicha4[i].getAttribute("src") === "./icones/ficha4.png") {
                ficha_baralho++
        
              }
            };    

}

function validandoPontos(){

  if (ficha_coroa >= 5) {

    resultado = resultado +2*((ficha_coroa*dinheiroApostado)/2);
    saldo = saldo + resultado;
    parag_saldo.innerHTML = `saldo:${saldo.toFixed(2)} +${resultado.toFixed(2)}`;
    somGanho.play()
    
  }
  if (ficha_dinheiro >= 5) {

    resultado = resultado +((ficha_dinheiro*dinheiroApostado)/2);
    saldo = saldo + resultado;
    parag_saldo.innerHTML = `saldo:${saldo.toFixed(2)} +${resultado.toFixed(2)}`;
    somGanho.play()
    
  }
  if (ficha_vemelha >= 5) {

    resultado = resultado +0.3*((ficha_vemelha*dinheiroApostado)/2);
    saldo = saldo + resultado;
    parag_saldo.innerHTML = `saldo:${saldo.toFixed(2)} +${resultado.toFixed(2)}`;
    somGanho.play()
    
  }
  if (ficha_baralho >= 5) {

    resultado = resultado +0.5*((ficha_baralho*dinheiroApostado)/2);
    saldo = saldo + resultado;
    parag_saldo.innerHTML = `saldo:${saldo.toFixed(2)} +${resultado.toFixed(2)}`;
    somGanho.play()

    
  }


}




function inicialSaldo () {

  parag_saldo.innerHTML = `saldo:${saldo}`;

}

function inicio(){

  inicialSaldo ()
  criarImagensColuna1();
  criarImagensColuna2();
  criarImagensColuna3();
  criarImagensColuna4();
  for (let index = 0; index < 4; index++) {
    criarImagensColuna1falso();
    criarImagensColuna2falso();
    criarImagensColuna3falso();
    criarImagensColuna4falso();

  }
}

function jogar(){


  botao_jogar.style.display="none";
  botao_jogando.style.display="block";

  if (saldo < dinheiroApostado) {

    parag_saldo.innerHTML = `saldo:${saldo.toFixed(2)} insuficiente.`;
    botao_jogar.style.display="block";
    botao_jogando.style.display="none";
    return;

  }

  saldo = saldo - dinheiroApostado;
  parag_saldo.innerHTML = `saldo:${saldo.toFixed(2)}`;


  ficha1Div.style.animation = 'spin 0.5s linear infinite';
  ficha2Div.style.animation = 'spin 0.5s linear infinite';
  ficha3Div.style.animation = 'spin 0.5s linear infinite';
  ficha4Div.style.animation = 'spin 0.5s linear infinite';
  roda.play()
  removeImagens(); 

  setTimeout(() => {

    criarImagensColuna1();
    criarImagensColuna2();
    criarImagensColuna3();
    criarImagensColuna4();
    
    for (let index = 0; index < 4; index++) {
      criarImagensColuna1falso();
      criarImagensColuna2falso();
      criarImagensColuna3falso();
      criarImagensColuna4falso();
      
    }
  
}, 1010);

setTimeout(() => {
  ficha1Div.style.animation = '';
  ficha2Div.style.animation = '';
  ficha3Div.style.animation = '';
  ficha4Div.style.animation = '';
  roda.pause()
  roda.currentTime = 0;
  botao_jogar.style.display="block";
  botao_jogando.style.display="none";
  pontuacao()
  validandoPontos()

  setTimeout(() => {
    
    ficha_coroa = 0;
    ficha_dinheiro = 0;
    ficha_vemelha = 0;
    ficha_baralho = 0;
    resultado = 0;

},200);


 

}, 2500);



}




inicio()

