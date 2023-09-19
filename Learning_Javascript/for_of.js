const subreddits = ['cringe', 'books', 'puppy', 'funny', 'cars'];

//subreddits의 요소에 직접적으로 접근할 수 있따.
for (let sub of subreddits) {
    console.log(sub);
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of 'hellow world') {
    console.log(char);
}

