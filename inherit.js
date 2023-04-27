class Parent{
    constructor(){
        this.fatherName = "Adv. palash"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name
    }

    getBaby(){
        return `${this.fatherName} ${this.name}`
    }
}

const name1 = new Child("child: Omee")
const name2 = new Child("Wasif")

console.log(name1.getBaby())
console.log(name2)