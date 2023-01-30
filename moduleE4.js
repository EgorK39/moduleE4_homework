// // Задание 1 Module E4.3
//
// const obj_1 = {
//     city: "Moscow",
//     age: 27
// };
//
// const obj_2 = Object.create(obj_1)
// obj_2.oCity = 'Kaliningrad';
//
// function obj(object) {
//     for (let key in object) {
//         if (object.hasOwnProperty(key)) {
//             console.log(object[key]);
//         } else {
//             console.log(object[key]);
//         }
//
//     }
// }
//
// obj(obj_1)

// // Задание 2 Module E4.3
//
// const objj = {
//     city: 'Moscow',
//     hello: 'World'
// };
//
// function obj(arg_1, arg_2) {
//     return arg_1 in arg_2;
// }
//
// console.log(obj('hello', objj))

// // Задание 3 Module E4.3
//
// const objFull = {
//     a: 1,
//     b: "2",
//     c: false,
//     d: true
// }
//
// const nullObj = function (obj) {
//     for (let i in obj) {
//         delete obj[i]
//     }
//     return nullObj
// };
//
//
// nullObj(objFull)


// Задание 4 Module E4.3


function Devices(cost, name) {
    this.about = 'прибор работает от розетки'
    this.name = name


}

Devices.prototype.onOrOff = function (action, timeIn) {
    if (action === 'on') {
        console.log(`${this.name} включен в сеть и потребляет электроэнергию`)
        setInterval(function () {
            console.log(timeIn++);
        }, 1000);
    } else if (action === 'off') {
        console.log(`${this.name} выключен из сети`)
    }
}

function DevicesOfLenovo(name, typeOfDevice, cost) {
    this.name = name
    this.typeOfDevice = typeOfDevice
    this.cost = cost

}


DevicesOfLenovo.prototype.onOrOff = function (action, timeIn) {
    if (action === 'on') {
        console.log(`${this.name} включен в сеть и потребляет электроэнергию`)
        setInterval(function () {
            console.log(timeIn++);
        }, 1000);
    } else if (action === 'off') {
        console.log(`${this.name} выключен из сети`)
    }
}

DevicesOfLenovo.prototype = new Devices()

const laptop = new Devices(1500, 'laptop');
const lampe = new Devices(500, 'lampe');
// laptop.onOrOff('on', 0)
lampe.onOrOff('off', 1)
console.log(laptop)

const pc = new DevicesOfLenovo('z580', 'laptop', 500)
pc.onOrOff('on', 4)


console.log(pc)
