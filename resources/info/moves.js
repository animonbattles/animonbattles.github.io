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
        console.log("Started")
        const beam = document.createElement("img");
        beam.src = movedata.texture || "";
        beam.style.position = "absolute"; // Makes it easier to position for animation
        beam.style.width = "50px";
        beam.style.height = "10px";
        document.body.appendChild(beam);

        // Starting and ending coordinates (you can adjust these)
        const startX = pos1.x; // Start position x-coordinate
        const startY = pos1.y; // Start position y-coordinate
        const endX = pos2.x; // End position x-coordinate
        const endY = pos2.y; // End position y-coordinate
        const duration = 1000; // Animation duration in milliseconds

        // Set initial position and display
        beam.style.left = `${startX}px`;
        beam.style.top = `${startY}px`;
        beam.style.display = "block"; // Show the beam

        // Use CSS transition to animate the movement
        beam.style.transition = `left ${duration}ms linear, top ${duration}ms linear`;

        // Trigger the animation after a short delay
        setTimeout(() => {
            beam.style.left = `${endX}px`;
            beam.style.top = `${endY}px`;
        }, 10);

        // Hide the beam after the animation completes
        setTimeout(() => {
            beam.style.display = "none";
            beam.style.transition = ""; // Reset transition for future animations
        }, duration);
        console.log("end")
    }
};


export default { types, moves, classes }
