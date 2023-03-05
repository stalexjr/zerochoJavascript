
const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');

const rows = [];
let turn = 'O';

const checkWinner = (target) => {
	const rowIndex = target.parentNode.rowIndex;
	const cellIndex = target.cellIndex;
	// 👆 밑 코드를 위코드로 줄여줄 수 있다.
	// parentNode 란 해당 태그의 부모요소를 찾을 수 있다. 예를 들어 rows[0][0].parentNode를 해주게 되면 td의 부모요소인 tr이 된다. rows[0][0].parentNode.parentNode는 tr의 부모요소인 table이 된다.
	// 반대로 children은 자식요소를 찾는 태그이다.
	// document.body.children을 하게 되면 0:script 1:table 2:div가 되고, document.body.children[1]을 하게 되면 table을 선택할 수 있다. 그리고 이것은 배열처럼 생겼지만 객체다.
	// 그래서 유사배열은 배열의 반복문인 forEach문을 사용하지 못하지만, Array.from이라는 것을 써주게 되면 일반 배열문처럼 forEach를 사용할 수 있다. 
	// 예를들어 Array.from($table.children)을 써주면 일반 배열로 변해서 Array.from($table.children).forEach((i)=>{console.log(i)})로 사용할 수 있다.
	// let rowIndex;
	// let cellIndex;
	// rows.forEach((row, ri) => {
	// 	row.forEach((cell, ci) => {
	// 		if (cell === target) {
	// 			rowIndex = ri;
	// 			cellIndex = ci;
	// 		}
	// 	});
	// });
	// 세 칸 다 채워졌나?
	let hasWinner = false;
	// 검사할땐 false로 시작
	// 가로줄 검사
	if (
		rows[rowIndex][0].textContent === turn &&
		rows[rowIndex][1].textContent === turn &&
		rows[rowIndex][2].textContent === turn
	) {
		hasWinner = true;
	}
	// 세로줄 검사
	if (
		rows[0][cellIndex].textContent === turn &&
		rows[1][cellIndex].textContent === turn &&
		rows[2][cellIndex].textContent === turn
		) {
			hasWinner = true;
		}
		// 대각선 검사
		if (
			rows[0][0].textContent === turn &&
			rows[1][1].textContent === turn &&
			rows[2][2].textContent === turn
		) {
			hasWinner = true;
		}
		if (
			rows[0][2].textContent === turn &&
			rows[1][1].textContent === turn &&
			rows[2][0].textContent === turn
		) {
			hasWinner = true;
		}
		return hasWinner;
};
/*
	셀프 체크
*/
const checkWinnerAndDraw = (target) =>{
	const hasWinner = checkWinner(target);
		// 승자가 있으면
		if(hasWinner){
			$result.textContent = `${turn}님의 승리!`;
			$table.removeEventListener('click', callback);
			return;
		}
		// 승자가 없으면
		const draw = rows.flat().every((cell) => cell.textContent);
		if(draw){
			$result.textContent = '무승부';
			return;
		}
		turn = turn === 'O' ? 'X' : 'O';
	};
	

	let clickable = true;	//플래그 변수

const callback = (e) => {
	if(!clickable) return;

	//칸에 글자가 있나 ? 
	if (e.target.textContent !== '') {
		console.log('빈칸이 아닙니다');
		return;
	}
	if (e.target.textContent) return;
	// console.log('event');
	e.target.textContent = turn;
	//승부 확인
	// const hasWinner = checkWinner(e.target);
	// if (hasWinner) {
	// 	$result.textContent = `${turn} 님의 승리 !!`;
	// 	$table.removeEventListener('click',callback);
	// 	return;
	// };
	checkWinnerAndDraw(e.target);
	//무승부 검사
	//every 매서드란 조건함수 모두 다 되야 true고 하나라도 false가 되면 false인데 이 매서드는 1차원 배열에만 사용할 수 있다. 그래서 2차원 배열에는 못쓰냐 그건 아니다 flat을 사용하게 되면 1차원 배열로 변한다.
	// every의 반대인 some도 있다. 하나라도 칸이 차있으면 true 모두다 칸이 안차있으면 false가 된다.
	// const draw = rows.flat().every((cell)=>cell.textContent);
	// 👆 위 코드로 줄일 수 있다.every와 flat으로 코드를 좀 더 효율적으로 짤 수 있다.
	// flat은 💜차원 배열을 한단계 낮춰주는 메서드다 예를 들어 3차원 배열은 2차원으로 2차원 배열은 1차원 배열로 낮춰주는 역할을 한다.
	// let draw = true;
	// rows.forEach((row)=>{
	// 	console.log('row',row);
	// 	row.forEach((cell)=>{
	// 		console.log('cell',cell);
	// 		if(!cell.textContent){
	// 			draw = false;
	// 		}
	// 	});
	// });
	// if(draw){
	// 	$result.textContent = '무승부';
	// 	return;
	// };
	// if (turn === 'O') {
	// 	turn = 'X';
	// } else if (turn === 'X') {
	// 	turn = 'O';
	// }
	// 👆 위 코드를 밑으로 줄일 수 있다.
	// turn = turn === 'O' ? 'X' : 'O';

	if(turn === 'X'){
		clickable = false;
		const emptyCells = rows.flat().filter((v)=> !v.textContent);
		// 👆 fliter는 조건이다. filter((v)=> !v.textContent)면 뒤에 해당되는 애들을 걸러준다. filter도 1차원 배열에만 해당되어 flat으로 1차원 배열로 만들어 준다음에 filter를 주는 것이다. 조건은 v.textContent 는 조건이면 이기때문에 !v.textContent는 빈칸이 아니면이 된다.
		const ramdomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
		setTimeout(()=>{
			ramdomCell.textContent = 'X';
			checkWinnerAndDraw(e.target);
			clickable = true;
		}, 1000);
		// setTimeOut은 버그가 많다.

	}
};

for (let i = 0; i < 3; i++) {
	const $tr = document.createElement('tr');
	const cells = [];
	for (let j = 0; j < 3; j++) {	//반복문 안에 반복문을 썼으면 i는 썻으니 j로 다른 변수를 쓰는것을 추천
		const $td = document.createElement('td');
		cells.push($td);
		// $td.addEventListener('click', callback);
		$tr.append($td);
	}
	rows.push(cells);
	$table.append($tr);
}
$table.addEventListener('click', callback);

/*
이벤트 버블링 때문에 td에 직접적으로 이벤트리스너를 달아주지않고 부모요소인 table에다 주어도 작동하게 된다.
예를들어 td에 이벤트 리스너를 달아주면, td를 눌러도 이벤트 리스너가 작동하게 되고, 그 부모인 tr에도 작동하게되고, 그 부모인 table, 심지어 body에도 실행되게된다.
html의 현상이다. 부모타고 계속 공기방울이 올라가는 것처럼 보인다싶어 이벤트 버블링 이라 부른다.
만약 나는 진짜로 td가아닌 table이 클릭되서 이벤트를 작동하게 만들고 싶다하면, event.currentTarget하면 된다. 그렇게되면 event.target 은 td고 event.currentTarget은 table이 된다. currentTarget은 진짜 이벤트리스너를 붙인 애가 작동하게 된다.

그리고 나는 이벤트 버블링 현상을 막고싶다. 싶으면 event.stopPropagation()을 쓰면된다.
전에 태그의 기본동작을 막기위해 preventDafault();을 써봤는데, 이벤트의 버블링을 막기위해서는 stopPropagation을 쓰면된다.

이벤트버블링의 반대인 이벤트 캡처링이란 것도 있다. 캡처링은 부모를 클릭했을때, 자식요소한테 이벤트 가는것을 얘기한다. 

보통 이벤트 캡처링을 사용할 때는 팝업이 대표적인 예시가 된다.
팝업같은 경우 바깥쪽을 클릭하면 팝업의 부모요소인데, 이거를 이벤트 캡처링을 하면 부모를 클릭했을 때 팝업으로 클릭이벤트가 전달이 된다. useCapture의 기본값은 false이기때문에 true로 바꿔주면 캡처링을 사용할 수 있다. 예로 $table.addEventListener('click', callback, true); 이렇게 사용해주면 된다.
*/


document.body.append($table);
document.body.append($result);

// const arr = [];

// const $table2 = document.createElement('table');

// for (let i = 0; i < 5; i++) {
// 	const $tr2 = document.createElement('tr')
// 	$table2.append($tr2);
// 	const cells = [];
// 	for (let j = 0; j < 4; j++) {
// 		cells.push(1);
// 		const $td2 = document.createElement('td')
// 		$tr2.append($td2);
// 		// $td2.textContent = '1';
// 	}
// 	arr.push(cells);
// }

// document.body.append($table2);
// console.log(arr);



/*
1분퀴즈 버튼을 클릭할 때 'hello, event bubbling'을 alert 하게 다음 코드를 수정하세요
이벤트 리스너를 button 태그에 달아서는 안됩니다.

const $header = document.createElement('header');
const $div = document.createElement('div')
const $button = document.createElement('button');

$header.append($div);
$div.append($button);
$button.textContent = '클릭';

$header.addEventListener('click',(e)=>{
	e.target(alert('hello, event bubbling'));
})

document.body.append($header);
구조 분해 할당 문법이라는 것이 있는데
const { a, b } = obj; 이것을 어떻게 해석해야하냐면
const a = obj.a		const b = obj.b로 해석한다 이 두줄을 간단하게 한 줄로 표현한것이다.
만약 여기서 나는 const c = obj.c가 필요하다 싶으면 추가로 한줄을 치는것이아니라
const { a, b } = obj에서 c를 추가하면 된다. 그럼 const { a, b, c,} = obj로 표현할 수 있다.
*/

