// Code your solution in this file!

function distanceFromHqInBlocks(streetBlock) {
    if (streetBlock >= 42) {
        return (streetBlock - 42);
    } else {
        return (42- streetBlock);
    }
}

function distanceFromHqInFeet(streetBlock) {
    return distanceFromHqInBlocks(streetBlock) * 264;
}

function distanceTravelledInFeet(pickUpBlock, destinationBlock) {
    if (pickUpBlock > destinationBlock) {
        return (pickUpBlock - destinationBlock) * 264;
    } else {
        return (destinationBlock - pickUpBlock) *264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far';
    }
}