const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';


$computer.style.background = `url(${IMG_URL}) 0 0`;
// $computer.style.background = `url(${IMG_URL}) -220px 0`; 바위
// $computer.style.background = `url(${IMG_URL}) -440px 0`; 보
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
  scissors:'0',
	rock: '-220px',
	paper: '-440px',
}


let computerChoise = 'scissors';
const changeComputerHand = () =>{
	if(computerChoise === 'scissors'){ //가위면
		computerChoise = 'rock';
	}else if(computerChoise === 'rock'){ //바위면
		computerChoise = 'paper';
	}else if(computerChoise === 'paper'){ // 보면
		computerChoise = 'scissors';
	}
	// rspX.computerChoise 이렇게하면 안됌
	$computer.style.background = `url(${IMG_URL}) ${rspX[computerChoise]} 0`;
	$computer.style.backgroundSize = 'auto 200px';
}
let intervalId = setInterval(changeComputerHand, 50);

// clickButton 5번 호출, 1번 인터벌 ~ 5번 인터벌로 계속 중첩됨 
// 그 다움에 버튼을 클릭하면 1번부터 5번 인터벌중 5번 인터벌만 취소함 그래서 1번부터 4번까지의 인터벌은 계속 작동하게 되는것임
const clickButton = () => {
	clearInterval(intervalId);
	setTimeout(()=>{
		clearInterval(intervalId);
		intervalId = setInterval(changeComputerHand, 50);
	}, 1000);
}

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
