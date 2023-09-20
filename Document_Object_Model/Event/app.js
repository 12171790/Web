const btn2 = document.querySelector('#v2');

btn2.onclick = function() {
    console.log("You clicked me!");
}

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert('CLICKED!')
})