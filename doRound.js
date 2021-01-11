export default function doRound(bracket) {
    for (const key of ['AFC', 'NFC']) {
        const roundObj=bracket[key];
        currTeams = roundObj.current_teams;
        currTeams.sort((a,b)=>a.seed>b.seed?1:-1);
        while (currTeams.length > 0) {
            const [home, away]=[currTeams.shift(), currTeams.pop()];
            roundObj.next_teams.push(simulateGame(away,home)? home : away);
        }
        [roundObj.next_teams, roundObj.current_teams]=[roundObj.current_teams, roundObj.next_teams];
    }
    return bracket;
}