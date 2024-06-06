"use strict";

const superHeros = {
    Tony: 42,
    Peter: 18,
    Steve: 104,
    Bruce: 38,
    Thor: 1055
}

const displayHeroAge = () => {
    let heroList = Object.entries(superHeros).map(([name, age]) => `${name}: ${age}`).join("<br>");
    document.getElementById("ageInput").innerHTML = `Age of Super Heros: <br><br>${heroList}`;
    document.getElementById("heroBtn").addEventListener("click", (e) => {
        let ageOutput = averageAge(superHeros);
        document.getElementById("ageOutput").innerHTML = `Average Age of all Super Heros: <br> ${ageOutput}`
    });
}

function averageAge(superHeros) {
    let age = 0;
    let i = 0;
    let totalAge = 0;
    for (let key in superHeros) {
        console.log(key);
        if (superHeros.hasOwnProperty(key)) {
            i += 1;
            age = superHeros[key];
            totalAge += age;
        }
    }
    return totalAge / i;
}

displayHeroAge();