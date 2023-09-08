const todoList = [];
let input = prompt('What would you like to do?');
while (true) {
    if (input === 'new') {
        input = prompt('Enter your schedule. I will add to list');
        console.log(`${input} added to the list`);
        todoList.push(input);
    }
    else if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}. ${todoList[i]}.`);
        }
        console.log('**********');
    }
    else if (input === 'delete') {
        input = prompt('Enter your schedule index to delete.');
        input = parseInt(input);
        if (!Number.isNaN(input)) {
            //input이 문자열이라면 splice가 문자열을 숫자로 바꾸려고 함. 숫자로 바꿀 수 없다면 0으로 변환.
            todoList.splice(input, 1);
            console.log('Todo Removed');
        }
    }
    else if (input === 'quit' || input === 'q') {
        console.log('You quit the app.');
        break;
    }
    input = prompt('What would you like to do?');
}



