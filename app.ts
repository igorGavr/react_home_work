// const show = (arr:string[]) => {
//     arr[0].
// }

// const show = (a:number, b: number):number => {
//     return 3
// }

// const show = (a:number, b: number):void => {
// }

// const show = (a:number, b: number):number|string => {
//     return 3
// }

// const user = {name: 'Max', age: 23}
// const user1 : {name:string, age:number} = {age:432, name:'sdf'}

// const showUser = (user: {name:string, age: number}): void => {
//     user.
// }

// const show = (a: number, b:number): {name: string, age: number} => {
//     return {age:23,name:'sdf'}
// }

const user:{name: string, age: number, gender: string} = {name: 'sd', age:23, gender: 'sd'}
const sum = (a: number, b: number):number => {
  return a+b
}
const showSum = (a: number, b:number):void => {
    console.log(a+b)
}
// const incAge = (someUser: { age: number}, inc: number): => {
//   someUser.age+=inc
//
// }

// interface IUser1{
//     id?: number,
//     name: string,
//     age: number
// }
// const user1 : Partial<IUser1> = {age:432, name:'sdf', id: 4}

// interface IUser1<T>{
//     id?: number,
//     name: string,
//     age: number,
//     arr: T[]
// }
// const user1 : IUser1<string> = {age:432, name:'sdf', arr: ['sd', '3']}

// type StateType = [string, (a: number, b: number) => number]
// const useState: StateType = ['text', (a, b) => {
//     return a+b
// }]
// const [first, second] = useState;
// console.log(first)
// console.log(second(3, 4))

// interface IMyArray {
//     array: [number, string, IUser1<number>]
// }
// const my: IMyArray = {array: [3, 'string',{name: 'ire', age: 23, arr:[1, 3]}]}

// // class
// class User {
//     private id?: number
//     name: string
//     age: number
//     constructor(id: number, name: string, age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     getId(): number {
//         return this.id
//     }
//     setId(newId: number): void {
//         this.id = newId
//     }
// }
// const user: User = {name: 'sas', age: 23}
// let user2 = new User(23, 'sd', 23)
// user2.getId()



interface IShapeActions {
    area:()=> number
    perimeter:()=> number
}
class Triangle implements IShapeActions{
    constructor(private a: number, private b: number, private c: number) {
    }
    area(): number {
        return this.a*this.b*this.c
    }
    perimeter(): number {
        return this.a+this.b+this.c
    }
}
class Rectangle implements IShapeActions{
    constructor(private a: number, private b:number) {
    }
    area(): number {
        return this.a*this.b
    }
    perimeter(): number {
        return (this.a+this.b)*2
    }
}
const shapes:IShapeActions[] = [new Triangle(1, 2, 3), new Rectangle(1, 3)]
for (const shape of shapes) {
    console.log(shape.area())
    console.log(shape.perimeter())
}