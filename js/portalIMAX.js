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














const data = new Date();

let hoje = data.getDate();

const totalDiasListados = 3;

let diaSemana = data.getDay() +1;

let mesAtual = data.getMonth() +1;

let anoAtual = data.getFullYear();

let ultimoDiaMes = (new Date(anoAtual, mesAtual + 1, 0)).getDate();

console.log(`ultimoDiaMes ${ultimoDiaMes}`);

function escreverMesAtual(mes) {
	switch (mes) {
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
	default:
		return 'mes inexistente';
	};
};



const feriadosAnoAtual = [{mes: 1, dia: 1}, {mes: 2, dia: 25}, {mes: 3, dia: 10}, {mes: 4, dia: 21}, {mes: 5, dia: 1}, {mes: 6, dia: 11}, {mes: 9, dia: 7}, {mes: 10, dia: 12}, {mes: 11, dia: 2}, {mes: 11, dia: 15}, {mes: 12, dia: 25}];



let listaDias = document.querySelector('.contatosModalSelectDayFormDialogBox');



console.log(hoje);

// criar lista com 4 datas
// inicia amanha
// descontar dia 1 e dia 7 são fds
// descontar feriados
// quando o dia chegar ao ultimo dia do mes iniciar outro mes




for(var i = 0; i <= totalDiasListados; i++) {
	const listItem = document.createElement('span');
	listItem.className = 'dropDownItem';
	if (i === 0) {
		listItem.textContent = 'Amanhã';
	}else {
		listItem.textContent = `${hoje +1} ${escreverMesAtual(mesAtual)}`;
	};
	listaDias.appendChild(listItem);
	hoje++;
};
