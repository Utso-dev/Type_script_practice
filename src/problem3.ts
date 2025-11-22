class person {
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age =age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

const person1 = new person("Utso Sarkar", 25)

console.log(person1.getDetails())

