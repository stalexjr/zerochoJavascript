const $word = document.querySelector('#word');
const $log = document.querySelector('#log');
const $order = document.querySelector('#order');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

const number = parseInt(prompt('몇명 이세요'), 10);

let word;
let newWord;

console.log("number >>>> ", number);


if(number){
  const onClickButton = () => {
    if (newWord.length === 3 && (!word || word[word.length - 1] === newWord[0])){ //세 글자이면서 제시어가 비어있거나 입력한 단어가 올바른가
      word = newWord; //벨류 저장
      $word.textContent = word; // 벨류 표현
      const order = Number($order.textContent); // 이거 몰랐음 복습
      if(order + 1 > number){
        $order.textContent = 1;
      }else{
        $order.textContent = order + 1;
      } // 이거 몰랐음 복습 
    } else {
      alert('ㄴㄴ단어 아님 딴거쓰셈');   
    }
    $input.value = ''; //초기화
    $input.focus();
  }
  
  
  const onInput = (event) => {
    newWord = event.target.value; // newWord는 벨류값이랑 같다라고 지정해줘야한다.
    console.log("input", newWord);
  }
  
  
  
  $button.addEventListener('click', onClickButton); //지정해줘야한다
  $input.addEventListener('input', onInput) // 그리고 인풋 값이기 때문에 인풋에다가 입력해 주어야한다 그리고 지정을 해주어야 한다
}