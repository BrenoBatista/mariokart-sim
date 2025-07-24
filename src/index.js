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