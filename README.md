# Web

## Javascript 기초 공부
---
### 변수

1. 변수 선언 시 let, const 사용 (var을 사용하지 않음)
2. string에는 여러 메소드가 존재 (mdn에서 검색)
3. null : 값을 지정하는 않는 것으로 설정 (let 변수 = null)
4. undefined : 값이 할당되지 않은 변수에 할당. 아무것도 정의되지 않음을 의미.
5. false, 0, " ", null, undefined, NaN
---
---
#### *Section 15* String

##### 1. 템플릿 리터럴

변수에 저장된 문자열을 사용하여 문장을 만들고 싶을 때 사용.

문자열 안에 표현식을 내장할 수 있는 문자열을 만들고 해당 표현식이 문자열로 바뀜.

템플릿 리터럴에는 작은 따옴표가 아닌 백틱(back-tick) 기호를 사용 `${표현식}`

##### 2. Math 객체

수학과 관련된 메소드와 특성 모음 (PI, round - 반올림, abs, pow, floor - 내림 등)  MDN을 참고할 것!
Math.random() : 0 ~ 1 사이의 숫자 중 임의의 수 생성.

---
#### *Section 16* Boolean Logic (의사결정)

문자 간의 비교는 유니코드를 기반으로 비교.

==(!=) 이중 등호 : 두 값이 같은지 비교. 타입은 비교하지 않음. 두 값이 다른 타입이면 같아지도록 전환하고 비교.

===(!==) 삼중 등호 : 값과 타입 모두 비교. (주로 사용)

console.log() : 입력한 값을 출력.
alert() : 입력한 메시지의 팝업 창 출력.
prompt() : 사용자로부터 입력을 받아옴(문자열로). -> parseInt()를 사용하면 string을 number로 바꿀 수 있다. (toLowerCase(), toUpperCase() 사용 가능)

HTML에서 script 태그를 활용하여 JavaScript 파일을 HTML에 연결할 수 있음. 보통 body 태그의 맨 마지막에 삽입.
