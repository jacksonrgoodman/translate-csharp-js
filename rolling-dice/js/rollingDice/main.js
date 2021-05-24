// Put your code here
console.log("Let's Roll")
console.log("🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲")

let roll = () => {
    for (let i = 0; i < 1; i++) {
        let firstDice = Math.floor(Math.random() * 6) + 1
        let secondDice = Math.floor(Math.random() * 6) + 1
        if (firstDice === secondDice) {
            console.log(`${firstDice} + ${secondDice} = ${firstDice + secondDice} DUBS!`)
        } else {
            console.log(`${firstDice} + ${secondDice} = ${firstDice + secondDice}`)
        }
    }
}

roll()