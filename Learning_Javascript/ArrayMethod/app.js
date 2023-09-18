const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function print(element) {
//     console.log(element);
// }

// //numbers의 모든 요소에 대해 각각을 print에 전달하고 print 함수를 실행.
// numbers.forEach(print);

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
})

//위와 동일한 동작을 하는 코드. 주로 아래를 활용.
// for (let el of numbers) {
//     console.log(el);
// }

const texts = ['rofl', 'rol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
    return t.toUpperCase();
})

texts; //['rofl', 'rol', 'omg', 'ttyl']
caps; //['ROFL', 'ROL', 'OMG', 'TTYL']

//sum(a, b)로 함수 호출.
const sum = (x, y) => {
    return x + y;
}

//인수가 1개일 떄는 괄호 생략 가능
const square = x => {
    return x * x;
}

const add = function (x, y) {
    return x + y;
}

//중괄호 대신 괄호를 사용하면 return을 사용하지 않고 반환할 수 있다.
// 화살표 함수일 떄만, 코드가 한 줄일 때
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)
//코드를 아래와 같이 한 줄로 적을 수도 있다.
//const rollDie = () => Math.floor(Math.random() * 6) + 1

const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`;
})

const newMoives = movies.map((moive) => {
    return `${movie.title} - ${movie.score / 10}`;
})

//아래 코드를 실행하면 n이 10 미만일 때만 ture를 반환.
//true를 반환한 경우 그 요소를 필터링된 배열에 추가.
//numbers의 모든 요소에 대해 콜백 함수를 실행한 후 필터링된 배열을 반환.
numbers.filter(n => {
    return n < 10;
})

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for (let price of prices) {
    total += price;
}
//위의 for of와 동일한 역할을 하는 코드.
//첫번째 인수로 배열의 요소에 대해 콜백 함수를 실행한 결과를 나타내는 변수. 처음 실행할 때는 배열의 첫번쨰 값을 갖게 됨.
//prices.reduce((total, price) => {}, 100)을 실행하면 reduce의 초기값이 100으로 설정.
//두번째 인수로 배열의 각각의 개별 요소.
prices.reduce((total, price) => {
    return total + price;
})

//배열에서 최솟값 찾기
//min이 price보다 높을 경우 price를 반환하는데 이는 다음 번 순회에서 min이 됨.
prices.reduce((min, price) => {
    if (min > price) return price;
    return min;
})

movies.reduce((bestMovie, curMovie) => {
    if (bestMovie.score < curMovie.score) {
        return curMovie;
    }
    return bestMovie;
})


