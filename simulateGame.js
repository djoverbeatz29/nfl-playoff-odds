import homeWinProb from './homeWinProb';

function simulateGame(awayTeam, homeTeam, isNeutral=false) {
    const winProb = homeWinProb(awayTeam, homeTeam, isNeutral);
    const homeWon = Math.random() < winProb;
    const adjustment = 20 * ((homeWon ? 1 : 0) - winProb);
    homeTeam.ELO += adjustment;
    awayTeam.ELO -= adjustment;
    return homeWon;
}