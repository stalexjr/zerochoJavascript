const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = [];
for (let n = 0; n <= 9; n += 1) {
  numbers.push(n + 1);
}
// let n = 0;
// while(n <= 9){
//     n+=1;
// }
console.log('number >>>',numbers)

const answer = [];

for (let n = 0; n <= 3; n += 1) { // 네 번 반복
  const index = Math.floor(Math.random() * 9); //0 ~ 8 정수
  answer.push(numbers[index]);
  numbers.splice(index,1);
}

console.log(answer);