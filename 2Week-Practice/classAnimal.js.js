
class Animal {
    constructor(name, species, size){
    this.name = name,
    this.species = species,
    this.size = size
        }
}

class Dog extends Animal {
    constructor (name, species, size, isHairy) {
    super (name, species, size)
    this.isHairy = isHairy
    }
    }
let ahsoka = new Dog ('Ahsoka', 'Lab', 'Medium', 'Extremely')
console.log (ahsoka);