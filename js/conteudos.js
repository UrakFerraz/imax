window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }
};




/*
var contentBlockWrapper1 = document.querySelector('.block1');
var contentBlockWrapper2 = document.querySelector('.block2');
var contentBlockWrapper3 = document.querySelector('.block3');
var innerBlock1 = document.querySelector('.innerBlock1');
var innerBlock2 = document.querySelector('.innerBlock2');
var innerBlock3 = document.querySelector('.innerBlock3');
var outerBlock1 = document.querySelector('.outerBlock1');
var outerBlock2 = document.querySelector('.outerBlock2');
var outerBlock3 = document.querySelector('.outerBlock3');



contentBlockWrapper1.addEventListener('mouseover', function() {
	innerBlock1.style.left = '-180px';
	innerBlock1.style.top = '-180px';
	outerBlock1.style.opacity = '.3';
	this.style.animation = 'zoomIn 2s';
});


contentBlockWrapper1.addEventListener('mouseout', function() {
	innerBlock1.style.left = '-200px';
	innerBlock1.style.top = '-200px';
	outerBlock1.style.opacity = '.8';
	this.style.animation = 'zoomOut 2s';
});



contentBlockWrapper2.addEventListener('mouseover', function() {
	innerBlock2.style.left = '-180px';
	innerBlock2.style.top = '-180px';
});


contentBlockWrapper2.addEventListener('mouseout', function() {
	innerBlock2.style.left = '-200px';
	innerBlock2.style.top = '-200px';
});



contentBlockWrapper3.addEventListener('mouseover', function() {
	innerBlock3.style.left = '-180px';
	innerBlock3.style.top = '-180px';
});


contentBlockWrapper3.addEventListener('mouseout', function() {
	innerBlock3.style.left = '-200px';
	innerBlock3.style.top = '-200px';
});
*/



var contentBlockWrapper1 = document.querySelector('.block1');
var contentBlockWrapper2 = document.querySelector('.block2');
var contentBlockWrapper3 = document.querySelector('.block3');
var photoBg1 = document.querySelector('.photoBg1');
var photoBg2 = document.querySelector('.photoBg2');
var photoBg3 = document.querySelector('.photoBg3');
var photoBg1Color = document.querySelector('.photoBg1Color');
var photoBg2Color = document.querySelector('.photoBg2Color');
var photoBg3Color = document.querySelector('.photoBg3Color');
var contentSvg1 = document.querySelector('.contentSvg1');





contentBlockWrapper1.addEventListener('mouseover', function() {
	photoBg1.style.transform = 'scale(1.5) rotate(18deg)';
	photoBg1.style.filter = 'blur(30px)';
	photoBg1Color.style.opacity = '.2';
});


contentBlockWrapper1.addEventListener('mouseout', function() {
	photoBg1.style.transform = 'scale(1) rotate(0deg)';
	photoBg1.style.filter = 'blur(0px)';
	photoBg1Color.style.opacity = '1';

});




contentBlockWrapper2.addEventListener('mouseover', function() {
	photoBg2.style.transform = 'scale(1.5) rotate(18deg)';
	photoBg2.style.filter = 'blur(20px)';
	photoBg2Color.style.opacity = '.2';
});


contentBlockWrapper2.addEventListener('mouseout', function() {
	photoBg2.style.transform = 'scale(1) rotate(0deg)';
	photoBg2.style.filter = 'blur(0px)';
	photoBg2Color.style.opacity = '1';
});



contentBlockWrapper3.addEventListener('mouseover', function() {
	photoBg3.style.transform = 'scale(1.5) rotate(18deg)';
	photoBg3.style.filter = 'blur(20px)';
	photoBg3Color.style.opacity = '.2';
});


contentBlockWrapper3.addEventListener('mouseout', function() {
	photoBg3.style.transform = 'scale(1) rotate(0deg)';
	photoBg3.style.filter = 'blur(0px)';
	photoBg3Color.style.opacity = '1';
});