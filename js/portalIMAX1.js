




var supportBtnWrapper = document.querySelector('.supportBtnWrapper');
var supportBtnBg = document.querySelector('.supportBtnBg');


supportBtnWrapper.addEventListener('mouseover', function() {
supportBtnBg.style.animationName = 'supportBtn';
supportBtnBg.style.animationDuration = '1s';
});


supportBtnWrapper.addEventListener('mouseout', function() {
supportBtnBg.style.removeProperty('animation-name');
supportBtnBg.style.removeProperty('animation-duration');
});






