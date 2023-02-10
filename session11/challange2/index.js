const calcAverageHunamAge = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);
    const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    return average;
};
const avg1 = calcAverageHunamAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHunamAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);