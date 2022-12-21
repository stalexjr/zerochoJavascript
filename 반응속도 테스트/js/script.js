const $screen = document.querySelector("#screen");
const $result = document.querySelector("#result");

$screen.classList.contains('');

let startTime;
let endTime;
const records = [];
// const recordsAverage = [];

let timeOutId;
$screen.addEventListener('click', (e) => {
	if (e.target.classList.contains('waiting')) {	//파랑
		$screen.classList.remove('waiting');
		$screen.classList.add('ready');
		$screen.textContent = '초록색이 되면 클릭하세요';
		timeOutId = setTimeout(()=>{
			startTime = new Date();
			$screen.classList.remove('ready');
			$screen.classList.add('now');
			$screen.textContent = '클릭하세요!';
			// 첫 시간 재기
		}, Math.floor(Math.random() * 1000) + 2000); // 2000 ~ 3000 사이 수
	} else if (e.target.classList.contains('ready')) {	//빨강
		clearTimeout(timeOutId);
		$screen.classList.remove('ready');
		$screen.classList.add('waiting');
		$screen.textContent = '너무 성급하세요😅';
	} else if (e.target.classList.contains('now')) {	//초록
		// 끝 시간 재기 
		// 시간 차이 저장하기
		endTime = new Date();
		const current = endTime - startTime;
		records.push(current);
		const average = records.reduce((a, c)=> a + c) / records.length;
		// average = records.slice(0, 5).sort((a,b)=> a - b);
		// console.log(average);

		
		// recordsAverage.push(average);
		// recordsAverage.slice(0, 5).sort((a, b)=> a - b);
		// console.log(recordsAverage);
		// 👆 내가 쓴 답 

		$result.textContent = `현재 ${current}ms, 평균 : ${average}ms`;
		// const topFive = records.sort((p, c)=> p - c).slice(0, 5);
		// topFive.forEach((top, index) =>{
		// 	$result.append(
		// 		document.createElement('br'),
		// 		`${index + 1}위 : ${top}ms`,
		// 	)
		// });
		
		const topFive = records.sort((p, c ) => p - c).slice(0, 5);
		topFive.forEach((top, index) =>{
			$result.append(
				document.createElement('br'),
				`${index + 1}위 : ${top}ms`,
			)
		});
		startTime = null;
		endTime = null;
		// 👆 초기화 안써도 되지만 혹시나 전에 있던 데이터가 있을 가능성도 있어서 비워둠
		// $result.textContent = `${endTime - startTime}ms`;
		$screen.classList.remove('now');
		$screen.classList.add('waiting');
		$screen.textContent = '클릭해서 시작하세요';
	}
});


		// 👆 평균 구하기 평균은 자주 구하기 때문에 외워놓으면 좋음
		// a = 누적값 c = 현재값 a + c 는 다음 누적값이다.
		// 예를 들어 [1,2,3,4].reduce((a, c)=> a + c, 0) 가 있다면 0은 초기값
		// a : 0 c : 1 
		// 그 다음은 a : 1 c : 2 
		// 그 다음은 a : 3 c : 3  
		// a : 6 c : 4
		// a : 10 이렇게 된다. 마지막 최종 누적값이 리턴값이 된다.
		
		// 초기값을 안넣는 경우도 있는데 이럴땐 0이 생략되기보다 첫번째 값이 곧 초기값으 된다라는걸 의미한다. 그래서 이럴땐 
		// a : 1, c : 2
		// a : 3  c : 3
		// a : 6  c : 4 
		// 10 위와 달리 4번 동작하는게아니라 3번만 동작한다. 그래서 reduce를 할땐 초기값을 확인해야 한다.

		// reduce는 다른 방법으로도 활용 할 수 있다.
		// 예를 들자면 ['우진','민수','상엽','상현'].reduce((a,c,i)=>{ a[i] = c; return a },{})를 주면
		// 값은 객체 리터럴로 변하게 되고 값은 {0 : '우진', 1 : '민수', 2 : '상엽', 3 : '상현'}으로 된다.
		// 여기서 i 는 인덱스의 값이다.
		//a : {}, c: 우진
		//a : {0: '우진'} c: 민수
		//a : {0: '우진', 1: '민수'} c: 상엽
		//a : {0: '우진', 1: '민수', 2: '상엽'} c: 상현
		// a : {0: '우진', 1: '민수', 2: '상엽' 3 : '상현'}