const checkDog = function (dogsJulia, dogKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

    // dogsJulia.splice(1, 3);
    const dogs = dogsJuliaCorrected.concat(dogKate);
    console.log(dogs);


    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`dog number ${i + 1} is still a punny `);
        }

    });
};
checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);