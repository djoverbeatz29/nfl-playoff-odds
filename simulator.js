import makeBracket from './makeBracket';
import doTournament from './doTournament';

export default function simulator(N=100) {
    const teamBracketObj = makeBracket();
    const winnerObj={};
    for (let i=0;i<N;i++) {
        const teams=JSON.parse(JSON.stringify(teamBracketObj.teams));
        const bracket = teamBracketObj.bracket;
        const winner=doTournament(bracket);
        winnerObj[winner.name]=(winnerObj[winner.name] || 0)+1
    }
    const winners = Object.keys(winnerObj).map(team=>[team, winnerObj[team]]);
    winners.sort((a,b)=>a[1]<b[1]?1:-1);
    winners.forEach(team=>console.log(`${team[0]}: ${(team[1]/N * 100).toFixed(1)}%`));
    return winnerObj;
}