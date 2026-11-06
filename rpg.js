const area0 = require("./areas/area0");
const area1 = require("./areas/area1");
const area2 = require("./areas/area2");
const area3 = require("./areas/area3");
const area4 = require("./areas/area4");
const area5 = require("./areas/area5");
const entidades = require("./entidades");
const luta1 = require("./sistemas/lutas");



const prompt = require("prompt-sync")();

// entidades.jogador.inventario.partesDoExodia = 4;
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
0 - SIM                                                 1 - NÃO\n`);

jogando = Number(prompt(`>`));

if (jogando === 0){

    console.log(`\ntexto chegou na área 0 pela primeira vez\n`)
    prompt(`>`);
    

while(jogando === 0){
    

   
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
        local = area2();
        if (local === 'ùndefined'){
            local = 0;
        }

    }

    else if (local === 3){
        local = area3();
        if (local === 'ùndefined'){
            local = 0;
        }

    }

    else if (local === 4){
        local = area4();
        if (local === 'ùndefined'){
            local = 0;
        }

    }

    else if (local === 5){
        local = area5();
        jogando = local
        if (local === 'ùndefined'){
            local = 0;
        }

    }


}
}