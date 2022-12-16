class AlienShip {
    constructor(id, hull, firePower, accuracy) {
        this.id = id;
        this.hull = hull || getRandomInt(3, 6);
        this.firePower = firePower || getRandomInt(2, 4);
        this.accuracy = accuracy || getRandomArbitrary(0.6, 0.8);

    }
    attack() {
        const attackStatus = document.querySelector('#meseage h2')
      
        if (Math.random() > this.accuracy) {
            motherShip.hull -= this.firePower;
            const targetMother = document.querySelector('#mother-ship div p:nth-of-type(1)');
            const hullOfMother = targetMother.firstChild;
            hullOfMother.textContent = `hull: ${motherShip.hull}`

            function keepGoing() {
                attackStatus.innerText = 'The mother ship has been hit and it is your turn again';
            }
            setTimeout(keepGoing, 5000);
            if (motherShip.hull <= 0) {
                alert('You lost')
            }
        } else {
            // attackStatus.innerText = 'This alien ship has missed target on the mother ship';
            function keepGoing() {
                attackStatus.innerText = 'This alien ship has missed target on the mother ship and it is your turn again';
            }
            setTimeout(keepGoing, 5000);
        }
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
const alienCrew = []
for (i = 1; i <= 6; i++) {
    // let {...newAlien} = new AlienShip(i);
    let newAlien = new AlienShip(i);
    alienCrew.push(newAlien)
}

alienCrew.forEach(e => {
    const alienDiv = document.createElement('div');
    const alienId = document.createElement('p')
    const alienHull = document.createElement('p');
    const alienFirePower = document.createElement('p');
    const alienAccuracy = document.createElement('p');
    alienId.textContent = `id: ${e.id}`
    alienHull.textContent = `hull: ${e.hull}`;
    alienFirePower.textContent = `firePower: ${e.firePower}`;
    alienAccuracy.textContent = `accuracy: ${Math.round(e.accuracy * 100)}%`;
    alienDiv.append(alienId, alienHull, alienFirePower, alienAccuracy);
    const alienObject = document.createElement('div');
    const alienImg = document.createElement('img');
    alienImg.setAttribute('src', './images/alienship.png');
    alienObject.classList = `a${e.id}`;

    alienObject.append(alienDiv, alienImg);

    document.querySelector('#alien-ship').appendChild(alienObject);
});

class MotherShip {
    constructor(hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy
    }
    attack(alienId) {
        let attackStatus = document.querySelector('#meseage h2')
        alienCrew.forEach((e, index) => {
            e["id"] == alienId ? check(index, this.accuracy, this.firePower) : null;
        })
         function check(index, accuracy, firePower) {
            if (alienCrew.includes(alienCrew[index]) === true) {
                if (Math.random() >= accuracy) {
                    alienCrew[index].hull -= firePower;
                    let test = `.a${alienId}`;
                    if (alienCrew[index].hull <= 0) {
                        function keepGoing() {
                            attackStatus.innerText = 'Good Job Commander';
                        }
                        setTimeout(keepGoing, 3000);
                        attackStatus.innerText = `the alien ship with id of ${alienId} has been destroyed`;
                        alienCrew.splice(`${index}`, 1);
                        // let test = `.a${alienId}`
                        const selectedDiv = document.querySelector(test)
                        selectedDiv.remove();
                    } else {
                        let test = `.a${alienId}`
                        const selectedDiv = document.querySelector(test).childNodes;
                        const alienHull = selectedDiv[0].childNodes;
                        alienHull[1].textContent = `hull: ${alienCrew[index].hull}`;
                        function keepGoing() {
                            attackStatus.innerText = 'The alien ship is going to hit you back';
                        }
                        setTimeout(keepGoing, 3000);
                        attackStatus.innerText = 'the mothership have hit the alien ship but it still alive';
                        alienCrew[index].attack();
                    }
                } else {
                    function keepGoing() {
                        attackStatus.innerText = 'The alien ship is going to return the favor';
                    }
                    setTimeout(keepGoing, 3000);
                    attackStatus.innerText = 'the mothership has miss the target';
                    alienCrew[index].attack();
                }
            } 
        }
    }
}



const motherShip = new MotherShip(20, 5, 0.7);
const element = document.querySelector('#form-div input:nth-of-type(2)');
element.addEventListener('click', (event) => {
    event.preventDefault();
    let inputId = document.querySelector('#form-div input:nth-of-type(1)');
    console.log(inputId.value);
    motherShip.attack(inputId.value);
    inputId.value = ''
})

const retreat = document.querySelector('#retreat-div');
retreat.addEventListener('click', () => {
    const answer = prompt('Are you sure that will want to retreat? They will bring another crew to attack again!, please answer yes or no')
    if (answer === 'yes') {
        window.reload();
    } else {
        alert('never give up')
    }
})

