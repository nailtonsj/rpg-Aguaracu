const prompt = require("prompt-sync")();
const entidades = require("../entidades");


let escolha = 0;

function loja() {

    

        console.log(`Dinheiro no seu inventário: R$${entidades.jogador.inventario.dinheiro.toFixed(2)}`);
    console.log(`Poções de Vida no seu inventário: ${entidades.jogador.inventario.pocaoDeVida}`);
    console.log(`A casinha era realmente uma loja.\n Uma bela recepcionista te atende: "Bem-vindo à loja! O que você deseja comprar?"\n1 - Poção de Vida (R$50,00)\n2 - Sair da loja\n`)
    escolha = Number(prompt(`>`));

    

    if (escolha === 1) {
        if (entidades.jogador.inventario.dinheiro >= 50){
            entidades.jogador.inventario.dinheiro = entidades.jogador.inventario.dinheiro - 50;
            entidades.jogador.inventario.pocaoDeVida = entidades.jogador.inventario.pocaoDeVida + 1;
            console.log(`Você comprou 1 poção!\nAgora você possui ${entidades.jogador.inventario.pocaoDeVida} Poções de Vida no seu inventário!`)
            return 2;
        } else{
            console.log(`Você não possui o dinheiro necessário para efetuar a compra.\nTalvez alguns inimigos derrotados dropem algo valioso`);
            return 2;
        }
        
        
    } else if (escolha === 2) {
        console.log("Saindo da loja...");
        return 0;
        
    } else { 
        escolha = 0;
        return 2;
    }

    
}

module.exports = loja;