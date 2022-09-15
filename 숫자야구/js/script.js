const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = []; //[1,2,3,4,5,6,7,8,9]
for (let n = 0; n < 9; n += 1) {
  numbers.push(n + 1);
}
// let n = 0;
// while(n <= 9){
//     n+=1;
// }
console.log('number >>>',numbers)

const answer = [];
 
for (let n = 0; n < 4; n += 1) { // 네 번 반복
  const index = Math.floor(Math.random() * (numbers.length - n)); //0 ~ 8 정수
  answer.push(numbers[index]);
  numbers.splice(index,1);
}

console.log(answer);

const tries = [];
function checkInput(input){ 
  if(input.length !== 4){
    return alert('4자리 숫자를 입력해 주세요'); //길이는 4가 아닌가
  }
  if(new Set(input).size !== 4){ //new Set은 알아서 중복된 숫자를 지워줌 ex) 3144 = 314
    return alert('중복되지않게 입력해 주세요'); // 중복된 숫자가 있는가
  }
  if(tries.includes(input)){ //배열에 이 값이 들어있는가
    return alert('이미 시도한 값입니다.'); // 이미 시도한 값은 아닌가
  }
  return true;
} //검사하는 코드
console.log("tries", tries);

// $form.addEventListener('submit', (e) => {
//   e.preventDefault(); //기본 동작 막기
//   const value = $input.value;
//   $input.value = '';
//   if (checkInput(value)){
//     // 입력값 문제없음
//     if(answer.join('') === value){
//       $logs.textContent = '홈런!';
//       return;
//     }
//     if(tries.length >= 9){
//       const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
//       $logs.appendChild(message);
//       return;
//     }
//     // 몇 스트라이크 몇 볼인지 검사
//   }else{
//     // 에러있음
//     return alert('다시 입력해 주세요');
//   };
// });
let out = 0;
$form.addEventListener('submit', (e) => {
  e.preventDefault(); //기본 동작 막기
  const value = $input.value;
  $input.value = '';
  if(!checkInput(value)){
    return;
  }
  // 입력값 문제없음
  if(answer.join('') === value){
    $logs.textContent = '홈런!';
    return;
  }
  if(tries.length >= 9){
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
    $logs.appendChild(message);
    return;
  }

  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  for(let i = 0; i < answer.length; i++){
    const index = value.indexOf(answer[i]);
    if(index > -1){ // 일치하는 숫자 발견
      if(index === i){ // 자릿수도 같음
        strike += 1;
      }else{ // 숫자만 같음
        ball += 1;
      }
    }
  }
  if(strike === 0 && ball === 0){
    out++;
    $logs.append(`${value} : 아웃!`,document.createElement('br'));
  }else{
    $logs.append(`${value} : ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  }
  if(out === 3){
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
    $logs.appendChild(message);
    return;
  }
  tries.push(value);
});