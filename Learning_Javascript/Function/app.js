function sing() {
    console.log('Do');
    console.log('Re');
    console.log('Mi');
}

function greet(firstName/*매개변수*/) {
    console.log(`firstName is ${firstName}`);
}

//greet('Bae'인수)

//함수 표현식
const add = function (x, y) {
    return x + y;
}
//add(3,4)로 호출


//함수를 인수로 받을 수 있다.
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
//callTwice(rollDie()) 이런 식으로 하면 rollDie 함수를 실행한 결과를 인수로 전달하게 됨.
//함수도 하나의 값이라 생각.
callTwice(rollDie);

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        //함수가 하나의 값이므로 return 할 수 있음.
        return function () {
            console.log('I am a good fuction');
        }
    }
    else {
        return function () {
            console.log('You have been infected by a computer virus');
        }
    }
}

/*위 함수를 사용하려면 const mystery = makeMysteryFunc()를 실행하여
mystery에 함수를 저장하고, mystery()를 사용하여 함수를 호출하면 됨.*/

function isBetween(num) {
    return num >= 50 && num <= 100;
}


//factory function
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
//const testRange = makeBetweenFunc(100, 200)
//testRange(150)
//100~200 사이의 수를 갖는지 검사하는 testRange 함수를 만들고 150이 범위에 속하는지 확인

// const myMath = {
//     PI: 3.141592,
//     square: function (num) {
//         return num*num;
//     },
//     cube: function (num) {
//         return num**3;
//     }
// }
//위 같은 객체를 아래와 같이 표현 가능
const myMath = {
    PI: 3.141592,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const puppy = {
    name: 'Kisoon',
    color: 'Brown and white',
    breed: 'shih tzu',
    bark() {
        console.log(`${this.name} says BOW WOW`);
    }
}

const bark2 = puppy.bark();
//위 함수를 실행하면 this가 가리키는 객체로 window가 나옴.
//window는 JavaScript의 최상위 객체.
//bark2()와 window.bark2()는 동일한 명령어.
//따라서 bark2를 실행하면 this가 가리키는 객체로 window가 나오는 것임.

try {
    hello.toUpperCase();
}
catch (e) {
    console.log(e);
}

