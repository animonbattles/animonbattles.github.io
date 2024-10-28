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

const classes = {
    beam: (movedata, pos1, pos2) => {
        const beam = document.createElement("img");
        beam.src = movedata.texture || "";
        beam.style.position = "absolute";
        beam.style.height = "100px"; // beam width
        beam.style.width = "10px"
        document.body.appendChild(beam);

        const startX = pos1.x;
        const startY = pos1.y;
        const endX = pos2.x;
        const endY = pos2.y;

        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        beam.style.left = `${startX}px`;
        beam.style.top = `${startY}px`;
        beam.style.transformOrigin = "left center";
        beam.style.transform = `rotate(${angle}deg) scaleX(0)`;

        beam.style.transform = `rotate(${angle}deg) scaleX(${distance / 10})`;

        setTimeout(() => {
            beam.remove();
        }, 2000);
    }
};


export default { types, moves, classes }
