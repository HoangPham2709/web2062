const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    player: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1.
const [player1, player2] = game.player;
console.log(player1, player2);
//2. 
const [gk, ...fieldPlayer] = player1;
console.log(gk, fieldPlayer);
// 3.
const allPlayer = [...player1, ...player2];
console.log(allPlayer);
// 4.
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Periscic'];
// 5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);
// 6.
const PrintGoals = function (...player) {
    console.log(`${player.length} goals`)
};
// PrintGoals('Davies', 'Muller');
PrintGoals(game.scored);
//7.
team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');

