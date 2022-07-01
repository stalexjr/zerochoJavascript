
// const number = prompt('몇 명이 참가하나요?');

// const numberValue = parseInt(prompt());
// Swal.fire({  
//   title: 'Do you want to save the changes?',  
//   showDenyButton: true,  showCancelButton: true,  
//   confirmButtonText: `Save`,  
//   denyButtonText: `Don't save`,
// }).then((result) => {  
// 	/* Read more about isConfirmed, isDenied below */  
//     if (result.isConfirmed) {    
//     	Swal.fire('Saved!', '', 'success')  
//     } else if (result.isDenied) {    
//     	Swal.fire('Changes are not saved', '', 'info')  
//  	}
// });

// const inputNumber = parseInt(numberSwal.getInput());

const number = Swal.fire({
  icon: 'question',
  title: '몇 명이 참가하나요?',
  position: 'center-center',
  input: 'number',
  value: true,
  inputPlaceholder: '인원 수를 입력해주세요.',
  customClass: {
    title: 'fontStyle',
    content: 'fontStyle',
    input: 'inputWidth'
  },
  returnInputValueOnDeny: true,
  inputValidator: (number) => {
    if (!number) {
      return '인원 수를 입력하세요!'
    } else if (number > 5) {
      return '5명 이하로 입력해주세요!'
    } else if (number === typeof (number)) {
      return '숫자를 입력해주세요!'
    } else if (number < 0) {
      return '음수는 입력하실 수 없습니다!'
    }
    console.log("value >>>>>>>>", number);
    console.log("value >>>>>>>>", typeof (number));
  },
})

// console.log(number);
// const number = Swal.fire({
//   icon: 'question',
//   title: '몇 명이 참가하나요?',
//   position: 'center-center',
//   input: 'number',
//   // value: Number,
//   inputPlaceholder: '인원 수를 입력해주세요.',
//   customClass: {
//     title: 'fontStyle',
//     content: 'fontStyle',
//     input: 'inputWidth'
//   },
//   inputValidator: (number) => {
//     if (!number) {
//       return '인원 수를 입력하세요!'
//     } else if (number > 5) {
//       return '5명 이하로 입력해주세요!'
//     } else if (number === typeof (number)) {
//       return '숫자를 입력해주세요!'
//     } else if (number < 0) {
//       return '음수는 입력하실 수 없습니다!'
//     }
//     console.log("value >>>>>>>>", number);
//     console.log("value >>>>>>>>", typeof (number));
//   }
// })

// console.log("number >>>>>>>>>", number)

const person = [
  {
    id: 1,
    img: '👩',
  },
  {
    id: 2,
    img: '🧑'
  },
  {
    id: 3,
    img: '👨'
  },
  {
    id: 4,
    img: '👧'
  },
  {
    id: 5,
    img: '🐹'
  },
  {
    id: 6,
    img: '👶'
  },
  {
    id: 7,
    img: '👩‍🦰'
  },
  {
    id: 8,
    img: '👨‍🦳'
  },
  {
    id: 9,
    img: '🎅'
  },
  {
    id: 10,
    img: '👸'
  },
  {
    id: 11,
    img: '👩‍🦱'
  },
  {
    id: 12,
    img: '🦝'
  },

]

// const number2 = parseInt(prompt('몇 명이 참가하나요?'), 10);
// console.log(number2)
//데이터를 받는다 10진수로 요즘은 디자인때문에 구려서 잘 안씀

const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
const $log = document.querySelector('#log');


let word;    // 제시어
let newWord; // 새로 입력한 단어


const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0] || word[word.length] === 1 ) { //제시어가 비어있거나 제시어의 마지막 단어와 새로운 단어가 맞는가?
    //비어있다.
    word = newWord; //입력한 단어가 제시어가 된다.
    const $li = document.createElement('li');
    const $span = document.createElement("span");
    $span.textContent = `${word} ➡ `;
    $log.appendChild($li);
    $li.appendChild($span);
    $word.textContent = word; //제시어를 화면에 띄운다.
    const order = Number($order.textContent);
    //textContent 로 변환하게 되면 문자열로 나오기때문에 parseInt로 숫자열로 만들어 주어야한다.
    if (order + 1 > number2) { //현재 순서
      $order.textContent = 1; //순서를 처음으로 돌린다.
    } else {
      $order.textContent = order + 1; // 그 다음 순서로 넘긴다.
    }
  }else { //올바르지 않은가 ?
    //안 올바르다.
    Swal.fire({
      icon: 'error',
      text: '올바르지 않은 단어입니다!!',
      customClass: {
        title: 'fontStyle',
        content: 'fontStyle',
        input: 'inputWidth',
        cancelButton: 'cancelText'
      },
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '다시하기',
      cancelButtonText: '<a href="./index.html">홈으로</a>',
    });
  }
  $input.focus();
  $input.value = ''; //제시어를 비운다.
}



const onInput = (event) => {
  newWord = event.target.value;
}



$input.addEventListener("input", onInput);
$button.addEventListener("click", onClickButton);













// console.log("number >>>>",number22);

// console.log(personValue);

// function orerValue(numberValue){
//   const $order = document.getElementById('order');
//   $order.innerText = numberValue.number;
// }


// console.log("value >>>>>>>>>>",numberValue);

