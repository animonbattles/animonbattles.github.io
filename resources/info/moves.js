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
        console.log("Started");

        const beam = document.createElement("img");
        beam.src = movedata.texture || "";
        beam.style.position = "absolute"; // Absolute for precise positioning
        beam.style.width = "10px"; // Initial width (small size)
        beam.style.height = "100px"; // Initial height (small size)
        document.body.appendChild(beam);

        // Starting and ending coordinates
        const startX = pos1.x; // Start x-coordinate
        const startY = pos1.y; // Start y-coordinate
        const endX = pos2.x; // End x-coordinate
        const endY = pos2.y; // End y-coordinate

        // Calculate distance and angle
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convert radians to degrees

        // Set initial position and rotation
        beam.style.left = `${startX}px`;
        beam.style.top = `${startY}px`;
        beam.style.transformOrigin = "left center"; // Scale from the left edge
        beam.style.transform = `rotate(${angle}deg) scaleX(0)`; // Start with 0 width, rotated

        // Animate scale to final width
        beam.style.transition = "transform 1s linear"; // 1-second duration for scaling
        beam.style.transform = `rotate(${angle}deg) scaleX(${distance / 10})`; // Scale width to distance

        // Remove beam after 2 seconds
       // setTimeout(() => {
        //    beam.remove(); // Remove the element from the DOM
        //    console.log("Beam animation ended and removed");
        //}, 2000);
    }
};


export default { types, moves, classes }
