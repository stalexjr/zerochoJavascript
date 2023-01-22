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
	attack(monster) {
		monster.hp -= this.att;
		/* 객체안에 들어있는 this는 이 객체의 자기 자신을 가르킨다. 지금 이 객체는 hero이기 때문에 this는 결국 hero를 가르키게 되는 것이다. 객체 안에 들어있을 때는 아주 간단한데, 몇가지 예외가 있다. 만약 attack(monster)가 attack(monster)=>{} 화살표함수면 이 this가 달라져 버린다. 그래서 this는 화살표 함수가 아닌 일반 펑션일때만 온전히 자기 자신을 가르킨다. 화살표 함수일때는 브라우저 상태에선 윈도우가 되어버린다. 윈도우란 document의 부모요소이다. */ 
		this.att -= monster.att;
	},
	heal(monster) {
		this.hp += 20;
		this.hp -= monster.att;
	},
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
	if (input === '1') {	//모험
		$gameMenu.style.display = 'none';
		$battleMenu.style.display = 'block';
		monster = JSON.parse(
			JSON.stringify(monsterList[Math.floor(Math.random() * monsterList.length)])
		);
		monster.maxHp = monster.hp;
		$monsterName.textContent = monster.name;
		$monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
		$monsterAtt.textContent = `ATT: ${monster.att}`;
		const monster1 = JSON.parse(JSON.stringify(monsterList[0]));
		// 👆 깊은 복사의 특성은 앞을 바꿔도 뒤를 바꿔도 바뀌지 않는다. 우리는 객체안의 정보가 필요할 뿐 객체 전부가 필요하진않다. 객체를 변수에다 대입할 때는 항상 얘가 복사되어야 되는지 참조해야 되는지 잘 살펴봐야한다.
		const monster2 = monsterList[0];
		// 👆 참조 관계의 특성상 앞을 바꾸면 뒤도 바뀌고 뒤를 바꾸면 앞도 바뀌게 된다.
		const monster3 = { ...monster[0] };
		// 👆 새로운 객체 리터럴을 만들어주고 그 안에서 복사를 원하는 곳에 ...을 붙이면 된다. 이건 얕은 복사 라고한다. 얕은 복사와 깊은 복사의 차이점은 얕은 복사는 곁 껍데기만 복사한다. 그리고 내부는 참조 형태이다. 깊은 복사는 참조관계가 끊기고 전부다 복사되는 것을 의미한다.
		monster1.name = '새 몬스터';
		console.log(monsterList[0].name);		//슬라임
		monster2.name = '새 몬스터';
		console.log(monsterList[0].name);		//새 몬스터
		console.log(monsterList[0] === monster1);		//false, 깊은 복사
		console.log(monsterList[0] === monster2);		//true, 참조 관계
	} else if (input === '2') {		//휴식

	} else if (input === '3') {		//종료

	}
	$battleMenu.addEventListener('submit', (e) => {
		e.preventDefault();
		const input = e.target['battle-input'].value;
		if (input === '1') {	//공격
			hero.attack(monster);
			monster.attack(hero);
			$heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
			$monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
			$message.textContent = `${hero.att}의 데미지를 주고, ${monster.att}의 데미지를 받았다.`;
		} else if (input === '2') {	//회복

		} else if (input === '3') {	//도망

		}
	});
});

