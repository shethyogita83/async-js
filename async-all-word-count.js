/*

Write a function that reads an input file and outputs a .txt file 
containing the word count of every word in your input.txt. 
This is purely to practice use of asynchronous functions! 
See exampleOutput folder's sampleOutput.txt for what your output should look like
with the given input.txt

Constraints: 
1) No punctuation will be in your paragraph
2) This is case-insensitive, so apple and Apple both count as the same word

Allowed documentation: 
- Node.js documentation for FS library (https://nodejs.org/api/fs.html)

/*                                                  */

const fs = require('fs');

// countWords is a helper function... it helps you convert a paragraph into 
// the string you need

// EXAMPLE USAGE 
// countWords('hello world Hello me') --> 'hello: 2\nme:1\nworld: 1\n'
const countWords = function(paragraph) {
  let words = paragraph.trim('.').split(' ');

  let wordBank = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (wordBank.hasOwnProperty(word)) {
      wordBank[word] += 1;
    } else {
      wordBank[word] = 1;
    }
  }

  let outputString = '';

  let wordsFound = Object.keys(wordBank).sort();

  wordsFound.forEach(word => {
    outputString += `${word}: ${wordBank[word]}\n`;
  })
  
  return outputString;
}
//Write a function that reads an input file and outputs a .txt file 
//containing the word count of every word in your input.txt. 
// inputFile: paragraph to read
// outputFile: path to write resulting txt file to
// EXAMPLE USAGE
// countAllWords('./input.txt', './output.txt') --> should output a .txt file in same directory
var countAllWords = function(inputFile, outputFile, callback) {
  fs.readFile(inputFile, function(err, content){
    if(err){
        console.log(err);
    } else{
        var output = countWords(content.toString());
        fs.writeFile(outputFile, output, 'utf8', function(err){
          if(err){
            console.log(err);
          }else{
            console.log("file Written")
          }
        })
    }
  })
}

countAllWords('./input.txt', './output.txt');