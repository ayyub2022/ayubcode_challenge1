function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (points >= 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", points);
        }
    }
}

// Example usage:
checkSpeed(80); // Should print: "Points: 2"