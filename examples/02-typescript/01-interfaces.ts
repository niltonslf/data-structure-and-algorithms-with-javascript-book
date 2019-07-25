interface Person {
    name: String
    age: number
}

function printName(person: Person){
    console.log(person.name)
}


const john = { name: 'John', age: 21 }
const mary = { name: 'Mary', age: 21, phone: '123-45678' }

printName(john)
printName(mary)

