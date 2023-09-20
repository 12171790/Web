const btnArray = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

const ColorChanger = () => {
    const colorArr = [];
    colorArr[0] = Math.floor(Math.random() * 256);
    colorArr[1] = Math.floor(Math.random() * 256);
    colorArr[2] = Math.floor(Math.random() * 256);

    return `rgb(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`;
}

for(let btn of btnArray) {
    btn.addEventListener('click', function() {
        this.style.backgroundColor = ColorChanger();
    })
}

for(let h1 of h1s) {
    h1.addEventListener('click', function() {
        this.style.backgroundColor = ColorChanger();
    })
}

//this 키워드를 사용하여 다른 요소에 대해 같은 동작을 하는 함수를 만들 수 있다.
function colorize() {
    this.style.backgroundColor = ColorChanger();
}

/*
for(let btn of btnArray) {
    btn.addEventListener('click', colorize);
}
*/