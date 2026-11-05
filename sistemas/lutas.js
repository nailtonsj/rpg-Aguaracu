const entidades = require("../entidades");

function luta1() {
    inimigoSorteado = sortearInimigo();
    inimigoSorteado.vida = inimigoSorteado.vidaMax;
    while (entidades.jogador.vida > 0 && inimigoSorteado.vida > 0) {

        // turnoJogador();
        // turnoInimigo();
        entidades.jogador.vida = 0; // teste para que ele perca e saia do loop
        
        
    }
    if (entidades.jogador.vida > 0){
            
            saqueSorteado = Number(sortearDropDinheiro())
            console.log(`Parabéns!!\nVocê derrotou o inimigo ${inimigoSorteado.nome}\nEle deixou cair a quantia de R$ ${saqueSorteado.toFixed(2)}.`);

            return 0; // faz voltar a área o (hub)
        }
        else {
            console.log(`Que peeenaaaaa!!\nO inimigo ${inimigoSorteado.nome} te derrotou.\nO pilantra ainda levou R$ ${Math.floor(entidades.jogador.inventario.dinheiro / 3).toFixed(2)} do seu dinheiro\n`);
            entidades.jogador.inventario.dinheiro = entidades.jogador.inventario.dinheiro - Math.floor(entidades.jogador.inventario.dinheiro / 3); // retira 1/3 do dinheiro do jogador toda vez que ele perde
            console.log(`Lhe restaram R$ ${entidades.jogador.inventario.dinheiro.toFixed(2)}`);
            entidades.jogador.vida = Math.floor(entidades.jogador.vidaMax / 2);
            console.log(`Lhe restaram de Pontos de Vida: ${entidades.jogador.vida}\n`);

            return 0; // faz voltar a área 0 (hub)
        }

}


function luta2(params) {
    for (let i = 0; i < 10; i++) {
        //função-randomizar
        while (true) {
            
        }
        if (entidades.jogador.vida > 0){
            console.log(`Texto-vitória`);
            entidades.jogador.inventario.dinheiro = entidades.jogador.inventario.dinheiro + entidades

        }
        else {
            console.log(`Texto derrota`)
        }
    }
}
function luta3(params) {
    while (true) {
        //conteudo da batalha
        
    }
}



function sortearInimigo(){
    const listaInimigos = Object.values(entidades.inimigos);
    const indiceInimigoAleatorio = Math.floor(Math.random() * listaInimigos.length)
    
    const inimigoSorteado = listaInimigos[indiceInimigoAleatorio];
    return inimigoSorteado;
}



function sortearDropDinheiro(){
    const saquesPossiveis = Object.values(inimigoSorteado.drops.dinheiro);
    const indiceSaqueAleatorio = Math.floor(Math.random() * saquesPossiveis.length);
    const saqueSorteado = saquesPossiveis[indiceSaqueAleatorio];
    
    entidades.jogador.inventario.dinheiro = entidades.jogador.inventario.dinheiro + saqueSorteado

    return saqueSorteado;

}


function turnoJogador(){

}

function turnoInimigo(){

}

// inimigoSorteado = sortearInimigo()
// console.log(inimigoSorteado.nome)

// saqueSorteado = sortearDropDinheiro()

// console.log(saqueSorteado.toFixed(2));
// console.log(entidades.jogador.inventario.dinheiro)

module.exports = luta1;