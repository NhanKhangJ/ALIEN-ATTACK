class MotherShip {
    constructor(hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy
    }
    attack(alienId) { 
     
//    console.log(alienCrew[2]["id"] == alienId)
// for(let i=0; i <= alienCrew.length;i++){
//     alienCrew[i]["id"] == alienId? console.log(alienCrew[i]) : console.log('not included')
// }
alienCrew.forEach((e ,index) =>{
     e["id"] == alienId ? check(index,motherShip.accuracy,motherShip.firePower): null;
}
)
// alienCrew.every((e ,index) =>{
//     e["id"] == alienId ? check(index,motherShip.accuracy,motherShip.firePower): console.log('wrong target or input has been destroyed');
// }
// )







    // console.log(alienCrew.includes(alienCrew[alienId-1]));
 function check(index, accuracy,firePower ){
 const attackStatus = document.querySelector('#meseage h2')
 console.log(attackStatus)

    if (alienCrew.includes(alienCrew[index]) === true){
        if (Math.random() >= accuracy) {
            alienCrew[index].hull -= firePower;
            if (alienCrew[index].hull <= 0) {
                console.log(`the ship with id of ${alienId} has been destroyed`);
                attackStatus.innerText = `the ship with id of ${alienId} has been destroyed`;
                alienCrew.splice(`${index}`,1);
                console.log(alienCrew)
                let test = `.a${alienId}`
                 console.log(test)
                const selectedDiv = document.querySelector(test)
                selectedDiv.remove();
                 // console.log(alienCrew[alienId-1].hull)
            } else {
                console.log('you have hit the alien ship but it still alive, it gonna hit you back');
                attackStatus.innerText = 'you have hit the alien ship but it still alive, it gonna hit you back';
                console.log(alienCrew[index].hull);
             

                alienCrew[index].attack();
        
                let test = `.a${alienId}`
                const selectedDiv = document.querySelector(test).childNodes;
                const alienHull = selectedDiv[1];
                alienHull.textContent = `hull: ${alienCrew[index].hull}`;
            }
        } else {
            console.log('You have miss the attack');
            alienCrew[index].attack();
        }
    } else{
        console.log('wrong target or input has been destroyed')
    }
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
        const attackStatus = document.querySelector('#meseage h2')
        console.log(attackStatus)
        if (Math.random() > this.accuracy) {
            motherShip.hull -= this.firePower;
            const targetMother = document.querySelector('#mother-ship div p:nth-of-type(1)');
            const hullOfMother = targetMother.firstChild;
            hullOfMother.textContent = `hull: ${motherShip.hull}`
            console.log('the mother ship have been hit');
            attackStatus.innerText = 'the mother ship have been hit';
            console.log(motherShip.hull);           
            if (motherShip.hull <=0){
                alert('You lost')
            }
        } else {
            console.log('This alien ship has missed it is your turn again')
            attackStatus.innerText = 'This alien ship has missed it is your turn again';
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
    // let newAlien = new AlienShip(i);
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
   inputId.value=''
})



