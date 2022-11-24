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
// const clickButton = () => {
// 	clearInterval(intervalId);
// 	$rock.removeEventListener('click', clickButton);
// 	$scissors.removeEventListener('click', clickButton);
// 	$paper.removeEventListener('click', clickButton);

// 	setTimeout(()=>{
// 		clearInterval(intervalId);
// 		intervalId = setInterval(changeComputerHand, 50);
// 		$rock.addEventListener('click', clickButton);
// 		$scissors.addEventListener('click', clickButton);
// 		$paper.addEventListener('click', clickButton);
// 	}, 1000);
	
// } 위에 이런 방법도 있지만 이벤트를 추가했다 삭제했다 반복하면 오류가 생길 수 도 있기때문에
let clickable = true;
const clickButton = () =>{
	if(clickable){
		clearInterval(intervalId);
		clickable = false;
		// 점수 계산 및 화면 표시
		setTimeout(()=>{
			clickable = true;
			intervalId = setInterval(changeComputerHand, 50);
		}, 1000);
	}
}
// 이 방법을 선호 플래그 변수임

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
