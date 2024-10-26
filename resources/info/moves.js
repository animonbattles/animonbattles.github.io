const types = {
    Grass: "#26ad50",
};

const moves = {
    "Solar Beam": {
        type: "Grass",
        class: "beam"
    },
    "Grass Whip": {
        type: "Grass",
        class: "slash"
    },
    "Mudshot": {
        type: "Grass",
        class: "projectile",
        amount: 3
    },
    "Entanglement": {
        type: "Grass",
        class: "beam",
        modification: "double"
    },
};

export default { types, moves }
