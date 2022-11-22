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
setInterval(changeComputerHand, 50);

