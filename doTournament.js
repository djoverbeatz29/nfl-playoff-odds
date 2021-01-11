import doRound from './doRound';

function doTournament(bracket) {
    while (bracket.AFC.current_teams.length>1 || bracket.NFC.current_teams.length>1) {
        bracket=doRound(bracket);
    }
    const [AFC, NFC] = [bracket.AFC.current_teams[0], bracket.NFC.current_teams[0]];
    return simulateGame(AFC, NFC, true) ? NFC : AFC;
}