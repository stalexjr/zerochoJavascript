const $startSceern = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');

$startSceern.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = e.target['name-input'].value;
	// form안에 있는 input이나 button은 id가 있으면 이런식으로 불러올 수 있다. 이름 사이에 -가 들어있으면 e.target.name-input (dot notation)으로 사용할 수 없다. 하이픈이 들어가 있다면 반드시 대괄호로 사용해야만 한다.
	$startSceern.style.display = 'none';
	$gameMenu.style.display = 'block';
	$heroName.textContent = name;
})