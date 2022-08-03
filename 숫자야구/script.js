const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $logs = document.querySelector('#logs');

const numbers = [];
// 배열을 쓸 때 : 단순히 값들만 모아놓을 때 쓴다
// 객체(중괄호)를 쓸 때 : 각각의 값에 속성 이름을 붙여서 값을 구분해야 될 때 쓴다
for (let n = 0; n < 9; n += 1){
    numbers.push(n + 1);
    // console.log(n)
}
// let b = 0;
// while( b < 9 ){
//     console.log(b)
//     numbers.push(b + 1)
//     b += 1
// }

const answer = []; // [4] 가 들어간다.
for (let n = 0; n <= 3 ; n += 1 ){
    const index = Math.floor(Math.random() * (9 - n));
    // 0 ~ 8 정수  + 1을 빼준 이유는 인덱스 상으로 0 부터 시작하기 때문에 여기서 + 1 을 해버리면 1 ~ 9의 정수를 뽑을 순 있으나, 1은 0이고 2는 1이 되버리기 때문에 0 ~ 8까지 정수를 뽑는다.
    answer.push(answer[index]);
    numbers.splice(index, 1); 
    // 뽑은 숫자는 스플라이스로 지워준다. 그러면 4를 뽑았기 때문에 배열은 [1, 2, 3, 5 ,6 ,7 ,8, 9] 가 된다.
    // numbers [2, 4, 5, 6, 7, 8, 9]
    // answer [3, 1, 4, undefined]
    // 문제점 : numbers의 배열은 스플라이스로 인해 점점 사라지는데 answer은 계속 9가지 즉 [1, 2, 3, 5 ,6 ,7 ,8, 9] 를 받아온다.
}
console.log(answer);