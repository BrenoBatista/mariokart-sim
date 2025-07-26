const player1 = {
    NAME: "MARIO",
    SPEED: 4,
    MANEUVERABILITY: 4,
    POWER: 3,
    SCORE: 0,
};

const player2 = {
    NAME: "LUIGI",
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    SCORE: 0,
};

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1; 
}

async function logRollResult(player, roll, rollType, attribute){
    console.log(`${player} is making a ${rollType} check!`);
    console.log(`${player} rolled a ${roll + attribute}(${roll} + ${attribute}) on the die! 🎲`);
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
            result = "SKIRMISH";
    }
    return result;
}

async function declareWinner(char1, char2) {
    console.log("=========================================================================");
    console.log("🏆Final Results!!🏆");
    console.log(`${char1.NAME}: ${char1.SCORE} point(s)`);
    console.log(`${char2.NAME}: ${char2.SCORE} point(s)`);

    if(char1.SCORE > char2.SCORE){
        console.log(`${char1.NAME} venceu a corrida!!🏆🏆🏆🏆🏆`);
    }else if (char1.SCORE < char2.SCORE){
        console.log(`${char2.NAME} venceu a corrida!!🏆🏆🏆🏆🏆`);
    }else{
        console.log("The race was a tie!");
    }
    console.log("=========================================================================");
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log("___________________________________________________________________")
        console.log(`🏁Round ${round}`)

        let block = await getRandomBlock();
        console.log(`Block: ${block}`)

        let skillTest1 = await rollDice();
        let skillTest2 = await rollDice();

        if(block == "STRAIGHT"){
            await logRollResult(player1.NAME, skillTest1, "SPEED", player1.SPEED);
            await logRollResult(player2.NAME, skillTest2, "SPEED", player2.SPEED);

            skillTest1 = skillTest1 + player1.SPEED;
            skillTest2 = skillTest2 + player2.SPEED;

        }else{
            if(block == "TURN"){
                await logRollResult(player1.NAME, skillTest1, "MANEUVERABILITY", player1.MANEUVERABILITY);
                await logRollResult(player2.NAME, skillTest2, "MANEUVERABILITY", player2.MANEUVERABILITY);

                skillTest1 = skillTest1 + player1.MANEUVERABILITY;
                skillTest2 = skillTest2 + player2.MANEUVERABILITY;
            }
            else{
                if(block == "SKIRMISH"){
                    await logRollResult(player1.NAME, skillTest1, "POWER", player1.POWER);
                    await logRollResult(player2.NAME, skillTest2, "POWER", player2.POWER);

                    skillTest1 = skillTest1 + player1.POWER;
                    skillTest2 = skillTest2 + player2.POWER;

                    if ((skillTest1 > skillTest2) && (player2.SCORE > 0)){
                        player2.SCORE--;
                        console.log(`${player1.NAME} won the battle and ${player2.NAME} lost a point!🐢🐢`);
                        continue;
                    }else if ((skillTest1 < skillTest2) && (player1.SCORE > 0)){
                        player1.SCORE--;
                        console.log(`${player2.NAME} won the battle and ${player1.NAME} lost a point!🐢🐢`);
                        continue;
                    }else{
                        console.log("Nobody lost any ponts.");
                        continue;
                    }
                }
            }
        }

        if (skillTest1 > skillTest2){
            console.log(`${player1.NAME} scored!!🏆`);
            character1.SCORE++;
        } else if (skillTest1 < skillTest2){
            console.log(`${player2.NAME} scored!!🏆`);
            character2.SCORE++;
        }
    }
}

(async function main(){
    console.log(
        `🏁🏁🏁 The race between ${player1.NAME} and ${player2.NAME} is about to begin!! 🏁🏁🏁`
    );
    console.log("🎌 3... 2... 1... GO!! 🎌")
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();