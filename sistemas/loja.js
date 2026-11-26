const prompt = require("prompt-sync")();
const entidades = require("../entidades");




let escolha = 0;

function loja() {
    const valorDaPocao = 50;
    let valorRecuperarTodaVida = Math.floor(entidades.jogador.inventario.dinheiro / 2)

    

    console.log(`\nDinheiro no seu inventário: R$${entidades.jogador.inventario.dinheiro.toFixed(2)}`);
    console.log(`Poções de Vida no seu inventário: ${entidades.jogador.inventario.pocaoDeVida}`);
    console.log(`Seus Pontos de Vida: (${entidades.jogador.vida}/${entidades.jogador.vidaMax})\n`);
    console.log(`A casinha era realmente uma loja.\nUma bela recepcionista te atende: "Bem-vindo à loja! O que você deseja comprar?"\n\n1 - Poção de Vida (R$${valorDaPocao},00)\n2 - Recuperar Toda a vida (R$${valorRecuperarTodaVida},00)\n0 - Sair da loja\n`)
    escolha = Number(prompt(`>`));

    

    if (escolha === 1) {
        
       
            if (entidades.jogador.inventario.dinheiro >= valorDaPocao){
                 entidades.jogador.inventario.dinheiro = entidades.jogador.inventario.dinheiro - valorDaPocao;
                 entidades.jogador.inventario.pocaoDeVida = entidades.jogador.inventario.pocaoDeVida + 1;
                 console.log(`\nVocê comprou 1 poção!\nAgora você possui ${entidades.jogador.inventario.pocaoDeVida} Poções de Vida no seu inventário!\n`)
                 return 2;
            } else{
                 console.log(`\nVocê não possui o dinheiro necessário para efetuar a compra.\nTalvez alguns inimigos derrotados dropem algo valioso\n`);
                 return 2;
                 }
         
        
        
    }
    else if (escolha === 2) {

    if (entidades.jogador.vida != entidades.jogador.vidaMax){
        if (entidades.jogador.inventario.dinheiro >= valorRecuperarTodaVida){
            entidades.jogador.inventario.dinheiro = entidades.jogador.inventario.dinheiro - valorRecuperarTodaVida;
            entidades.jogador.vida = entidades.jogador.vidaMax;
            console.log(`\nVocê recuperou todos os seus Pontos de Vida!\n`)
            return 2;
        } else{
            console.log(`\nVocê não possui o dinheiro necessário para efetuar a compra.\nTalvez alguns inimigos derrotados dropem algo valioso\n`);
            return 2;
        }
    } else {
        console.log(`\nVocê já está com a Vida cheia!!\nEscolha outra ação!\n`);
            return 2;
           }
    }
    else if (escolha === 0) {
        console.log(`\nSaindo da loja...\n`);
        return 0;
        
    } else { 
        console.log(`\nOpção inválida. Escolha outra!\n`)
        escolha = 0;
        return 2;
    }

    
}

module.exports = loja;