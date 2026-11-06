const entidades = require("../entidades");
const prompt = require("prompt-sync")();

function area5() {

    console.log(`\nApós andar por um longo caminho de piso dourado, você se depara com uma porta colossal\n na porta tem 4 buracos com formato retangular\n`)
    prompt(`>`)
    if (entidades.jogador.inventario.partesDoExodia === 4){
        console.log(`\nVocê encaixa as cartas Partes do Exodia nos espaços:\n`)
        console.log(`- Perna Esquerda de Exodia encaixada`)
        console.log(`- Perna Direita de Exodia encaixada`)
        console.log(`- Braço Esquerdo de Exodia encaixado`)
        console.log(`- Braço Esquerdo de Exodia encaixado`)

        console.log(`\nDe repente, o chão começa a tremer e um barulho insurdecedor toma conta da sua cabeça\nVocê se vira pra frente avista e ...`)
        console.log(`\nEssa foi a versão demo do jogo\nObrigado por jogar ( •̀ ω •́ )✧\nFiquem no aguardo de novas atualizações\n`)
        prompt(`>`)
        return 1;

    }
    else {
        console.log(`\nParece que você ainda não pode acessar essa área\nVolte para o início da pirâmide\n`)
        prompt(`>`)
        return 0;
    }
    
    
}

module.exports = area5;