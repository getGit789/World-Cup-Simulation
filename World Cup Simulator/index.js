import simulateGroups from './tournamentLogic';

const main = () => {
    const output = simulateGroups();

    document.getElementById("output").innerHTML = output;
}

main();