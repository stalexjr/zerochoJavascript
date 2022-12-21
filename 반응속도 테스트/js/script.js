const $screen = document.querySelector("#screen");
const $result = document.querySelector("#result");

$screen.classList.contains('');

let startTime;
let endTime;

$screen.addEventListener('click', (e) => {
	if (e.target.classList.contains('waiting')) {	//파랑
		$screen.classList.remove('waiting');
		$screen.classList.add('ready');
		$screen.textContent = '초록색이 되면 클릭하세요';
		setTimeout(()=>{
			startTime = new Date();
			$screen.classList.remove('ready');
			$screen.classList.add('now');
			$screen.textContent = '클릭하세요!';
			// 첫 시간 재기
		}, Math.floor(Math.random() * 1000) + 2000); // 2000 ~ 3000 사이 수
	} else if (e.target.classList.contains('ready')) {	//빨강

	} else if (e.target.classList.contains('now')) {	//초록
		// 끝 시간 재기 
		// 시간 차이 저장하기
		endTime = new Date();
		$result.textContent = `${endTime - startTime}ms`;
		$screen.classList.remove('now');
		$screen.classList.add('waiting');
		$screen.textContent = '클릭해서 시작하세요';
	}
});