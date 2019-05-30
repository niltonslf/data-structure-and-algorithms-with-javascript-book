interface Comparable<T> {
    compareTo(b: T): number
}


class MyObject implements Comparable<MyObject>{
    age: number

    /**
     *Creates an instance of MyObject.
     * @param {*} age
     * @memberof MyObject
     */
    constructor(age){
        this.age = age
    }

    compareTo(b: MyObject) : number {
        if(this.age === b.age) return 0
        return this.age > b.age ? 1 : -1
    }
}


const obj = new MyObject(16)
const obj2 =  new MyObject(18)

console.log(obj.compareTo(obj2))

