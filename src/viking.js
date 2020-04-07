// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
    }

}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name 
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0)
            return `${this.name} has received ${damage} points of damage`

        if(this.health <= 0)
            return `${this.name} has died in act of combat`
    }

    battleCry(){
        return `Odin Owns You All!`
    }
    

}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0)
            return `A Saxon has received ${damage} points of damage`

        if(this.health <= 0)
            return `A Saxon has died in combat`
    }

}


// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = [] 
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }


    vikingAttack(){
        let i = Math.floor(Math.random()*this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[i]
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        let damage = randomViking.strength
        let message = randomSaxon.receiveDamage(damage)

        if(randomSaxon.health <= 0)
            this.saxonArmy.splice(i,1)
       
        return message
    }

    saxonAttack(){
        let i = Math.floor(Math.random()*this.vikingArmy.length)
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let randomViking = this.vikingArmy[i]

        let damage = randomSaxon.strength
        let message = randomViking.receiveDamage(damage)

        if(randomViking.health <= 0)
            this.vikingArmy.splice(i,1)
       
        return message
    }

    showStatus(){
        if(this.vikingArmy.length === 0)
            return 'Saxons have fought for their lives and survived another day...'

        if(this.saxonArmy.length === 0)
            return "Vikings have won the war of the century!"

        return "Vikings and Saxons are still in the thick of battle."
    }
}
