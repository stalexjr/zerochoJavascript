const candidate = Array(45).fill().map((v, i) => i + 1);

const shuffle = [];
while (candidate.length > 0){
  const random = Math.floor(Math.random() * candidate.length); //무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어있음
  const value = spliceArray[0]; //배열에 들어있는 값을 꺼내어
  shuffle.push(value); // shuffle 배열에 넣기
}
console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b );
const bonus = shuffle[6];
console.log(winBalls, bonus);

function colorize(number, $tag){
  if(number < 10){
    $tag.style.backgroundColor = 'red';
    $tag.style.color = 'white';
  }else if(number < 20){
    $tag.style.backgroundColor = 'orange';
  }else if(number < 30){
    $tag.style.backgroundColor = 'yellow';
  }else if(number < 40){
    $tag.style.backgroundColor = 'blue';
    $tag.style.color = 'white';
  }else{
    $tag.style.backgroundColor = 'green';
    $tag.style.color = 'white';
  }
}

const showBall = (number, $target) => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  colorize(number, $ball);
  $ball.textContent = number;
  $target.appendChild($ball);
};

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

for(let i = 0; i < winBalls.length; i++){
  setTimeout(() =>{
    showBall(winBalls[i], $result); 
  }, (i + 1) * 1000);
}
setTimeout(() =>{
  showBall(bonus, $bonus);
}, 7000);


// setTimeout(() =>{
//   showBall(winBalls[1], $result);
// }, 2000);
// setTimeout(() =>{
//   showBall(winBalls[2], $result);
// }, 3000);
// setTimeout(() =>{
//   showBall(winBalls[3], $result);
// }, 4000);
// setTimeout(() =>{
//   showBall(winBalls[4], $result);
// }, 5000);
// setTimeout(() =>{
//   showBall(winBalls[5], $result);
// }, 6000);        


// for(let i = 0; i < candidate.length; i+1){
//     const random = Math.floor(Math.random() * candidate.length); //무작위 인덱스 뽑기
//     const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어있음
//     const value = spliceArray[0]; //배열에 들어있는 값을 꺼내어
//     shuffle.push(value); // shuffle 배열에 넣기
//   }
// for(let i = candidate.length; i > 0; i--){
//   const random = Math.floor(Math.random() * candidate.length); //무작위 인덱스 뽑기
//   const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어있음
//   const value = spliceArray[0]; //배열에 들어있는 값을 꺼내어
//   shuffle.push(value); // shuffle 배열에 넣기
// }

// 조건이 간단하거나, 몇번 반복해야할지 정확히 감이 안올때 while문, 
// 조건이 복잡하거나 몇번 반복할지 정확히 알고 있을때 for문
// splice는 기존 배열에 영향을 주고 처음에는 인덱스번호 두번째는 갯수고 slice은 기존 배열에 영향을 주지 않고 둘다 인덱스 번호를 뜻하고 처음 인덱스 번호는 포함 두번째 인덱스 번호는 미포함을 뜻한다.