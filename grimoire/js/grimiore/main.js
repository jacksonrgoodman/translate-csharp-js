// Put your code here
console.log("Do you believe in magic?");
console.log("-----------------------");

const spells = [
    {
        name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyReqired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyReqired: 2.99
    },
    {
        name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyReqired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyReqired: 100.0
    },
    {
        name: "Convince your relatives you are correct",
        IsEvil: false,
        EnergyReqired: 2921.5
    }
]


const spellbook = () => {
    let goodbook = spells.filter(spell => !spell.IsEvil)
    console.log("Good Book")
    console.log("")
    goodbook.forEach(spell => console.log(`   ${spell.name}`))
    console.log("")
    let evilbook = spells.filter(spell => spell.IsEvil)
    console.log("Evil Book")
    console.log("")
    evilbook.forEach(spell => console.log(`   ${spell.name}`))
}

spellbook()