const player1 = {
    NAME: "MARIO",
    VELOCITY: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    SCORE: 0,
};

const player2 = {
    NAME: "LUIGI",
    VELOCITY: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    SCORE: 0,
};

async function rollDice(){
    Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random();
    let result;

    switch(true){
        case random < 0.33:
            result = "STRAIGHT";
            break;
        case random < 0.66:
            result = "TURN";
            break;
        default:
            result = "SKIRMISH"
    }
    return result;
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁Rodada ${round}`)

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)
    }
}

(async function main(){
    console.log(
        `🏎️🏁 Corrida entre ${player1.NAME} e ${player2.NAME} iniciando!!`
    );

    await playRaceEngine(player1, player2);
})();