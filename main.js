/* 
    TASK 1

    Необходимо создать пустой объект.
    Пускай это будет объект вашего любимого актера. 
    Добавьте в объект свойства через точечную запись: 
    имя, возраст, пол, фильмы(массив), семейное положение(boolean).
    А потом извне удалите последнее свойство.

*/

// const favouriteActor = {
    
// };
// favouriteActor.name = 'Ryan Gosling';
// favouriteActor.age = 44;
// favouriteActor.movies = ['Drive', 'Blade Runner 2049', 'Barbie', 'The Believer'];
// favouriteActor.marriage = true;
// delete favouriteActor.marriage;

// console.log(favouriteActor)

/* 
    TASK 2

    Необходимо написать функцию, которая проверяет является ли объект пустым или нет.

*/
// let obj = {};

// function isEmpty(object) {
//     let isEmpty = true
//     for (let key in object) {
//         isEmpty = false;
//         break;
//     }
//     if (isEmpty) {
//         console.log('Этот обьект пустой')
//     } else console.log('Этот обьект не пустой')
// }

// isEmpty(obj)


// Второй вариант
// let obj = {};

// function isEmpty(object) {
//     for(let key in object) {
//         console.log('Этот обьект не пустой')
//         return;
//     }
//     console.log('Этот обьект пустой')
// }
// isEmpty(obj)

/* 
    TASK 3

    var staff = {
        'Ivan' : 2000,
        'Andrey' : 1440,
        'Marina' : 5187,
        'Oleg' : 3309,
        'Anna' : 2304,
    };

    Дан объект. Напишите функцию, которая вернёт имя самого высокооплачиваемого работника. 
    
*/

var staff = {
        'Ivan' : 2000,
        'Andrey' : 1440,
        'Marina' : 5187,
        'Oleg' : 3309,
        'Anna' : 2304,
    };

function maxSalary(object) {
    let max = 0;
    let name = null;
    for (let key in object) {
        if (object[key] > max) {
            max = object[key];
            name = key;
        }
    }
    return name
}

console.log(maxSalary(staff))


/* 
    TASK 4
    var staffWithGender = {
        'Ivan' : {salary: 2000, gender: 'male'},
        'Andrey' : {salary: 1440, gender: 'male'},
        'Marina' : {salary: 5187, gender: 'female'},
        'Oleg' : {salary: 3309, gender: 'male'},
        'Anna' : {salary: 2304, gender: 'female'},
    };
    Необходимо написать МЕТОД , который будет находить женщин
    и в качестве премии прибавит им 10 процентов к зарплате.
    В итоге исходный объект и его свойства должны измениться с учетом премий. 
    
*/

// var staffWithGender = {
//     'Ivan' : {salary: 2000, gender: 'male'},
//     'Andrey' : {salary: 1440, gender: 'male'},
//     'Marina' : {salary: 5187, gender: 'female'},
//     'Oleg' : {salary: 3309, gender: 'male'},
//     'Anna' : {salary: 2304, gender: 'female'},
//     femalePromotion : function(obj) {
//         for (let key in obj) {
//            if (obj[key].gender === 'female') {
//             obj[key].salary = Math.round(obj[key].salary * 1.10);
//            };
//         }
//     }
// };

// staffWithGender.femalePromotion(staffWithGender)

// console.log(staffWithGender)


// Вариант 2 : 

// var staffWithGender = {
//     'Ivan' : {salary: 2000, gender: 'male'},
//     'Andrey' : {salary: 1440, gender: 'male'},
//     'Marina' : {salary: 5187, gender: 'female'},
//     'Oleg' : {salary: 3309, gender: 'male'},
//     'Anna' : {salary: 2304, gender: 'female'},
//     femalePromotion: function() {
//         for (let key in this) {
//             if (this[key].gender === 'female') {
//                 this[key].salary = Math.round(this[key].salary *1.10);
//             }
//         }
//     }
// }

// staffWithGender.femalePromotion()

// console.log(staffWithGender)

/* 
    TASK 5

    Создайте объект. Пускай это будет объект вашего любимого музыкального исполнителя.
    Внутри объекта опишите этого испольнителя
    (Имя, пол, возраст, рост,список самых популярных песен),
    и создайте внутри объекта метод. 
    Этот метод должен выводить в консоль всю информацию об этом артисте.
    Каждое свойство должно выводиться на отдельной строке.

*/

// var favArtist = {
//     name : 'The Weekend',
//     gender : 'male',
//     age : 35,
//     height : 173,
//     songs : ["Starboy", "False Alarm", "Blinding Lights"],
//     artistInfo : function() {
//         for (let key in this) {
//             if(typeof this[key] !== 'function') {
//                 console.log(key + ": " + this[key]);
//             } 
//         }
//     }
// }
// favArtist.artistInfo()