
const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');

const rows = [];
let turn = 'O';

for (let i = 0; i < 3; i++) {
	const $tr = document.createElement('tr');
	const cells = [];
	for (let j = 0; j < 3; j++) {	//반복문 안에 반복문을 썼으면 i는 썻으니 j로 다른 변수를 쓰는것을 추천
		const $td = document.createElement('td');
		cells.push($td);
		$td.addEventListener('click', (e) => {
			//칸에 글자가 있나 ? 
			if (e.target.textContent) return;
			// console.log('event');
			e.target.textContent = turn;
			//승부 확인
			if (turn === 'O') {
				turn = 'X';
			} else if (turn === 'X') {
				turn = 'O';
			}
		});
		$tr.append($td);
	}
	rows.push(cells);
	console.log(rows)
	$table.append($tr);
}
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




// 구조 분해 할당 문법이라는 것이 있는데
// const { a, b } = obj; 이것을 어떻게 해석해야하냐면
// const a = obj.a		const b = obj.b로 해석한다 이 두줄을 간단하게 한 줄로 표현한것이다.
// 만약 여기서 나는 const c = obj.c가 필요하다 싶으면 추가로 한줄을 치는것이아니라
// const { a, b } = obj에서 c를 추가하면 된다. 그럼 const { a, b, c,} = obj로 표현할 수 있다.


