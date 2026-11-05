

const entidades = {

    jogador: {
        nome: "",
        vidaMax: 10,
        vida: 10,
        inventario: {
            pocaoDeVida: 0,
            dinheiro: 50,
            partesDoExodia: 0,
            temMagoNegro: 0,
            
        },
        atk: {
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

    inimigos: {

        inimigo1: {

            nome: "ini1",
            vidaMax: 1,
            vida: 1,
            resistencia: "",
            fraquesa: "",
            dano: [1,2,3,4], // 4 possíveis danos que esse inimigo dá
            drops: {
                dinheiro: [10,20,30]
            }
        },

        inimigo2: {

            nome: "ini2",
            vidaMax: 2,
            vida: 2,
            resistencia: "",
            fraquesa: "",
            dano: [1,2,3,4], // 4 possíveis danos que esse inimigo dá
            drops: {
                dinheiro: [10,20,30]
            }
        },

         inimigo3: {

            nome: "ini3",
            vidaMax: 3,
            vida: 3,
            resistencia: "",
            fraquesa: "",
            dano: [1,2,3,4], // 4 possíveis danos que esse inimigo dá
            drops: {
                dinheiro: [10,20,30]
            }
        },

         inimigo4: {

            nome: "ini4",
            vidaMax: 4,
            vida: 4,
            resistencia: "",
            fraquesa: "",
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
        atk: {
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