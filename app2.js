class MotherShip {
    constructor(hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy
    }
    attack(alienId) {
        //if alienId-1: index is match with any index of that array
      
        if (Math.random() > this.accuracy) {
            alienCrew[alienId-1].hull -= this.firePower;
            if (alienCrew[alienId-1].hull <= 0) {
                console.log(`the ship with id of ${alienCrew[alienId-1].id} has been destroyed`);
                alienCrew.splice(`${alienId -1}`,1);
                console.log(alienCrew)
                let test = `.a${alienId}`
                 console.log(test)
                const selectedDiv = document.querySelector(test)
                selectedDiv.remove();
                 // console.log(alienCrew[alienId-1].hull)
            } else {
                console.log('you have hit the alien ship but it still alive, it gonna hit you back');
                console.log(alienCrew[alienId-1].hull)
                alienCrew[alienId-1].attack();
            }
        } else {
            console.log('You have miss the attack');
            alienCrew[alienId-1].attack();
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
        if (Math.random() > this.accuracy) {
            motherShip.hull -= this.firePower;
            console.log('the mother ship have been hit');
            console.log(motherShip.hull)
        } else {
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

const alienCrew = []
for (i = 1; i <= 6; i++) {
    let newAlien = new AlienShip(i);
    alienCrew.push(newAlien)
}


alienCrew.forEach(e => {


    const alienDiv = document.createElement('div');
    const alienId = document.createElement('p')
    const alienHull = document.createElement('p');
    const alienFirePower = document.createElement('p');
    const alienAccuracy = document.createElement('p');
    // alienDiv.classList = `a${e.id}`;
    alienId.textContent = `id: ${e.id}`
    alienHull.textContent = `hull: ${e.hull}`;
    alienFirePower.textContent = `firePower: ${e.firePower}`;
    alienAccuracy.textContent = `accuracy: ${Math.round(e.accuracy * 100)}%`;
    alienDiv.append(alienId, alienHull, alienFirePower, alienAccuracy);
    

    const alienObject = document.createElement('div');
    const alienImg = document.createElement('img');
    alienImg.setAttribute('src', './images/alienship.png');
    alienObject.classList=`a${e.id}`;

    alienObject.append(alienDiv, alienImg);
 
    document.querySelector('#alien-ship').appendChild(alienObject);
});

const motherShip = new MotherShip(20, 5, 0.7);
const element = document.querySelector('#form-div input:nth-of-type(2)');
element.addEventListener('click', (event)=>{
    event.preventDefault();
   let inputId = document.querySelector('#form-div input:nth-of-type(1)');
   console.log(inputId.value);
   motherShip.attack(inputId.value);
   




})


if (alienCrew.includes(alienCrew[alienId-1])){

} else{
    console.log('wrong targer')
}