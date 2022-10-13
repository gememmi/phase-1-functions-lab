
const hq = 42;

function distanceFromHqInBlocks(start){
    return Math.abs( hq - start);
}

distanceFromHqInBlocks(43);

const block = 264;

function distanceFromHqInFeet(start){
    return Math.abs( hq - start)* block;
    
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start,destination){
    return Math.abs(start - destination) * block;
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;
    }
    else if (distanceTravelledInFeet(start,destination) >= 400 && distanceTravelledInFeet(start,destination) < 2000){
        return ((Math.abs(start - destination) * block) - 400)* .02;
    }
    else if (distanceTravelledInFeet (start,destination) >= 2000 && distanceTravelledInFeet(start,destination) < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }

}
calculatesFarePrice(32, 24); 