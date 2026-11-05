const entidades = require("../entidades.js");
const loja = require("../sistemas/loja.js");

const prompt = require("prompt-sync")();
let ajudouOMendigo = 0;
let escolhaPrincipal = 0;



function area0(){

    if (escolhaPrincipal === 0){
        console.log( `Você está na entrada da Pirâmide!!\nVocê olha ao redor e avista algumas coisas peculiares\nEscolha um local para ir (DIGITE):\n1 - Se aproximar de um moço estranho. \n2 - Entrar em uma casinha que aparenta ser uma Loja. \n3 - Investigar 5 túneis mais ao fundo.\n`)
        escolhaPrincipal = Number(prompt(`>`));
        return 0;
        }
        

    else if (escolhaPrincipal === 1){ //Mendigo
        if (ajudouOMendigo === 0){

            console.log(`Você se depara com um Andarilho Esfarrapado e fedido pedindo esmola\nMendigo: "Estou com fome e sede, poderia ajudar esse pobre moço aqui com uma quantia singela de R$${entidades.jogador.inventario.dinheiro.toFixed(2)}?"\nEscolha uma ação (DIGITE):\n1 - Ter compaixão do pedinte e dar todo seu dinheiro para ele. \n2 - Se desculpar com o pedinte por não poder ajudá-lo e seguir seu rumo.\n`)
            let ajudou = Number(prompt(`>`));

            if (ajudou === 1){
                
                if (entidades.jogador.inventario.dinheiro >= 50){
                console.log(`Mendigo: "Obrigado!! Você é uma pessoa muito generosa.\nEu não tenho muito, talvez esse papel precioso lhe sirva de algo."\n\nVocê ganha uma cartinha velha e desbotada com a seguinte escrita: "O Mago Negro".\nVocê a guarda caso precise no futuro.\n`)
                ajudouOMendigo = 1;
                entidades.jogador.inventario.dinheiro = entidades.jogador.inventario.dinheiro - entidades.jogador.inventario.dinheiro;
                entidades.jogador.inventario.temMagoNegro = 1; // condição para deixar o exodia mais fraco na batalha final
                escolhaPrincipal = 0;
                return 0;
               } else {
                console.log(`\nVocê não tem dinheiro para doar ao andarilho!\n`);
                ajudouOMendigo = 0;
                escolhaPrincipal = 0;
                return 0;
                    
               }
            }
            else if (ajudou === 2){
                console.log(
                    `O mendigo te xinga e cospe na sua cara.\nMendigo: "Arroganntchi!"\nVocê nunca mais o verá (Ou será que não?)\n`);
                escolhaPrincipal = 0;
                ajudouOMendigo = 2;
                return 0;

            }

        }
        else {
            console.log(`O Andarilho Esfarrapado foi embora. Investigue outra coisa!\n`);
            escolhaPrincipal = 0;
            return 0;
        }
       
    }
    else if (escolhaPrincipal === 2){ //Loja
        
        escolhaPrincipal = loja();
        return 0;
    }
    else if(escolhaPrincipal === 3){
        
         console.log(`\nVocê se depara com 5 túneis misteriosos com cores vibrantes.\nDeseja adentrar algum?\n1 - Túnel Vermelho\n2 - Túnel Azul\n3 - Túnel Verde\n4 - Túnel Cinza\n5 - Túnel Dourado\n6 - Voltar\n`);
         let tunel = Number(prompt(`>`));
         if (tunel > 0 && tunel < 6){
            escolhaPrincipal = 0;
            return tunel;

         } else if (tunel === 6){
            escolhaPrincipal = 0;
            return 0;
         }
         
         
    }
    else {
        console.log(`Valor inválido, digite outra coisa`);
        escolhaPrincipal = 0;
        return 0;
    }
}


// console.log(ajudouOMendigo)
// console.log(entidades.jogador.inventario.dinheiro)



module.exports = area0;