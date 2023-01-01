
const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');

const rows = [];
let turn = 'O';

const checkWinner = (target) => {
	let rowIndex;
	let cellIndex;
	rows.forEach((row, ri) => {
		row.forEach((cell, ci) => {
			if (cell === target) {
				rowIndex = ri;
				cellIndex = ci;
			}
		});
	});
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

*/
const callback = (e) => {
	//칸에 글자가 있나 ? 
	if (e.target.textContent !== '') {
		console.log('빈칸이 아닙니다');
		return;
	}
	if (e.target.textContent) return;
	// console.log('event');
	e.target.textContent = turn;
	//승부 확인
	if (checkWinner(e.target)) {
		$result.textContent = `${turn} 님의 승리 !!`;
		$table.removeEventListener('click',callback);
		return;
	};
	//무승부 검사
	let draw = true;
	rows.forEach((row)=>{
		row.forEach((cell)=>{
			if(!cell.textContent){
				draw = false;
			}
		});
	});
	if(draw){
		$result.textContent = '무승부';
		return;
	};
	// if (turn === 'O') {
	// 	turn = 'X';
	// } else if (turn === 'X') {
	// 	turn = 'O';
	// }
	// 👆 위 코드를 밑으로 줄일 수 있다.
	turn = turn === 'O' ? 'X' : 'O';
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

