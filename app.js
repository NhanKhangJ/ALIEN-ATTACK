class MotherShip {
    constructor(hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy
    }
    attack(alienId) {
        const result = alienCrew.find(e => { return e.id === alienId});
        result.hull -= this.firePower;
      if (Math.random() > this.accuracy){         
         if (result.hull <= 0){
            console.log(`the ship with id of ${result.id} has been destroyed`)
        } else {
            console.log('you have hit the alien ship but it still alive, it gonna hit you back');
            console.log(result.hull)
            result.attack();
        }
      }else{
        console.log('You have miss the attack');
        result.attack();
      }
    }
}
class AlienShip {
    constructor(id, hull, firePower, accuracy) {
        // afunction which pass in two pass in two number and pick a number between them
        this.id = id;
        this.hull = hull || getRandomInt(3, 6);
        this.firePower = firePower || getRandomInt(2, 4);
        this.accuracy = accuracy || getRandomArbitrary(0.6, 0.8);

    }
    attack() {
     if (Math.random() > this.accuracy){
        motherShip.hull -= this.firePower;
        console.log('the mother ship have been hit')
       }else{
        console.log('This alien ship has missed it is your turn again') 
       }
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}
const motherShip = new MotherShip(20, 5, 0.7);
const alienCrew = []
for (i = 1; i <= 6; i++) {
    let newAlien = new AlienShip(i);
    alienCrew.push(newAlien)
}
console.log(alienCrew)
console.log(alienCrew[2].id)


console.log(motherShip);
motherShip.attack(3);

// If all the allien hull is === 0 mean you win, if your hull is equal === 0 mean you lose