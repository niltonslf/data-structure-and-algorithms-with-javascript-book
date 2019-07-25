// Bitwise (Operador bit a bit)
console.log('5 & 1:', 5 & 1)
console.log('5 | 1:', 5 | 1)
console.log('(~5):', ~5)
console.log('5 ^ 1:', 5 ^ 1)
console.log('5 << 1:', 5 << 1)
console.log('5 >> 1:', 5 >> 1)

// TYPE OF
console.log('typeof 1', typeof 1)
console.log('typeof packt', typeof 'packt')
console.log('typeof true', typeof true)
console.log('typeof [1,2,3]', typeof [1, 2, 3])
console.log('typeof {name: jhon}', typeof { name: 'jhon' })

// FALSE AND TRUE
console.log('\ntruthy and falsy\n')
function testTruthy(val){
    return val? console.log('truthy') : console.log('falsy')
} 

testTruthy(true)
testTruthy(false)
testTruthy(new Boolean(false))
testTruthy('')
testTruthy('Packt')
testTruthy(new String(''))
testTruthy(1)
testTruthy(-1)
testTruthy(NaN)
testTruthy(new Number(NaN))
testTruthy({})

let obj = {name: 'jhon'}
testTruthy(obj)
testTruthy(obj.name)
testTruthy(obj.age)



let  n = ''

function Developer(){
    this.name = 'Nilton'
    this.job = 'Full stack developer'
    this.printDeveloper = function(){
        console.log(`${this.name} is a ${this.job}`);
    }
}

let developer = new Developer()
console.log(developer.name)
developer.printDeveloper()