const btn2 = document.querySelector('#v2');

btn2.onclick = function() {
    console.log("You clicked me!");
}

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}


//addEventListener를 사용하면 콜백 함수를 여러 개 지정할 수 있다.
//h1.onclick과 같은 방법은 onclick 특성 자체를 바꾸는 방법이기 때문에 클릭 했을 떄 실행되는 함수가 1개 뿐.
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert('CLICKED!')
})