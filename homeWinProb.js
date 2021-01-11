export default function homeWinProb(awayTeam, homeTeam) {
    const [awayELO, homeELO] = [awayTeam.ELO, homeTeam.ELO + 50];
    return 1 / (10 ** (-(homeELO-awayELO)/400) + 1);
 }