import { game } from "../gameData.js"

export function quarry(){    
    let jobSupply = game.miner/game.miner_jobs;
    if(jobSupply > 1) jobSupply = 1;
    if(!jobSupply) jobSupply = 0;

    //###########################################

    const productivity = jobSupply*game.productivity;

    game.stone_balance += (game.quarry*1)*productivity;
}