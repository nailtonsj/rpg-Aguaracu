const prompt = require("prompt-sync")();

let vezJogando = 0;
let locajogl = 0;
let locaisAreaZero = 0;
let locaisAreaUm = 0;
let locaisAreaDois = 0;
let locaisAreaTres = 0;
let locaisAreaQuatro = 0;
let locaisAreaCinco = 0;
let jogando = false;


const textos = {
    inicio:
    `Olá, jogador. Bem vindo ao --- . Este é um jogo RPG de terminal.
    Não haverá imagens, apenas textos onde você poderá fazer escolhas
    digitando "1", "2", "3" ou "4" para tomar uma decisão quando for 
    necessário. Mesmo não tendo a parte gráfica, lhe garanto que será
    muito divertido, aproveite!`
}

console.log(textos.inicio);

jogando = Number(prompt(
    `Quer começar a jogar?
1 - SIM                                                 2 - NÃO\n>`));

while(jogando){
    if (local === 0){
        if (vezJogando === 0){
            console.log(textos.descobriuADungeon);
            vezJogando = 1;
        } else if (vezJogando === 1){
            console.log(textos.estaNaAreaZero);
        }

        locaisAreaZero = prompt(
    `Digite:
1 - local 1                                                2 - local 2
3 - local 3                                                4 - local 4`);

        if (locaisAreaZero === 1){

        }

        if (locaisAreaZero === 2){
            
        }

        if (locaisAreaZero === 3){
            
        }

        if (locaisAreaZero === 4){
            
        }
    

    

    }

    if (local === 1){

    }

    if (local === 3){

    }

    if (local === 4){

    }

    if (local === 5){

    }


}