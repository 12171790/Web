const lis = document.querySelectorAll('li');

//아래 코드는 나중에 추가될 모든 li에 대해 작동하진 않음.
for (let li of lis) {
    li.addEventListener('click', function () {
        li.remove();
    })
}

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweetList');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();//submit 동작을 막아줌
    const usernameInput = tweetForm.username;
    const tweetInput = tweetForm.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

