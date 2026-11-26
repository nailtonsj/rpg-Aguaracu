const entidades = require("../entidades");
const prompt = require("prompt-sync")();

const multiplicadorVidaInimigo = 0.75;
let passouArea1 = 0;
let passouArea2 = 0;
let passouArea3 = 0;
let passouArea4 = 0;


function luta1(areax) {
    let ganhou = 0;

    inimigoSorteado = sortearInimigo();
    if (areax === 'area1'){inimigoSorteado.elemento = "fogo"}
    if (areax === 'area2'){inimigoSorteado.elemento = "agua"}
    if (areax === 'area3'){inimigoSorteado.elemento = "planta"}
    if (areax === 'area4'){inimigoSorteado.elemento = "terra"}
    console.log(`Você se depara com o inimigo ${inimigoSorteado.nome} de ${inimigoSorteado.elemento}!\nÉ hora de lutar (* ￣︿￣)!!\n`);
    console.log(`Pontos de Vida de ${inimigoSorteado.nome}: ${inimigoSorteado.vidaMax}`)
    console.log(`Seus Pontos de Vida: ${entidades.jogador.vida}`)
    console.log(`Partes do Exodia recuperadas: (${entidades.jogador.inventario.partesDoExodia}/4)\n`)
    prompt(`>`)
    
    if (entidades.jogador.inventario.partesDoExodia > 0){
        inimigoSorteado.vida = Math.ceil(inimigoSorteado.vidaMax * multiplicadorVidaInimigo * entidades.jogador.inventario.partesDoExodia);
    } else {
        inimigoSorteado.vida = inimigoSorteado.vidaMax;
    }
    
    while (entidades.jogador.vida > 0 && inimigoSorteado.vida > 0) {

        // turnoJogador();
        // turnoInimigo();
        // entidades.jogador.vida = 0; // teste para que ele perca e saia do loop
        turnoJogador();
        turnoInimigo();
        
        
    }
    if (entidades.jogador.vida > 0){
            
            saqueSorteado = Number(sortearDropDinheiro())
            console.log(`\nParabéns!!\nVocê derrotou o inimigo ${inimigoSorteado.nome}\nEle deixou cair a quantia de R$ ${saqueSorteado.toFixed(2)}.`);
            console.log(`Você possui R$ ${entidades.jogador.inventario.dinheiro.toFixed(2)}`);
            console.log(`Lhe restaram de Pontos de Vida: ${entidades.jogador.vida}\n`); 
            ganhou = 1;


            
        }
        else {
            console.log(`\nQue peeenaaaaa!!\nO inimigo ${inimigoSorteado.nome} te derrotou.\nO pilantra ainda levou R$ ${Math.floor(entidades.jogador.inventario.dinheiro / 3).toFixed(2)} do seu dinheiro\n`);
            entidades.jogador.inventario.dinheiro = entidades.jogador.inventario.dinheiro - Math.floor(entidades.jogador.inventario.dinheiro / 3); // retira 1/3 do dinheiro do jogador toda vez que ele perde
            console.log(`Lhe restaram R$ ${entidades.jogador.inventario.dinheiro.toFixed(2)}`);
            entidades.jogador.vida = Math.floor(entidades.jogador.vidaMax / 2);
            console.log(`Lhe restaram de Pontos de Vida: ${entidades.jogador.vida}\n`);

            
        }

        prompt(`>`);
    if (ganhou === 1){
            if (areax == 'area1'){
                if (passouArea1 === 0){

                    console.log(`\nVocê adquiriu a carta "Perna Esquerda De Exodia"`)
                    entidades.jogador.inventario.partesDoExodia = entidades.jogador.inventario.partesDoExodia + 1;
                    console.log(`Você possui: ${entidades.jogador.inventario.partesDoExodia}/4 partes do exodia\n`)
                } else {
                    console.log(`Você já saqueou a carta dessa área, procure mais "Partes do Exodia" em outros lugares\n`)
                }
                passouArea1 = 1;
                ganhou = 0;
                prompt(`>`);
                return 0; // faz voltar a área 0 (hub)

            }
            else if (areax === "area2"){
                if (passouArea2 === 0){

                    console.log(`\nVocê adquiriu a carta "Perna Direita De Exodia"`)
                    entidades.jogador.inventario.partesDoExodia = entidades.jogador.inventario.partesDoExodia + 1;
                    console.log(`Você possui: ${entidades.jogador.inventario.partesDoExodia}/4 partes do exodia\n`)
                } else {
                    console.log(`Você já saqueou a carta dessa área, procure mais "Partes do Exodia" em outros lugares\n`)
                }
                passouArea2 = 1;
                ganhou = 0;
                prompt(`>`);
                return 0; // faz voltar a área 0 (hub)

            }
            else if (areax === "area3"){
                if (passouArea3 === 0){

                    console.log(`\nVocê adquiriu a carta "Braço Esquerdo" De Exodia"`)
                    entidades.jogador.inventario.partesDoExodia = entidades.jogador.inventario.partesDoExodia + 1;
                    console.log(`Você possui: ${entidades.jogador.inventario.partesDoExodia}/4 partes do exodia\n`)
                } else {
                    console.log(`Você já saqueou a carta dessa área, procure mais "Partes do Exodia" em outros lugares\n`)
                }
                passouArea3 = 1;
                ganhou = 0;
                prompt(`>`);
                return 0; // faz voltar a área 0 (hub)

            }
            else if (areax === "area4"){
                if (passouArea4 === 0){

                    console.log(`\nVocê adquiriu a carta "Braço Direita De Exodia"`)
                    entidades.jogador.inventario.partesDoExodia = entidades.jogador.inventario.partesDoExodia + 1;
                    console.log(`Você possui: ${entidades.jogador.inventario.partesDoExodia}/4 partes do exodia\n`)
                } else {
                    console.log(`Você já saqueou a carta dessa área, procure mais "Partes do Exodia" em outros lugares\n`)
                }
                passouArea4 = 1;
                ganhou = 0;
                prompt(`>`);
                return 0; // faz voltar a área 0 (hub)

            }
            } else {
              prompt(`>`);
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



function sortearDano(){
    const danosPossiveis = Object.values(inimigoSorteado.dano);
    const indiceDanoAleatorio = Math.floor(Math.random() * danosPossiveis.length);
    const danoSorteado = danosPossiveis[indiceDanoAleatorio];
    
    return danoSorteado;

}


function verificacaoElemental(agressor,ataquex){
    let multiplicadorDano = 1;

    if (agressor === 'jogador'){
        if (entidades.jogador.ataques[ataquex]?.elemento === "agua" && inimigoSorteado.elemento === "fogo"){
            multiplicadorDano = 1.5;
            return multiplicadorDano;
        } else if (entidades.jogador.ataques[ataquex]?.elemento === "fogo" && inimigoSorteado.elemento === "planta"){
            multiplicadorDano = 1.5;
            return multiplicadorDano;
        } else if (entidades.jogador.ataques[ataquex]?.elemento === "planta" && inimigoSorteado.elemento === "terra"){
            multiplicadorDano = 1.5;
            return multiplicadorDano;
        } else if (entidades.jogador.ataques[ataquex]?.elemento === "fogo" && inimigoSorteado.elemento === "agua"){
            multiplicadorDano = 0.66;
            return multiplicadorDano;
        } else if (entidades.jogador.ataques[ataquex]?.elemento === "planta" && inimigoSorteado.elemento === "fogo"){
            multiplicadorDano = 0.66;
            return multiplicadorDano;
        } else if (entidades.jogador.ataques[ataquex]?.elemento === "terra" && inimigoSorteado.elemento === "planta"){
            multiplicadorDano = 0.66;
            return multiplicadorDano;
        } 
        
        
        else {
            return multiplicadorDano;
        }
        
    } else {
            return multiplicadorDano;
        }
}


function verificacaoAtaquesDisponiveis(){
        let ataqueEscolhido = "";
        
        
        while(true){

        console.log(`1 - ${entidades.jogador.ataques.ataque1.nome} (Usos Disponíveis: ${entidades.jogador.ataques.ataque1.quantidade}/${entidades.jogador.ataques.ataque1.quantidadeMax})`);
        if (entidades.jogador.inventario.partesDoExodia > 0){
            console.log(`2 - ${entidades.jogador.ataques.ataque2.nome} (Usos Disponíveis: ${entidades.jogador.ataques.ataque2.quantidade}/${entidades.jogador.ataques.ataque2.quantidadeMax})`);
        }
        if (entidades.jogador.inventario.partesDoExodia > 1){
            console.log(`3 - ${entidades.jogador.ataques.ataque3.nome} (Usos Disponíveis: ${entidades.jogador.ataques.ataque3.quantidade}/${entidades.jogador.ataques.ataque3.quantidadeMax})`);
        }
        if (entidades.jogador.inventario.partesDoExodia > 2){
            console.log(`4 - ${entidades.jogador.ataques.ataque4.nome} (Usos Disponíveis: ${entidades.jogador.ataques.ataque4.quantidade}/${entidades.jogador.ataques.ataque4.quantidadeMax})`);
        }
        if (entidades.jogador.inventario.partesDoExodia > 1 && entidades.jogador.inventario.temMagoNegro === 1){
            console.log(`5 - Mago Negro Recuperado (uso único)`);
        }
        

        if (entidades.jogador.inventario.pocaoDeVida > 0){
            console.log(`0 - Usar Poção de Cura (Usos Disponíveis: ${entidades.jogador.inventario.pocaoDeVida})\n`);
        }
        
        console.log("")
        let escolha = Number(prompt(`>`));

        if (escolha === 1 && entidades.jogador.ataques.ataque1.quantidade > 0){
            console.log(`\nVocê usou o ataque ${entidades.jogador.ataques.ataque1.nome} no inimigo ${inimigoSorteado.nome}`)
            console.log(`O ataque ${entidades.jogador.ataques.ataque1.nome} causou ${entidades.jogador.ataques.ataque1.dano} de Dano no inimigo ${inimigoSorteado.nome}\n`)
            multiplicadorDano = verificacaoElemental("jogador", "ataque1")
            ataqueEscolhido = "ataque1"
            inimigoSorteado.vida = inimigoSorteado.vida - Math.floor(entidades.jogador.ataques.ataque1.dano * multiplicadorDano)
            if (inimigoSorteado.vida < 0){inimigoSorteado.vida = 0;}
            entidades.jogador.ataques.ataque1.quantidade = entidades.jogador.ataques.ataque1.quantidade - 1;

            console.log(`Pontos de Vida restantes do inimigo: ${inimigoSorteado.vida} `)
            console.log(`Seus Pontos de Vida restantes: ${entidades.jogador.vida}\n`)

            return

        }
        else if (escolha === 2 && entidades.jogador.inventario.partesDoExodia > 0 && entidades.jogador.ataques.ataque2.quantidade > 0){
            console.log(`\nVocê usou o ataque ${entidades.jogador.ataques.ataque2.nome} no inimigo ${inimigoSorteado.nome}`)
            console.log(`O ataque ${entidades.jogador.ataques.ataque2.nome} causou ${entidades.jogador.ataques.ataque2.dano} de Dano no inimigo ${inimigoSorteado.nome}\n`)
            multiplicadorDano = verificacaoElemental("jogador", "ataque2")
            ataqueEscolhido = "ataque2"
            inimigoSorteado.vida = inimigoSorteado.vida - Math.floor(entidades.jogador.ataques.ataque2.dano * multiplicadorDano)
            if (inimigoSorteado.vida < 0){inimigoSorteado.vida = 0;}
            entidades.jogador.ataques.ataque2.quantidade = entidades.jogador.ataques.ataque2.quantidade - 1;

            console.log(`Pontos de Vida restantes do inimigo: ${inimigoSorteado.vida} `)
            console.log(`Seus Pontos de Vida restantes: ${entidades.jogador.vida}\n`)

            return

        }
        else if (escolha === 3 && entidades.jogador.inventario.partesDoExodia > 1 && entidades.jogador.ataques.ataque3.quantidade > 0){
            console.log(`\nVocê usou o ataque ${entidades.jogador.ataques.ataque3.nome} no inimigo ${inimigoSorteado.nome}`)
            console.log(`O ataque ${entidades.jogador.ataques.ataque3.nome} causou ${entidades.jogador.ataques.ataque3.dano} de Dano no inimigo ${inimigoSorteado.nome}\n`)
            multiplicadorDano = verificacaoElemental("jogador", "ataque3")
            ataqueEscolhido = "ataque3"
            inimigoSorteado.vida = inimigoSorteado.vida - Math.floor(entidades.jogador.ataques.ataque3.dano * multiplicadorDano)
            if (inimigoSorteado.vida < 0){inimigoSorteado.vida = 0;}
            entidades.jogador.ataques.ataque3.quantidade = entidades.jogador.ataques.ataque3.quantidade - 1;

            console.log(`Pontos de Vida restantes do inimigo: ${inimigoSorteado.vida} `)
            console.log(`Seus Pontos de Vida restantes: ${entidades.jogador.vida}\n`)

            return

        }
        else if (escolha === 4 && entidades.jogador.inventario.partesDoExodia > 2 && entidades.jogador.ataques.ataque4.quantidade > 0){
            console.log(`\nVocê usou o ataque ${entidades.jogador.ataques.ataque4.nome} no inimigo ${inimigoSorteado.nome}`)
            console.log(`O ataque ${entidades.jogador.ataques.ataque4.nome} causou ${entidades.jogador.ataques.ataque4.dano} de Dano no inimigo ${inimigoSorteado.nome}\n`)
            multiplicadorDano = verificacaoElemental("jogador", "ataque4")
            ataqueEscolhido = "ataque4"
            inimigoSorteado.vida = inimigoSorteado.vida - Math.floor(entidades.jogador.ataques.ataque4.dano * multiplicadorDano)
            if (inimigoSorteado.vida < 0){inimigoSorteado.vida = 0;}
            entidades.jogador.ataques.ataque4.quantidade = entidades.jogador.ataques.ataque4.quantidade - 1;

            console.log(`Pontos de Vida restantes do inimigo: ${inimigoSorteado.vida} `)
            console.log(`Seus Pontos de Vida restantes: ${entidades.jogador.vida}\n`)

            return

        }
        else if (escolha === 5 && entidades.jogador.inventario.temMagoNegro === 1 && entidades.jogador.inventario.partesDoExodia > 1){
            console.log(`\nVocê usou a carta especial "O Mago Negro Recuperado" nessa Luta!`)
            console.log(`De repente, aquele Andarilho do início da pirâmide aparece e se revela como o próprio "Mago Negro"`)
            console.log(`Ele usa o movimento "Faca de Dois Gumes"\n`)
            inimigoSorteado.vida = inimigoSorteado.vida / 2;

            console.log(`A vida do oponente é reduzida pela metade, agora ele tem: ${inimigoSorteado.vida} Pontos de Vida!`)
            console.log(`A Quantidade de Usos Disponíveis de todos os seus ataques também é reduzido pela metade`)
            entidades.jogador.ataques.ataque1.quantidade = Math.floor(entidades.jogador.ataques.ataque1.quantidade / 2)
            entidades.jogador.ataques.ataque2.quantidade = Math.floor(entidades.jogador.ataques.ataque2.quantidade / 2)
            entidades.jogador.ataques.ataque3.quantidade = Math.floor(entidades.jogador.ataques.ataque3.quantidade / 2)
            entidades.jogador.ataques.ataque4.quantidade = Math.floor(entidades.jogador.ataques.ataque4.quantidade / 2)
            console.log(`O Uso desse ataque é único. Você não poderá usá-lo novamente nessa jogatina!`)
            console.log(`Pontos de Vida restantes do inimigo: ${inimigoSorteado.vida} `)
            console.log(`Seus Pontos de Vida restantes: ${entidades.jogador.vida}\n`)

            entidades.jogador.inventario.temMagoNegro = 0;    
            return

        }
        else if (escolha === 0 && entidades.jogador.inventario.pocaoDeVida > 0){
            console.log(`\nVocê usou esse turno para recuperar (${Math.ceil(entidades.jogador.vidaMax / 4)}) Pontos de Vida.\n`)
            entidades.jogador.vida = entidades.jogador.vida + Math.ceil(entidades.jogador.vidaMax / 4)
            if (entidades.jogador.vida > entidades.jogador.vidaMax){entidades.jogador.vida = entidades.jogador.vidaMax}
            entidades.jogador.inventario.pocaoDeVida = entidades.jogador.inventario.pocaoDeVida - 1;
            console.log(`Pontos de Vida restantes do inimigo: ${inimigoSorteado.vida} `)
            console.log(`Seus Pontos de Vida restantes: ${entidades.jogador.vida}\n`)

            return
        
         }
         else if (entidades.jogador.ataques.ataque1.quantidade <= 0 || entidades.jogador.ataques.ataque2.quantidade <= 0 || entidades.jogador.ataques.ataque3.quantidade <= 0 || entidades.jogador.ataques.ataque4.quantidade <= 0 && entidades.jogador.inventario.pocaoDeVida < 1){
            if (entidades.jogador.inventario.partesDoExodia === 0 && entidades.jogador.ataques.ataque1.quantidade <= 0){
                console.log(`\nVocê não conegue realizar nenhua ação!!\nQue penaaa ಥ_ಥ\nSeja massacrado pelo inimigo. \n`)
                return
            }
            else if (entidades.jogador.inventario.partesDoExodia === 1 && entidades.jogador.ataques.ataque1.quantidade <= 0 && entidades.jogador.ataques.ataque2.quantidade <= 0){
                console.log(`\nVocê não conegue realizar nenhua ação!!\nQue penaaa ಥ_ಥ\nSeja massacrado pelo inimigo. \n`)
                return
            }
            else if (entidades.jogador.inventario.partesDoExodia === 2 && entidades.jogador.ataques.ataque1.quantidade <= 0 && entidades.jogador.ataques.ataque2.quantidade <= 0 && entidades.jogador.ataques.ataque3.quantidade <= 0){
                console.log(`\nVocê não conegue realizar nenhua ação!!\nQue penaaa ಥ_ಥ\nSeja massacrado pelo inimigo. \n`)
                return
            }
            else if (entidades.jogador.inventario.partesDoExodia === 3 && entidades.jogador.ataques.ataque1.quantidade <= 0 && entidades.jogador.ataques.ataque2.quantidade <= 0 && entidades.jogador.ataques.ataque3.quantidade <= 0 && entidades.jogador.ataques.ataque4.quantidade <= 0){
                console.log(`\nVocê não conegue realizar nenhua ação!!\nQue penaaa ಥ_ಥ\nSeja massacrado pelo inimigo. \n`)
                return
            }
            else {
            console.log(`\nInpossível realizar a ação da escolha ${escolha}.\n Tente realizar outra ação!\n`)
         }

            
        
         }
         else {
            console.log(`Inpossível realizar a ação da escolha ${escolha}.\n Tente realizar outra ação!\n`)
         }
         


        

        
    


        }
    }

function turnoJogador(){
    console.log(`\nÉ a sua vez de Atacar!\nEscolha um ataque/ação:\n`);
    verificacaoAtaquesDisponiveis();
    prompt(`>`);

}

function turnoInimigo(){
    if(inimigoSorteado.vida > 0){
        console.log(`\nO oponente ${inimigoSorteado.nome} vai Atacar!\n`)
        const danoSorteado = sortearDano();
        prompt(`>`);
        console.log(`\nVocê recebeu ${danoSorteado} de Dano`)
        entidades.jogador.vida = entidades.jogador.vida - danoSorteado
        if (entidades.jogador.vida < 0){entidades.jogador.vida = 0}
        console.log(`Seus Pontos de vida restantes: ${entidades.jogador.vida}\n`)
    }
    else {return}
    prompt(`>`)

}

// inimigoSorteado = sortearInimigo()
// console.log(inimigoSorteado.nome)

// saqueSorteado = sortearDropDinheiro()

// console.log(saqueSorteado.toFixed(2));
// console.log(entidades.jogador.inventario.dinheiro)

module.exports = luta1;

// turnoInimigo()

// console.log(entidades.jogador.vida)

// console.log(verificacaoElemental("jogador", "ataque1"))