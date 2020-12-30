const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

var tab1 = document.querySelector('.tab1');
var tab2 = document.querySelector('.tab2');
var tab3 = document.querySelector('.tab3');

var tab1Info = document.querySelector('.firsttab');
var tab2Info = document.querySelector('.secondtab');
var tab3Info = document.querySelector('.thirdtab');

var navMenu = document.querySelector('.nav__menu');
var navMenuContent = document.querySelector('.nav__menu__content');

tab1.addEventListener('click',showFirstTab);
tab2.addEventListener('click',showSecondTab);
tab3.addEventListener('click',showThirdTab);

navMenu.addEventListener('click',showMenu);

function showMenu() {
	navMenuContent.style.display = 'block';
}

window.onclick = function(e) {
  if (!e.target.matches('.nav__menu')) {
  navMenuContent.style.display = 'none';
  }
}

function showFirstTab() {
	if (tab3Info.classList.contains('visuallyhidden')) {
			tab2Info.classList.add('visuallyhidden');
			tab2.style.background = '#333333';
			tab1.style.background = '#ff9b51';
			tab2Info.addEventListener('transitionend', function(e) {
				tab2Info.classList.add('hidden');
				tab1Info.classList.remove('hidden');
				setTimeout(function() {
					tab1Info.classList.remove('visuallyhidden');
				}, 1);
			}, {
				capture: false,
				once: true,
				passive: false
			});
		} else {
			tab3Info.classList.add('visuallyhidden');
			tab3.style.background = '#333333';
			tab1.style.background = '#ff9b51';
			tab3Info.addEventListener('transitionend', function(e) {
				tab3Info.classList.add('hidden');
				tab1Info.classList.remove('hidden');
				setTimeout(function() {
					tab1Info.classList.remove('visuallyhidden');
				}, 1);
			}, {
				capture: false,
				once: true,
				passive: false
			});		
		}	
}

function showSecondTab() {
	if (tab1Info.classList.contains('visuallyhidden')) {
			tab3Info.classList.add('visuallyhidden');
			tab3.style.background = '#333333';
			tab2.style.background = '#ff9b51';
			tab3Info.addEventListener('transitionend', function(e) {
				tab3Info.classList.add('hidden');
				tab2Info.classList.remove('hidden');
				setTimeout(function() {
					tab2Info.classList.remove('visuallyhidden');
				}, 1);
			}, {
				capture: false,
				once: true,
				passive: false
			});
		} else {
			tab1Info.classList.add('visuallyhidden');
			tab1.style.background = '#333333';
			tab2.style.background = '#ff9b51';
			tab1Info.addEventListener('transitionend', function(e) {
				tab1Info.classList.add('hidden');
				tab2Info.classList.remove('hidden');
				setTimeout(function() {
					tab2Info.classList.remove('visuallyhidden');
				}, 1);
			}, {
				capture: false,
				once: true,
				passive: false
			});		
		}
}

function showThirdTab() {
	
		if (tab1Info.classList.contains('visuallyhidden')) {
			tab2Info.classList.add('visuallyhidden');
			tab2.style.background = '#333333';
			tab3.style.background = '#ff9b51';
			tab2Info.addEventListener('transitionend', function(e) {
				tab2Info.classList.add('hidden');
				tab3Info.classList.remove('hidden');
				setTimeout(function() {
					tab3Info.classList.remove('visuallyhidden');
				}, 0.5);
			}, {
				capture: false,
				once: true,
				passive: false
			});
		} else {
			tab1Info.classList.add('visuallyhidden');
			tab1.style.background = '#333333';
			tab3.style.background = '#ff9b51';
			tab1Info.addEventListener('transitionend', function(e) {
				tab1Info.classList.add('hidden');
				tab3Info.classList.remove('hidden');
				setTimeout(function() {
					tab3Info.classList.remove('visuallyhidden');
				}, 0.5);
			}, {
				capture: false,
				once: true,
				passive: false
			});		
		}
}
