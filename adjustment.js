import homeWinProb from './homeWinProb';

function adjustment(away, home, won=true) {
    return 20 * ((won ? 1 : 0) - homeWinProb(away.ELO, home.ELO));
}