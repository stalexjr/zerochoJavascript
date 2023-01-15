const $startSceern = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');

const hero = {
	name: '',
	lev: 1,
	maxHp: 100,
	hp: 100,
	xp: 0,
	att: 10,
};

let monster = null;
const monsterList = [
	{ name: '슬라임', hp: 25, att: 10, xp: 10 },
	{ name: '스켈레톤', hp: 50, att: 15, xp: 20 },
	{ name: '마왕', hp: 150, att: 35, xp: 50 },
];

$startSceern.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = e.target['name-input'].value;
	// form안에 있는 input이나 button은 id가 있으면 이런식으로 불러올 수 있다. 이름 사이에 -가 들어있으면 e.target.name-input (dot notation)으로 사용할 수 없다. 하이픈이 들어가 있다면 반드시 대괄호로 사용해야만 한다.
	$startSceern.style.display = 'none';
	$gameMenu.style.display = 'block';
	$heroName.textContent = name;
	$heroLevel.textContent = `${hero.lev} Lev`;
	$heroHp.textContent = `HP : ${hero.hp}/${hero.maxHp}`;
	$heroXp.textContent = `XP : ${hero.xp}/${15 * hero.lev}`;
	$heroAtt.textContent = `ATT : ${hero.att}`;
	hero.name = name;
});

$gameMenu.addEventListener('submit', (e) => {
	e.preventDefault();
	const input = e.target['menu-input'].value;
	if (input === '1') {
		$gameMenu.style.display = 'none';
		$battleMenu.style.display = 'block';
		monster = JSON.parse(
			JSON.stringify(monsterList[Math.floor(Math.random() * monsterList.length)])
		);
		monster.maxHp = monster.hp;
		$monsterName.textContent = monster.name;
		$monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
		$monsterAtt.textContent = `ATT: ${monster.att}`;
	} else if (input === '2') {

	} else if (input === '3') {

	}
	$battleMenu.addEventListener('submit', (e) => {
		e.preventDefault();
		const input = e.target['battle-input'].value;
		if(input === '1'){

		}else if(input === '2'){

		}else if(input === '3'){
			
		}
	});
});

