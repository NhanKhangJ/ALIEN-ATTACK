// // class MotherShip {
// //     constructor(hull, firePower, accuracy) {
// //         this.hull = hull;
// //         this.firePower = firePower;
// //         this.accuracy = accuracy
// //     }
// //     attack(alienId) {
// //         const result = alienCrew.find(e => {
// //             return e.id === alienId
// //         });
// //         result.hull -= this.firePower;
// //         if (Math.random() > this.accuracy) {
// //             if (result.hull <= 0) {
// //                 console.log(`the ship with id of ${result.id} has been destroyed`);
// //             } else {
// //                 console.log('you have hit the alien ship but it still alive, it gonna hit you back');
// //                 console.log(result.hull)
// //                 result.attack();
// //             }
// //         } else {
// //             console.log('You have miss the attack');
// //             result.attack();
// //         }
// //     }
// // }
// class AlienShip {
//     constructor(id, hull, firePower, accuracy) {
//         // afunction which pass in two pass in two number and pick a number between them
//         this.id = id;
//         this.hull = hull || getRandomInt(3, 6);
//         this.firePower = firePower || getRandomInt(2, 4);
//         this.accuracy = accuracy || getRandomArbitrary(0.6, 0.8);

//     }
//     attack() {
//         if (Math.random() > this.accuracy) {
//             motherShip.hull -= this.firePower;
//             console.log('the mother ship have been hit')
//         } else {
//             console.log('This alien ship has missed it is your turn again')
//         }
//     }
// }

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
// }

// const alienCrew = []
// for (i = 1; i <= 6; i++) {
//     let newAlien = new AlienShip(i);
//     alienCrew.push(newAlien)
// }

document.addEventListener("DOMContentLoaded", (event) =>{


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
                console.log('the mother ship have been hit')
            } else {
                console.log('This alien ship has missed it is your turn again')
            }
        }
    }
    const alienCrew = []
    for (i = 1; i <= 6; i++) {
        let newAlien = new AlienShip(i);
        alienCrew.push(newAlien)
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
    }
    
    class MotherShip {
        constructor(hull, firePower, accuracy) {
            this.hull = hull;
            this.firePower = firePower;
            this.accuracy = accuracy
        }
        attack(alienId) {
            const result = alienCrew.find(e => {
             
                return e.id === alienId
            });
           const re2 = alienCrew.find(e =>{
             e.id === alienId
           })
           console.log(re2);


            result.hull -= this.firePower;
            if (Math.random() > this.accuracy) {
                if (result.hull <= 0) {
                    console.log(`the ship with id of ${result.id} has been destroyed`);
                } else {
                    console.log('you have hit the alien ship but it still alive, it gonna hit you back');
                    console.log(result.hull)
                    result.attack();
                }
            } else {
                console.log('You have miss the attack');
                result.attack();
            }
        }
    }


    const motherShip = new MotherShip(20, 5, 0.7);
    const element = document.querySelector('#form-div input:nth-of-type(2)');
    element.addEventListener('click', (event)=>{
        event.preventDefault();
       let inputId = document.querySelector('#form-div input:nth-of-type(1)');
       console.log(inputId.value);
       motherShip.attack(inputId.value)



    
    })

    alienCrew.forEach(e => {
        const alienDiv = document.createElement('div');
        const alienId = document.createElement('p')
        const alienHull = document.createElement('p');
        const alienFirePower = document.createElement('p');
        const alienAccuracy = document.createElement('p');
        alienDiv.classList = `a${e.id}`;
        alienId.textContent = `id: ${e.id}`
        alienHull.textContent = `hull: ${e.hull}`;
        alienFirePower.textContent = `firePower: ${e.firePower}`;
        alienAccuracy.textContent = `accuracy: ${Math.round(e.accuracy * 100)}%`;
        alienDiv.append(alienId, alienHull, alienFirePower, alienAccuracy);
        document.querySelector('#alien-ship').appendChild(alienDiv);
    });

})

// alienCrew.forEach(e => {
//     const alienDiv = document.createElement('div');
//     const alienId = document.createElement('p')
//     const alienHull = document.createElement('p');
//     const alienFirePower = document.createElement('p');
//     const alienAccuracy = document.createElement('p');
//     alienDiv.classList = `a${e.id}`;
//     alienId.textContent = `id: ${e.id}`
//     alienHull.textContent = `hull: ${e.hull}`;
//     alienFirePower.textContent = `firePower: ${e.firePower}`;
//     alienAccuracy.textContent = `accuracy: ${Math.round(e.accuracy * 100)}%`;
//     alienDiv.append(alienId, alienHull, alienFirePower, alienAccuracy);
//     document.querySelector('#alien-ship').appendChild(alienDiv);
// });