const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Sub'],
    [47, 'Goal'],
    [61, 'Sub'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Yellow card'],
    [72, 'Sub'],
    [76, 'Goal'],
    [80, 'Red card'],
    [92, 'Goal'],
])

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);
//3.
console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`

);
//4.
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}:${event}`);
}