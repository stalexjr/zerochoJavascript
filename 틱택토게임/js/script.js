const data = [];
let turn = 'O';

for (let i = 0; i < 3; i++) {
	data.push([]);
}

const $table = document.createElement('table');

for (let i = 0; i < 3; i++) {
	const $tr = document.createElement('tr');
	for (let i = 0; i < 3; i++) {
		const $td = document.createElement('td');
		$td.addEventListener('click', (e) => {
			//칸에 글자가 있나 ? 
			if (e.target.textContent) return;
			console.log('evnet');
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
	$table.append($tr);
}
document.body.append($table);


