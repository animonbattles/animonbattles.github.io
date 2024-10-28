const types = {
    Grass: "#26ad50",
};

const moves = {
    "Solar Beam": {
        type: "Grass",
        class: "beam",
        texture: "https://i.postimg.cc/9Fh3Jxfr/Solar-Beam.png"
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
        document.body.appendChild(beam);

        const startX = pos1.x;
        const startY = pos1.y;
        const endX = pos2.x;
        const endY = pos2.y;

        const deltaX = endX - startX;
        console.log("delta x: ", deltaX)
        const deltaY = endY - startY;
        console.log("delta y: ", deltaY)
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        beam.style.left = `${startX}px`;
        beam.style.top = `${startY}px`;
        beam.style.transformOrigin = "center";
        beam.style.transform = `rotate(${angle}deg) scaleX(0)`;

        beam.style.transition = "transform 1s linear";
        beam.style.transform = `rotate(${angle}deg) scaleX(${distance / 10})`;

        setTimeout(() => {
            beam.remove();
        }, 2000);
    }
};


export default { types, moves, classes }
