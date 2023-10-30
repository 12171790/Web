const container = document.querySelector('#container');
const button = document.querySelector('#ColorChanger');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandomColor();
    e.stopPropagation(); //이벤트가 더 이상 버블링하지 않도록 막아줌.
})

//toggle 메서드는 클래스가 존재한다면 클래스를 제거, 존재하지 않는다면 클래스를 추가.
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}