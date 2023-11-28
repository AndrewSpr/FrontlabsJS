let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

let result1 = text[12] + text[6] + text[18] + text[25];
console.log(result1);

let result2 = text.toLowerCase();
console.log(result2);

let positions = [];
let index = text.indexOf('in');
while (index !== -1) {
    positions.push(index);
    index = text.indexOf('in', index + 1);
}
console.log(positions);

let wordsArray = text.split(' ');
console.log(wordsArray);

let invertedText = text.split('').reverse().join('');
console.log(invertedText);

function ucFirst(txt) {
   let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
   return newTxt;
}
console.log(ucFirst('some text'));
