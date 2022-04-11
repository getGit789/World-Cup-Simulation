import groups from 'groups.js';

let simulateGroups = () => {
    let output = '';

    groups.forEach(e => {
        e.members = randomizeResults(e.members);

        const firstTeam = e.members[0];
        const secondTeam = e.members[1];
        const thirdTeam = e.members[2];
        const fourthTeam = e.members[3];

        output += `Group ${e.name}: \n`;
        output += `1. ${firstTeam.team.name} (${firstTeam.team.ranking}) ${firstTeam.wins} ${firstTeam.draws} ${firstTeam.losses} ${firstTeam.goalsFor}:${firstTeam.goalsAgainst} ${firstTeam.points} \n`;
        output += `2. ${secondTeam.team.name} (${secondTeam.team.ranking}) ${secondTeam.wins} ${secondTeam.draws} ${firstTeam.losses} ${firstTeam.goalsFor}:${firstTeam.goalsAgainst} ${firstTeam.points} \n`;
        output += `3. ${thirdTeam.team.name} (${thirdTeam.team.ranking}) ${thirdTeam.wins} ${thirdTeam.draws} ${firstTeam.losses} ${firstTeam.goalsFor}:${firstTeam.goalsAgainst} ${firstTeam.points} \n`;
        output += `4. ${fourthTeam.team.name} (${fourthTeam.team.ranking}) ${fourthTeam.wins} ${fourthTeam.draws} ${firstTeam.losses} ${firstTeam.goalsFor}:${firstTeam.goalsAgainst} ${firstTeam.points} \n \n`;
        // stigao sam do draws
    });

    return output;
}

let randomizeResults = (group => {
    for (let i = 0; i < group.length; i++) {
        for (let j = i; j < group.length; j++) {
            if (i == j) continue;
            else {
                let team1 = group[i];
                let team2 = group[j];
                let goalsFirstTeam = Math.floor(Math.random() * 10);
                let goalsSecondTeam = Math.floor(Math.random() * 10);

                if (goalsFirstTeam > goalsSecondTeam) {
                    team1.wins++;
                    team1.points += 3;
                    team1.goalsFor += goalsFirstTeam;
                    team1.goalsAgainst += goalsSecondTeam;
                    team1.goalDifference = team1.goalsFor - team1.goalsAgainst;

                    team2.losses++;
                    team2.goalsFor += goalsSecondTeam;
                    team2.goalsAgainst += goalsFirstTeam;
                    team2.goalDifference = team2.goalsFor - team2.goalsAgainst;
                } else if (goalsFirstTeam < goalsSecondTeam) {
                    team1.losses++;
                    team1.goalsFor += goalsFirstTeam;
                    team1.goalsAgainst += goalsSecondTeam;
                    team1.goalDifference = team1.goalsFor - team1.goalsAgainst;

                    team2.wins++;
                    team2.points += 3;
                    team2.goalsFor += goalsSecondTeam;
                    team2.goalsAgainst += goalsFirstTeam;
                    team2.goalDifference = team2.goalsFor - team2.goalsAgainst;
                } else {
                    team1.points++;
                    team1.draws++;
                    team1.goalsFor += goalsFirstTeam;
                    team1.goalsAgainst += goalsSecondTeam;
                    
                    team2.points++;
                    team2.draws++;
                    team2.goalsFor += goalsFirstTeam;
                    team2.goalsAgainst += goalsSecondTeam;
                }

                group[i] = team1;
                group[j] = team2;
            }
        }
    }

    group.sort((a, b) => {
        if (a.points > b.points) return -1;
        if (a.points < b.points) return 1;

        if (a.goalDifference > b.goalDifference) return -1;
        if (a.goalDifference < b.goalDifference) return 1;

        if (a.goalsFor > b.goalsFor) return -1;
        if (a.goalsFor < b.goalsFor) return 1;
    });

    return group;
});

export {
    simulateGroups
}