# Web

## Javascript 기초 공부
---
### 정리

1. 변수 선언 시 let, const 사용. (var을 사용하지 않음)
2. string에는 여러 메소드가 존재. (mdn에서 검색)
3. null : 값을 지정하는 않는 것으로 설정. (let 변수 = null)
4. undefined : 값이 할당되지 않은 변수에 할당. 아무것도 정의되지 않음을 의미.
5. false, 0, " ", null, undefined, NaN을 제외한 나머지는 true.
6. 논리식이 여러 개 사용된 경우 AND가 OR보다 먼저 계산됨.
7. prompt로 사용자의 입력을 받으면 문자열 형태. 이를 int형으로 바꾸려면 parseInt(input)을 사용.
8. Block은 함수를 제외하고 중괄호가 있는 모든 곳을 가리킴 if문 block 등등.
9. Method는 객체에 종속된 특성으로 함수에 포함되는 개념. 모든 method는 함수이지만 모든 함수가 method는 아님
---
---
#### *Section 15* String

##### 1. 템플릿 리터럴

변수에 저장된 문자열을 사용하여 문장을 만들고 싶을 때 사용.

문자열 안에 표현식을 내장할 수 있는 문자열을 만들고 해당 표현식이 문자열로 바뀜.

템플릿 리터럴에는 작은 따옴표가 아닌 백틱(back-tick) 기호를 사용 `${표현식}`

##### 2. Math 객체

수학과 관련된 메소드와 특성 모음 (PI, round - 반올림, abs, pow, floor - 내림 등)  MDN을 참고할 것!
Math.random() : 0 < random number < 1 임의의 수 생성.

원하는 범위의 난수를 생성하고 싶은 경우 (최대 수 max, 최소 수 min)

const randNumber = Math.floor(Math.random() * max) + min
---
#### *Section 16* Boolean Logic (의사결정)

문자 간의 비교는 유니코드를 기반으로 비교.

==(!=) 이중 등호 : 두 값이 같은지 비교. 타입은 비교하지 않음. 두 값이 다른 타입이면 같아지도록 전환하고 비교.

===(!==) 삼중 등호 : 값과 타입 모두 비교. (주로 사용)

console.log() : 입력한 값을 출력.
alert() : 입력한 메시지의 팝업 창 출력.
prompt() : 사용자로부터 입력을 받아옴(문자열로). -> parseInt()를 사용하면 string을 number로 바꿀 수 있다. (toLowerCase(), toUpperCase() 사용 가능)

HTML에서 script 태그를 활용하여 JavaScript 파일을 HTML에 연결할 수 있음. 보통 body 태그의 맨 마지막에 삽입.

---
#### *Section 17* Data Structure Array

배열 선언 let 변수명 = []; [] 안에 배열에 넣을 값들을 적음. 변수명.length를 이용해 배열의 길이 파악 가능 배열의 길이는 최대 index보다 1만큼 큼. [] 안에 같은 타입의 변수만 넣을 필요는 없음.

배열 간의 ===, == 연산을 할 때 JavaScript는 배열 안 내용은 고려하지 않음. 비교하는건 메모리에서 참조되는 값. let num = []을 하면 num에 메모리 reference 할당.

위의 이유로 인해 const로 배열을 선언하여도 배열 contents는 변경 가능. 새로운 reference를 할당하려 한다면 오류가 발생.

array1[행][열]

**Array에 내장된 Methods**     *MDN을 참고할 것!
1. push : 배열의 가장 끝 부분에 배열 요소 추가. 변수명.push(넣고 싶은 항목) 여러 개를 넣을 수도 있다.
2. pop : 배열의 마지막 요소를 삭제하고 마지막 요소를 반환. 변수명.pop()
3. shift : 배열의 시작 요소를 삭제하고 첫번째 요소를 반환. 변수명.shift()
4. unshift : 배열의 시작 부분에 요소를 추가. 변수명.unshift(넣고 싶은 항목)
5. concat : 2개의 배열을 붙여서 새로운 배열을 만들어냄. array1.concat(array2) array1에 array2를 이어 붙임. array1을 update한 것은 아님.
6. includes : true나 false로 응답. 해당 배열에 요소가 있는지 알려줌. array1.includes('blue') array1에 blue가 있다면 true 반환.
7. indexOf : 배열에 요소가 몇번째 index인지 반환. array1.indexOf('blue') blue가 첫번째 index에 있다면 1을 반환. 만약 array1에 blue가 2개 있다면 첫번째 blue의 위치만을 반환. 배열에 없는 요소를 찾으려 한다면 -1을 반환. 
8. reverse : 배열을 뒤집어줌. 원본을 수정하므로 주의해야함. array1 = [1, 2, 3] array1.reverse()를 하면 [3, 2, 1]을 반환하며 array1이 [1, 2, 3]으로 변함.
9. slice : 배열의 일부를 복사하는 method. array1.slice(시작 index, 끝 index) -> 시작 index부터 끝 index 바로 앞까지 복사. 시작 index와 끝 index 둘 다 생략 가능. slice(-3)을 넣으면 마지막 3개의 요소만 복사.
10. splice : 기존 요소들을 제거하거나 대체, 새로운 요소를 추가하여 원래 배열 자체를 변경. array1.splice(시작 index, 제거할 요소 갯수(새로운 값을 추가할 경우 0), 추가할 새로운 값 (여러 개 추가 가능)).
11. sort : 배열을 정렬하는 method. 함수를 사용해서 배열 방법을 커스터마이징 할 수 있다.

---
*Section 18 Data Structure Object literal*

property = key + value pair를 이용하여 데이터가 저장. 순서보단 데이터를 key - value로 쌍을 이뤄 저장한다는 점이 중요. reference type. 이때 모든 key들은 string 타입으로 변환되어 저장됨.

const person = {firstName: 'Mick', lastName: 'Jagger'}

데이터에 접근하려면 person["firstName"] or person.firstName. [] 안에 표현식을 넣을 수 있음. 예를 들어 변수나 연산 기호 등.

const midterms = {danielle: 96, thomas: 78}에서 thomas의 점수를 바꿀 경우 : midterms.thomas = 79

값을 추가할 경우 : midterms.kiwoong(새로운 key) = 100

배열과 객체를 합쳐 사용할 수 있다.

const comments = [{username: 'Tammy', text: 'lol', votes: 9}];

comments[0].text로 'lol'에 접근가능

---
*Section 19 Loop*

while (조건문) {} -> 조건문이 참일 경우 반복. 반복 횟수를 정하지 않았을 때 유용하게 사용할 수 있다.

for..of는 iterable object에 한해 사용 가능 object literal은 사용 불가. 이러한 경우 for..in을 사용.

---
*Section 20 Function*

함수에게 주어져야 할 인수가 전달되지 않으면 해당 매개변수는 함수 내에서 undefined로 처리.

함수가 두 개 이상의 매개변수를 받을 땐 함수를 호출할 때 전달하는 인수의 순서가 중요. 여러 매개변수를 받을 때 같은 타입이 아니어도 괜찮다.

*Section 21 More About Function*

 if문, for문 등의 block 내에 let이나 const로 선언된 변수는 block 내에서만 유효함. var로 선언된 변수는 block 밖에서도 사용 가능.

 Lexical scope : 부모 함수의 안에 중첩된 내부 함수는 해당 부모 함수 내에서 정의된 변수에 몇 단계를 거치든 접근 가능. 부모 함수에서 내부 함수에 정의된 변수엔 접근 불가.

객체 안의 method 안에서 객체를 가리키는 키워드로 this를 사용. 함수를 호출하는 방식에 따라 this가 가리키는 객체가 달라질 수 있음. 

Try/Catch문 : 둘은 항상 같이 사용.

try {오류를 발생시키려 하거나 오류가 날 것으로 예상되는 코드}

catch {try 안에서 예외나 오류가 나왔을 때 실행할 코드}
