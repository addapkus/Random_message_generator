// We start by importing the readline module. It's a built-in Node.js module for reading lines of input from the user.
const readline = require('readline');

// Here we're creating a new readline.Interface instance.
// This is an interface for reading data from a Readable stream (like process.stdin), 
// and writing data to a Writable stream (like process.stdout).
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Here we're creating an array of the prompts that we'll show to the user.
const prompts = [
  'Hello, please enter the first noun here:',
  'Thanks, please enter the second noun:',
  'Thanks, please enter the third noun:',
  'Thanks, please enter the fourth noun:',
  'Thanks, please enter the fifth noun:',
  'Great. Now enter the last noun:'
];

// This array will hold the user's responses to our prompts.
const responses = [];

// This function asks the user a question and returns a promise that resolves with the answer.
// This is necessary because rl.question is asynchronous, but doesn't use promises natively.
const askQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// This is the main function that runs our script.
const main = async () => {
  // We use a for loop to iterate over our array of prompts.
  for (let i = 0; i < prompts.length; i++) {
    // For each prompt, we call askQuestion and wait for the user to respond.
    // The await keyword is used with a promise to pause the async function execution until the promise is resolved,
    // then the async function continues with the resolved value.
    const response = await askQuestion(prompts[i] + '\n');
    // We push the user's response into our responses array.
    responses.push(response);
  }
  
  // We shuffle the responses array in place using the Fisher-Yates (also known as Knuth) shuffle algorithm.
  responses.sort(() => Math.random() - 0.5);

  // We construct the sentence with the first three items in the shuffled responses array, and log it to the console.
  console.log(`Once upon a time, there was ${responses[0]}, who loved ${responses[1]}, so he put them to ${responses[2]}.`);

  // Finally, we call rl.close to close the readline interface and allow the program to exit.
  rl.close();
};

// We call the main function to start our script.
main();