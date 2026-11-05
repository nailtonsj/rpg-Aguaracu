const area0 = require("./areas/area0");
const area1 = require("./areas/area1");
const entidades = require("./entidades");
const luta1 = require("./sistemas/lutas");

const prompt = require("prompt-sync")();

let local = 0;
let jogando = false;
let ajudouOMendigo = 0; // 0(nada acontece) 1(ajudou)(ganha a carta "Mago Negro") 2(ignorou)(ele se revela como o próprio Mago Negro na luta contra o Exodia e aumenta a vida do Exodia)
// let locaisAreaZero = 0;
// let locaisAreaUm = 0;
// let locaisAreaDois = 0;
// let locaisAreaTres = 0;
// let locaisAreaQuatro = 0;
// let locaisAreaCinco = 0;




console.log(`Olá, jogador. Bem vindo ao --- . Este é um jogo RPG de terminal.
    Não haverá imagens, apenas textos onde você poderá fazer escolhas
    digitando "1", "2", "3" ou "4" e confirmando com "ENTER" para tomar uma decisão quando for 
    necessário. Mesmo não tendo a parte gráfica, lhe garanto que será
    muito divertido, aproveite!

    Quer começar a jogar?
1 - SIM                                                 2 - NÃO\n`);

jogando = Number(prompt(`>`));

if (jogando === 1){

    console.log(
        `texto chegou na área 0 pela primeira vez\n`)



while(jogando){
    

   
    if (local === 0){
        local = area0();
        if (local === 'ùndefined'){
            local = 0;
        }
        

    }

    else if (local === 1){
         local = area1();
        if (local === 'ùndefined'){
            local = 0;
        }

    }

    else if (local === 2){
        console.log(`Estive na Área 2\n`);
        local = 0;

    }

    else if (local === 3){
        console.log(`Estive na Área 3\n`);
        local = 0;

    }

    else if (local === 4){
        console.log(`Estive na Área 4\n`);
        local = 0;

    }

    else if (local === 5){
        console.log(`Estive na Área 5\n`);
        local = 0;

    }


}
}