

// регулярные выражения

    // . - любой символ
    // ^ - начало строки
    // $ - конец строки
    // \ - экранирование(\$,  \.$)
    // \d - цифры(\d\d\d - строка с тремя цифрами)
    // \w - буквы

// +7(907)34-58-990  - \+\d\(\d{3}\)\s\d{3}\s\d{2}\s\d{3}


// 18.04.2023

// const name = Symbol("name")
// const name1 = Symbol("name")


// console.log(name)
// console.log(name != name1)

// let user = {
//     login: "user1",
//     [Symbol("data")]: "This is important user data"
// }
// console.log(user);
// console.log(user);

// user.forEach(element => {
//     console.log(element)
// });

// for(let elem in user){
//     console.log(elem)
// }

// const arr = [4536, 6364, 65436, 343]

// // const [numOne, numTwo, ...rest] = arr
// const [numOne, numTwo, , numFour] = arr

// console.log(numOne, numTwo, numFour)

// import axios from 'axios'

// console.log(axios)
// let obj = {name:'Aleksey', age:30}

// let {name, age} = obj
// console.log(name)
// console.log(age)


class Product{
    constructor(name, price){
        this._name = name
        this._price = price
    }
    set name(name){
        if(name.trim().length !== 0){
            this._name = name
        }
        else{
            console.log("This is not suitable data");
        }
    }
}