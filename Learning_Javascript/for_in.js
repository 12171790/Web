const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77
};

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

//Object.keys(testScores)로 key를 contents로 갖고 있는 배열을 얻을 수 있음.
//Object.values(testScores)는 value를 contents로 갖고 있는 배열
//Object.entries(testScores)는 key-value pair를 배열로

for (let score of Object.values(testScores)) {
    console.log(score);
}

