const num = Math.floor(Math.random() * (10 - 1) + 1) -1;


const frases =[
	'Gestão de atividades de assessoria de imprensa',
	'Maior banco de contatos de jornalistas',
	'Ferramenta mailing e distribuição',
	'Ferramenta mailing de imprensa',
	'Distribuição de press releases',
	'Gestão de atividades de PR',
	'Consulta aos mailings',
	'Mailing de influenciadores',
	'Communicate More'
	];




const headingPrincipal = document.createElement('h1');
headingPrincipal.className = 'section1Title';
headingPrincipal.setAttribute('amp-fx','fly-in-left');
headingPrincipal.setAttribute('data-duration','1000ms');
headingPrincipal.setAttribute('data-margin-start','30%');
headingPrincipal.setAttribute('data-easing','ease-out');
headingPrincipal.appendChild(document.createTextNode(frases[num]));
document.querySelector('.section1Wrapper').appendChild(headingPrincipal);








if (window.matchMedia("(min-width:1900px)").matches) {
	if (num === 0) {
		document.querySelector('.section1Title').style.fontSize = '90px';
		console.log('num = 5: ' + num);
	} else if (num === 1 || num === 2 || num === 3) {
		document.querySelector('.section1Title').style.fontSize = '100px';
		console.log('num = 1 ou 2 ou 3: ' + num);
	} else if (num === 4 || num === 5) {
		document.querySelector('.section1Title').style.fontSize = '110px';
		console.log('num = 2: ' + num);
	} else {
		console.log('num = outros: ' + num);
		document.querySelector('.section1Title').style.fontSize = '120px';
	};
} else if (window.matchMedia("(min-width: 1500px) and (max-width: 1899px)").matches) {
	if (num === 0) {
		document.querySelector('.section1Title').style.fontSize = '77px';
		console.log('num = 5: ' + num);
	} else if (num === 1 || num === 2 || num === 3) {
		document.querySelector('.section1Title').style.fontSize = '90px';
		console.log('num = 1 ou 2 ou 3: ' + num);
	} else if (num === 4 || num === 5) {
		document.querySelector('.section1Title').style.fontSize = '90px';
		console.log('num = 2: ' + num);
	} else {
		console.log('num = outros: ' + num);
		document.querySelector('.section1Title').style.fontSize = '90px';
	};
} else if (window.matchMedia("(min-width: 1000px) and (max-width: 1499px)").matches) {
	if (num === 0) {
		document.querySelector('.section1Title').style.fontSize = '8vh';
		console.log('num = 5: ' + num);
	} else if (num === 1 || num === 2 || num === 3) {
		document.querySelector('.section1Title').style.fontSize = '8vh';
		console.log('num = 1 ou 2 ou 3: ' + num);
	} else if (num === 4 || num === 5) {
		document.querySelector('.section1Title').style.fontSize = '8vh';
		console.log('num = 2: ' + num);
	} else {
		console.log('num = outros: ' + num);
		document.querySelector('.section1Title').style.fontSize = '8vh';
	};
} else if (window.matchMedia("(min-width: 600px) and (max-width: 999px)").matches) {
	if (num === 0) {
		document.querySelector('.section1Title').style.fontSize = '40px';
		console.log('num = 5: ' + num);
	} else if (num === 1 || num === 2 || num === 3) {
		document.querySelector('.section1Title').style.fontSize = '50px';
		console.log('num = 1 ou 2 ou 3: ' + num);
	} else if (num === 4 || num === 5) {
		document.querySelector('.section1Title').style.fontSize = '60px';
		console.log('num = 2: ' + num);
	} else {
		console.log('num = outros: ' + num);
		document.querySelector('.section1Title').style.fontSize = '50px';
	};
} else if (window.matchMedia("(min-width: 320px) and (max-width: 599px)").matches) {
	if (num === 0) {
		document.querySelector('.section1Title').style.fontSize = '30px';
		console.log('num = 5: ' + num);
	} else if (num === 1 || num === 2 || num === 3) {
		document.querySelector('.section1Title').style.fontSize = '40px';
		console.log('num = 1 ou 2 ou 3: ' + num);
	} else if (num === 4 || num === 5) {
		document.querySelector('.section1Title').style.fontSize = '40px';
		console.log('num = 2: ' + num);
	} else {
		console.log('num = outros: ' + num);
		document.querySelector('.section1Title').style.fontSize = '40px';
	};
};













window.onscroll = function() {scrollFunction()};










function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.querySelector('#scrollToTopButton').style.bottom = "50px";
  } else {
    document.getElementById("navbar").style.top = "-120px";
    document.querySelector('#scrollToTopButton').style.bottom = "-50px";
  }
};

document.querySelector('.tagSuporteWrapper').addEventListener('mouseleave', function() {
	document.querySelector('.tagSuporteWrapper').classList.remove('bounce');
	console.log('sair do btn');
});

document.querySelector('.tagSuporteWrapper').addEventListener('mouseenter', function() {
	document.querySelector('.tagSuporteWrapper').classList.add('bounce');
	document.querySelector('.tagSuporteModal').style.transform = 'translateX(0px)';
	console.log('sair do btn');
});

document.querySelector('.tagSuporteBtnClose').addEventListener('click', function() {
	document.querySelector('.tagSuporteModal').style.transform = 'translateX(-260px)';
})

document.querySelector('.tagSupporteBtn').addEventListener('click', function() {

});

document.querySelector('.contatosModalSelectDayForm').addEventListener('click', displayOn);
document.querySelector('.contatosModalSelectHourForm').addEventListener('click', displayOn);













function displayOn(el) {
	if (el.target.classList.contains('dropdownClick')) {
		el.target.lastElementChild.classList.toggle('displayOn');
	} else {
		return;
	}
	console.log(el.target);
};















function dropDownSelect(el) {
	if (el.target.classList.contains('dropDownItem')) {
		el.target.parentElement.parentElement.firstElementChild.textContent = el.target.textContent;
		el.target.parentElement.classList.toggle('displayOn');

	} else {
		console.log('erro');
	}
};
















document.querySelector('.contatosModalSelectDayFormDialogBox').addEventListener('click', dropDownSelect);
document.querySelector('.contatosModalSelectHourFormDialogBox').addEventListener('click', dropDownSelect);

document.querySelector('#contatosModalTabOne').addEventListener('click', function() {
	document.querySelector('.contatosModalTabOne').style.display = 'block';
	document.querySelector('.contatosModalTabTwo').style.display = 'none';
});

document.querySelector('#contatosModalTabTwo').addEventListener('click', function() {
	document.querySelector('.contatosModalTabOne').style.display = 'none';
	document.querySelector('.contatosModalTabTwo').style.display = 'block';
});

var x = window.matchMedia("(max-width: 700px)");

document.querySelector('#contatosModalTabThree').addEventListener('click', function() {
	if (x.matches) {
		window.open('https://api.whatsapp.com/send?1=pt_BR&phone=551130906119', '_blank');
	} else {
		window.open('https://api.whatsapp.com/send?1=pt_BR&phone=551130906119', '_blank');
	};
});

document.querySelector('.tagSupporteBtn').addEventListener('click', function() {
	document.querySelector('.contatosModalWrapper').style.display = 'flex';
	document.querySelector('.tagSuporteModal').style.transform = 'translateX(-260px)';
});

document.querySelector('.contatosModalCloseBtn').addEventListener('click', function() {
	document.querySelector('.contatosModalWrapper').style.display = 'none';
});














function lighthouse() {
	document.querySelector('i-amphtml-video-mask').setAttribute('aria-label', 'button');
};















let listaDias = document.querySelector('.contatosModalSelectDayFormDialogBox');

const tamanhoLista = 3;

function EscreverDiaSemana(item) {
	switch(item) {
		case 1:
			return 'Domingo';
		case 2:
			return 'Segunda-feira';
		case 3:
			return 'Terça-feira';
		case 4:
			return 'Quarta-feira';
		case 5:
			return 'Quinta-feira';
		case 6:
			return 'Sexta-feira';
		case 7:
			return 'Sábado';
	};
};

function EscreverMes(it) {
	switch(it) {
		case 1:
			return 'Janeiro';
		case 2:
			return 'Fevereiro';
		case 3:
			return 'Março';
		case 4:
			return 'Abril';
		case 5:
			return 'Maio';
		case 6:
			return 'Junho';
		case 7:
			return 'Julho';
		case 8:
			return 'Agosto';
		case 9:
			return 'Setembro';
		case 10:
			return 'Outubro';
		case 11:
			return 'Novembro';
		case 12:
			return 'Dezembro';
	};
};

const feriados = [
	[1,1,2020,'Confraternização Universal'],
	[24,2,2020,'Carnaval'],
	[25,2,2020,'Carnaval'],
	[10,4,2020,'Paixão de Cristo'],
	[21,4,2020,'Tiradentes'],
	[1,5,2020,'Dia do Trabalho'],
	[11,6,2020,'Corpus Christi'],
	[7,9,2020,'Independência do Brasil'],
	[12,10,2020,'Nossa Sr.a Aparecida - Padroeira do Brasil'],
	[2,11,2020,'Finados'],
	[15,11,2020,'Proclamação da República'],
	[25,12,2020,'Natal'],
];

for(let i = 0; i <= tamanhoLista; i++) {
	let dia = new Date();
	dia.setDate(dia.getDate() + i + 1);
	let diaSemanaAtual = dia.getDay() +1;
	let diaAtual = dia.getDate();
	let mesAtual = dia.getMonth() +1;
	let anoAtual = dia.getFullYear();
	// console.log(`dia ${dia}`);
	let ultimoDiaMes = (new Date(anoAtual, mesAtual, 0)).getDate();

	function checkFds() {
		if (diaSemanaAtual > 1 && diaSemanaAtual < 7) {
			console.log(`diaSemanaAtual ${diaSemanaAtual}`);
			console.log(`diaAtual ${diaAtual}`);
			console.log(`mesAtual ${mesAtual}`);
			console.log(`anoAtual ${anoAtual}`);
			const listItem = document.createElement('span');

			let weekend = false;
			let tomorrow = true;


			function checkFeriado() {
				feriados.forEach(function(el) {
					let contDia = el[0];
					let contMes = el[1];
					if(contDia === diaAtual && contMes === mesAtual) {
						weekend = true;
						console.log('-----------------feriado');
					};
				});
			};

			checkFeriado();

			i === 0 ? tomorrow = true : tomorrow = false;

			if(weekend === false) {
				let text = '';
				if(tomorrow === true) {
					text = document.createTextNode(`Amanhã, Dia ${diaAtual} de ${EscreverMes(mesAtual)}, ${EscreverDiaSemana(diaSemanaAtual)}`);
				} else {
					text = document.createTextNode(`Dia ${diaAtual} de ${EscreverMes(mesAtual)}, ${EscreverDiaSemana(diaSemanaAtual)}`);

				};
				listItem.appendChild(text);
				listaDias.appendChild(listItem);
			};
		};
	};
	checkFds();
};