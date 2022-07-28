let numOne = "";
let operator = "";
let numTwo = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");


// number

// const onClickNumber = (event) => {
//   if (operator) {
//     if(!numTwo){
//       $result.value = "";
//     }
//     numTwo += event.target.textContent;
//   } else {
//     numOne += event.target.textContent;
//   }
//   $result.value += event.target.textContent;
// };


// if 조건문의 중첩은 코드를 읽기 어렵다. 그래서 밑의 코드처럼 작업을 진행해야 한다.
// 첫번째 단계로 onClickNumber 함수에서 if문과 상관없이 공통적으로 실행되는 부분은 $result.value += event.target.textContent;이다. 이 부분은 각 분기점 안에 넣는다.
// 두번째 단계로 어떤 분기점의 절차가 더 짧은지 확인한다. operator가 없으면 절차가 더 짧으므로 먼저 작성한다. 이때 조건문은 operator에서 !operator가 된다.
// 세번째 단계로 !operator일 때의 절차가 마무리되면 return으로 함수를 종료한다.
// 네번째 단계로 return 아랫부분은 무조건 operator일 때만 실행되므로 else 문으로 감쌀 필요가 없다.


const onClickNumber = (event) => {
  if (!operator) { // 비어있다.
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if(!numTwo){ // 비어있지 않다.
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};


// 숫자버튼

document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);


// 연산자


const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert('숫자를 먼저 입력하세요');
  }
}


document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document.querySelector("#minus").addEventListener("click", onClickOperator("-"));
document.querySelector("#divide").addEventListener("click", onClickOperator("/"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("*"));

document.querySelector("#clear").addEventListener("click",() => {
  numOne = '';
  numTwo = '';
  operator = '';
  $result.value = '';
  $operator.value = '';
});
document.querySelector("#calculate").addEventListener("click",() => {
  // if(numTwo){
  //   switch(operator){ 
  //     case '+':
  //       $result.value = parseInt(numOne) + parseInt(numTwo);
  //       break;
  //     case '-':
  //       $result.value = parseInt(numOne) - parseInt(numTwo);
  //       break;
  //     case '*':
  //       $result.value = parseInt(numOne) * parseInt(numTwo);
  //       break;
  //     case '/':
  //       $result.value = parseInt(numOne) / parseInt(numTwo);
  //     default:
  //       break;
  //   }
  // }else{
  //   alert('숫자를 먼저 입력하세요');
  // }

  if(numTwo){
    if(operator){
      if( $operator.value == '+'){ //스위치문 if문으로 바꿔보기
        $result.value = parseInt(numOne) + parseInt(numTwo);
      }else if( $operator.value == '-'){
        $result.value = parseInt(numOne) - parseInt(numTwo);
      }else if( $operator.value == '*'){
        $result.value = parseInt(numOne) * parseInt(numTwo);
      }else if( $operator.value == '/'){
        $result.value = parseInt(numOne) / parseInt(numTwo);
      }
    }
  }else{
    alert('숫자를 먼저 입력하세요');
  }
});



