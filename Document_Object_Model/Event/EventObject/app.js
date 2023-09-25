//Event Object는 콜백 함수에 자동적으로 전달됨. 수집할 매개변수가 없어도 언제나 전달.
//이벤트 객체를 활용하여 어떤 키가 눌러졌는지 파악할 수 있다.
//이벤트 객체의 code와 key에 어떤 키가 눌렸는지 저장됨. e.code, e.key
//code는 실제 키보드에서의 위치를 의미. 입력된 값은 key
document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    //console.log('keydown!')
    //console.log(e);
    console.log(e.key);
    console.log(e.code);
})

//입력 창이 아닌 페이지에서 keydown을 감지.
window.addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'ArrowUp':
            console.log('Up!');
            break;
        case 'ArrowDown':
            console.log('Down!');
            break;
    }
})