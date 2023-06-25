const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompts = [
    'Hello, please enter the first noun here:',
    'Thanks, please enter the second noun:',
    'Thanks, please enter the third noun:',
    'Thanks, please enter the fourth noun:',
    'Thanks, please enter the fifth noun:',
    'Great. Now enter the last noun:'
];

let responses = [];

const askQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    for (let i = 0; i < prompts.length; i++) {
        const response = await askQuestion(prompts[i] + '\n');
        responses.push(response);
    }

    responses.sort(() => Math.random() - 0.5);

    console.log(`Once upon a time, there was ${responses[0]}, who loved ${responses[1]}, so he put them to ${responses[2]}.`);

    rl.close();
};

main();