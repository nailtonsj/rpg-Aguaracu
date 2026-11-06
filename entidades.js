

const entidades = {

    jogador: {
        nome: "",
        vidaMax: 20,
        vida: 20,
        inventario: {
            pocaoDeVida: 0,
            dinheiro: 50,
            partesDoExodia: 0,
            temMagoNegro: 0,
            
        },
        ataques: {
            ataque1: {
                dano: 2,
                nome: "atk t",
                elemento: "terra",
                quantidadeMax: 6,
                quantidade: 6,
            },
            ataque2: {
                dano: 3,
                nome: "atk f",
                elemento: "fogo",
                quantidadeMax: 3,
                quantidade: 3,
            },
            ataque3: {
                dano: 4,
                nome: "atk p",
                elemento: "planta",
                quantidadeMax: 3,
                quantidade: 3,
            },
            ataque4: {
                dano: 5,
                nome: "atk a",
                elemento: "agua",
                quantidadeMax: 3,
                quantidade: 3,
            },
        },
    },

    inimigos: {

        inimigo1: {

            nome: "ini1",
            vidaMax: 10,
            vida: 10,
            elemento: "terra",
            dano: [1,2,3,4], // 4 possíveis danos que esse inimigo dá
            drops: {
                dinheiro: [10,20,30]
            }
        },

        inimigo2: {

            nome: "ini2",
            vidaMax: 10,
            vida: 10,
            elemento: "terra",
            dano: [1,2,3,4], // 4 possíveis danos que esse inimigo dá
            drops: {
                dinheiro: [10,20,30]
            }
        },

         inimigo3: {

            nome: "ini3",
            vidaMax: 10,
            vida: 10,
            elemento: "terra",
            dano: [1,2,3,4], // 4 possíveis danos que esse inimigo dá
            drops: {
                dinheiro: [10,20,30]
            }
        },

         inimigo4: {

            nome: "ini4",
            vidaMax: 10,
            vida: 10,
            elemento: "terra",
            dano: [1,2,3,4], // 4 possíveis danos que esse inimigo dá
            drops: {
                dinheiro: [10,20,30]
            }
        },
    },

    boss: {
        nome: "",
        vidaMax: 0,
        vida: 0,
        ataques: {
            ataque1: {
                dano: 0,
                nome: "",
            },
            ataque2: {
                dano: 0,
                nome: "",
            },
            ataque3: {
                dano: 0,
                nome: "",
            },
            ataque4: {
                dano: 0,
                nome: "",
            },
        },
    },
}



module.exports = entidades;