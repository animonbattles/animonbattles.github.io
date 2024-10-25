import species from "../../info/animon.js";
import moves from "../../info/moves.js";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMoveset(types) {
    let availableMoves = [];
    for (const type of types) {
        availableMoves = availableMoves.concat(moves[type] || []);
    }
    
    const moveset = [];
    while (moveset.length < 4 && availableMoves.length > 0) {
        const randomMove = availableMoves.splice(getRandomInt(0, availableMoves.length - 1), 1)[0];
        if (!moveset.includes(randomMove)) {
            moveset.push(randomMove);
        }
    }
    return moveset;
}

class psr {
    constructor() {
        this.melee = getRandomInt(50, 150); // show up as x-50
        this.ranged = getRandomInt(50, 150);
        this.hp = getRandomInt(50, 150);
        this.speed = getRandomInt(-5, 5); // show up as (x+5)x10
        this.meleedefense = getRandomInt(0, 50); // show up as x*2
        this.rangeddefense = getRandomInt(0, 50);
    }
}

class animon {
    constructor(name, level) {
        const currentpsr = new psr();
        this.name = name;
        this.level = level;
        const speciesData = species.find(species => species.name === name);

        if (speciesData) {
            this.maxhp = speciesData.basehp * (1 + level / 25) * (currentpsr.hp / 100);
            this.currenthp = this.maxhp;
            this.psr = currentpsr;
            this.moveset = generateMoveset(speciesData.types);
        } else {
            console.error("Species not found!");
            this.maxhp = 0;
            this.currenthp = 0;
            this.psr = currentpsr;
            this.moveset = [];
        }
    }
}

// Example of creating a new animon
const myAnimon = new animon("Cocosip", 10);
console.log(myAnimon);
