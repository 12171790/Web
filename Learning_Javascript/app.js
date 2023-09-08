// const password = prompt("please enter a new password");

// //password must be 6+ characters
// //password cannot include space (indexOf 사용 문자열 안에 해당 문자가 있으면 0, 없으면 -1)
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid password!");
// } else {
//     console.log("Invalid password!");
// }

//switch 문
/* 1이면 Monday, 2면 Tuseday, 3이면 Wednesday ... */
// const day = 2;
// //switch(판별할 변수)
// switch (day) {
//     // case 값: <- 위의 판별할 변수가 해당 값과 일치하면 case문 다음을 실행
//     // 중단 지점을 만날 때 까지 실행하므로 필요하다면 break문 사용
//     // default 아무것도 일치하지 않을 경우 default를 실행.
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuseday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend")
//         break;
//     default:
//         console.log("I don't know that")
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//     for (j = 0; j < seatingChart[i].length; j++) {
//         console.log(seatingChart[i][j]);
//     }
// }

let max = parseInt(prompt('Enter the maximum number!'));
const secretNumber = Math.floor((Math.random() * max)) + 1;
console.log(secretNumber);








