const btn = document.querySelector('#colorChanger');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
let colorArray = [];


const randomColorGenerator = () => {
    const colorArr = [];
    colorArr[0] = Math.floor(Math.random() * 256);
    colorArr[1] = Math.floor(Math.random() * 256);
    colorArr[2] = Math.floor(Math.random() * 256);

    return colorArr
}


btn.addEventListener('click', () => {
    colorArray = randomColorGenerator();
    body.style.backgroundColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
    h1.innerText = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
})