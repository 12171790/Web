//numSides의 default 값을 6으로 지정
//default 값이 있는 매개변수는 default 값이 없는 매개변수 뒤에 적어야함. 함수를 호출할 때 인자 전달 순서 때문.
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

const nums = [13,4,5,21,3,3,1,2,7,6,4,2,60];
//Math.max(nums) -> 실행 결과로 NaN이 나옴. 숫자를 갖고 있는 배열 자체가 전달되기 때문
//이를 해결하기 위해 전개를 사용
//Math.max(...nums) -> 실행 결과로 60. ...을 사용하여 nums 배열을 전개할 수 있음.
//배열 뿐만 아니라 string, 객체 등도 전개할 수 있음.
//console.log(...'hello')와 console.log('h','e','l','l','o')의 결과가 동일.

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
//전개를 사용하여 콘텐츠를 복사.
const allPets = [...cats, ...dogs];

//객체 스프레드
const feline = { legs: 4, family: 'Felidae'};
const canine = { isFurry: true, family: 'Caninae'};

//{...feline, color: black} -> 출력결과 {legs: 4, family: 'Felidae', color: black}

//동일한 특성이 있을 경우 나중에 부른 특성이 최종 값이 됨.
//{...feline, ...canine} -> 출력결과 {legs: 4, family: 'caninae', isFurry: true}

const newObj = {...[2,4,6,8]};
//index를 key 값으로 사용한 객체가 생성됨.
//{0: 2, 1: 4, 2: 6, 3: 8}

//인수 객체 -> arguments. 함수에 전달되는 인수를 갖고 있는 개체
//sum 함수에 어느 인수든 전달할 수 있다.
//arguments가 배열은 아님. 배열 메소드 사용 불가.
function sum() {
    console.log(arguments);
    let total = 0;
    for(let i = 0; i < arguments.length; i++) total += arguments[i];
    return total;
}

//배열 메소드를 사용하기 위해 rest params를 사용. 매개변수들을 한 변수에 모아줌.
//num sumAll 함수에 전달되는 인수를 모두 받아 배열이 됨.
function sumAll(...nums) {
    let total = 0;
    for (let n of nums) total += n;
    return total;

    //return nums.reduce((total, el) => total + el);
}

//function raceResult(gold, silver, bronze, ...else)처럼 함수에서 3개의 인수와 나머지 인수를 따로 받을 수 있다.

//배열 분해.
const scores = [99, 92, 84, 82, 86, 76, 90];

//gold에 99, silver에 92, everyoneElse에 나머지 점수들이 배열 형태로 저장.
const [gold, silver, ...everyoneElse] = scores;

//객체 분해 -> 순서를 따르지 않기 때문에 배열 분해보다 실용적.

const user = {
    email: 'beaki710@naver.com',
    password: '12345a',
    firstName: 'Bae',
    lastName: 'Kiwoong',
    born: '1998',
    city: 'Seoul'
};
//중괄호 안에는 개별 특성을 넣어야함. 특성 이름이 중요. 순서는 상관없음.
//email, firstName, lastName에 user의 key 값에 해당하는 value가 저장됨.
const {email, firstName, lastName} = user;
//birthYear라는 변수에 user.born의 값을 저장. age에 해당하는 user의 key가 없으므로 'N/A'라는 default값 지정. 만약 age가 있다면
//age는 'N/A'가 아닌 user의 age 값이 됨.
const {born: birthYear, age = 'N/A'} = user;


//매개 변수에서의 분해
function fullName(user) {
    //return `${user.firstName} ${user.lastName}`; 
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`;
}

//전달되는 객체의 firstName, lastName에 해당하는 값을 전달 받음. default 값 또한 지정 가능.
function fullName2({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}

/*
movies.map(movie => {
    return `${movie.title} is rated ${movie.score}`;
})
아래와 같이 간소화할 수 있다,
movie.map(({title, score}) =>{
    return `${title} is rated ${score}`;
})
*/