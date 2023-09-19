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

---
*Section 21 More About Function*

 if문, for문 등의 block 내에 let이나 const로 선언된 변수는 block 내에서만 유효함. var로 선언된 변수는 block 밖에서도 사용 가능.

 Lexical scope : 부모 함수의 안에 중첩된 내부 함수는 해당 부모 함수 내에서 정의된 변수에 몇 단계를 거치든 접근 가능. 부모 함수에서 내부 함수에 정의된 변수엔 접근 불가.

객체 안의 method 안에서 객체를 가리키는 키워드로 this를 사용. 함수를 호출하는 방식에 따라 this가 가리키는 객체가 달라질 수 있음. 메소드를 실행할 떄 . 왼쪽에 있는 객체를 가리킴.

Try/Catch문 : 둘은 항상 같이 사용.

try {오류를 발생시키려 하거나 오류가 날 것으로 예상되는 코드}

catch {try 안에서 예외나 오류가 나왔을 때 실행할 코드}

---
*Section 22 Array Collback Method*

ArrayMethod 폴더를 확인할 것.

1. forEach 메소드 : 배열 안의 아이템에 대해 함수와 코드를 한 번씩 실행. (for of와 유사)
2. map 메소드 : forEach와 유사하지만 함수의 결과를 가지고 새로운 배열을 생성.
3. Arrow Function : 함수표현식에 사용. 함수를 정의하는 최신 구문. 화살표 함수 하나만 단독으로 사용은 불가. 변수로 저장해야함. 전달할 인수가 하나일 때는 괄호 생략 가능. 화살표 함수 내에서 this는 window 객체를 가리키게 됨.
4. setTimeout : 인수로 실행할 함수와 지연시킬 시간(밀리초)을 받는다. 입력 받은 시간 동안 기다린 후 함수를 실행한다. setTimeout(() => {실행할 코드}, 3000) : 3초 후 함수 실행.
5. setInterval : 전달 받은 함수를 일정 시간 마다 반복. setInterval을 실행할 때 id를 반환. 이를 변수에 저장한 후 clearInterval(id) 코드를 실행하면 setInverval의 반복이 종료. setInterval(() => {실행할 코드}, 2000) : 2초 마다 코드 반복.
6. filter 메소드 : 배열에서 필터링하거나 부분 집합을 모아 새 배열을 만드는데 사용. 콜백 함수가 true or false를 반환하고, true를 반환하면 그 요소를 필터링된 배열에 추가. false라면 무시. 원본에 영향을 주지 않음.
7. some 메소드 : boolean method. true or false를 반환. 배열 내의 요소 중 하나라도 콜백 함수의 조건을 만족하면 true를 반환. 배열 내의 모든 요소가 조건을 만족하지 못할 경우에만 false를 반환.
8. every 메소드 : boolean method. true or false를 반환. 배열 내의 모든 요소에 대해 test를 진행. 배열의 모든 요소가 조건을 만족하면 true를 반환. 하나라도 조건을 만족하지 않으면 false를 반환.
9. reduce 메소드 : 배열을 점차 줄여가면서 최종적으로 하나의 값만을 남김. 

---
*Section 23 Modern Suntax*

Modern_syntax 폴더를 확인할 것.

1. Default Params : 함수를 선언할 때 매개변수에 default 값을 지정. function add (a, b = 0)

---
*Section 24 Document Object Model*

Document_Object_Model 폴더를 확인할 것.

1. Document는 하나의 객체. 브라우저에서 해당 페이지의 컨텐츠를 사용하여 자동으로 생성. Document의 메서드나 특성을 이용하여 웹페이지 변경 가능.
2. Selecting Method : 요소를 선택하기 위함.

document.getElementById('태그의 ID'). ID에 해당하는 요소를 페이지에서 찾아서 객체로 가져오라는 의미. 해당 ID를 갖는 태그가 없다면 null을 반환.

document.getElementsByTagName('태그 이름'). 해당 태그에 해당하는 요소를 모두 선택. HTML Collection을 반환. 각각은 Element(JavaScript에서 반환되는 객체에 해당. HTML 요소를 나타내는 모든 특성을 지닌 객체.). 이는 배열이 아님. 반복 가능한 객체이므로 for of는 사용 가능.

document.getElementsByClassName('클래스 이름'). 해당 클래스에 해당하는 요소를 모두 선택. 이 역시 HTML Collection을 반환.

document.querySelector(). 하나의 메서드를 사용해서 ID, 클래스 이름, 속성 등 원하는 선택자를 무엇이든 이용하여 선택할 수 있다. css에서 쓰는 것과 동일한 류의 선택자 사용. (#id, .class, a[title="Java"](앵커 태크의 title="Java"인 요소)등). 첫번째로 매치되는 요소를 반환. querySelector('img:nth-of-type(2)')를 사용하여 img 태그 중 두번째 요소를 선택할 수 있음.

document.querySelectorAll(). 일치하는 모든 요소를 반환.

3. Manipulating Method : 요소를 선택한 후 하는 작업. Element에는 엄청 많은 특성이 존재하므로 MDN을 참고.

innerText : 여는 태그와 닫는 태그 사이의 text. 태그는 무시.

textContent : innerText가 editor에 저장된 형태를 보여줌. 요소 안의 모든 콘텐츠를 보여줌. ex)display: none을 사용한 요소도 보여줌.

innerHTML : 특정 요소에 포함된 마크업의 전체 내용을 출력. text 뿐만 아니라 HTML 태그 요소 또한 출력됨.

getAttribute('특성 ex)href, id 등등') : HTML 자체에서 특성에 해당하는 요소를 가져옴.

setAttribute('특성 ex)href, id 등', '바꾸려는 내용') : 특성의 내용을 두번째 인수의 내용으로 변경할 수 있음.

h1.style을 하여 style 객체(모든 특성이 카멜케이스로 되어 있음)를 불러와도 스타일 시트에서 지정한 스타일은 포함되지 않음(인라인 스타일을 볼 수 있음). 대신 style 객체를 불러와 스타일을 바꾸는 것은 가능 (인라인 스타일 적용).

ex) const h1 = document.querySelector('h1') h1.style.color = 'green', h1.style.fontSize = '3em'

h2.classList : 요소의 클래스를 검색하여 조작하기 위한 객체. classList에 다양한 메서드가 존재. MDN을 참고할 것. h2.classList.toggle('class 이름')을 사용하면 해당 클래스를 추가했다가 다음 번 실행에서는 삭제하고, 일종의 껐다 켰다하는 것을 반복할 수 있음.

h2.parentElement : h2의 부모 요소에 접근 가능.

h2.children : h2의 자식 요소들에 접근 가능. 하나가 아닌 여러 개 일 수 있다. HTML Collection 형태로 반환.

nextSibling, previousSibling : 한 요소에서 인접한 형제 요소로 이동 가능. 이는 Element가 아닌 node를 반환.

nextElementSibling, previousElementSibling : 인접한 형제 요소로 이동. Element를 반환.

document.createElement('h3') : 페이지에 h3 요소를 추가.

document.body.appendChild(newImg) : newImg를 body의 마지막 자식으로 추가.

p.append('', '') : 여러 개의 텍스트를 요소 마지막에 추가할 수 있다. prepend는 앞에 추가

insertAdjacentElement('삽입하려는 위치', 삽입할 요소) : 요소를 삽입하려는 위치가 특정 요소의 앞인지, 뒤인지 또는 특정 요소 내인지 등을 알려줘야함. 

after(삽입할 요소) : 특정 요소 뒤에 내용을 삽입.

removeChild(제거하려는 자식 요소) : 제거하려는 요소의 부모 요소를 선택하여 removeChild 메서드를 실행해야함.

remove() : 제거하려는 요소에서 메서드를 실행하면 됨.



