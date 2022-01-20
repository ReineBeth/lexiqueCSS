const navigationLi = document.querySelectorAll('.navigation_ul_li');
const navigationUl = document.querySelector('.navigation_ul');
const h1Element = document.querySelector('h1');
const modale = document.querySelectorAll('.modale');

// Boutons 
const boutonMenu = document.querySelector('.menu_btn'); 
const boutonFermer = document.querySelector('.close_btn');
const boutonModale = document.querySelectorAll('.modale_btn'); 
const boutonFermerModale = document.querySelectorAll('.modale_close_btn');
const boutonFlecheTop = document.querySelector('.fleche_haut_btn'); 

let dernierIndex = 0; 

function ouvrirMenu() { 
	boutonFermer.style.display = 'block'; 
	boutonMenu.style.display = 'none'; 
	
	navigationLi.forEach(element => {
		element.style.display= 'block'; 
	}); 
}

function fermerMenu() { 
	boutonFermer.style.display = 'none'; 
	boutonMenu.style.display = 'block'; 
	
	navigationLi.forEach(element => {
		element.style.display= 'none'; 
	});
}

function changementHeader() { 
	if (window.scrollY >= 30) {
		h1Element.style.fontSize = '1rem';
		h1Element.style.marginTop = '15px'; 
		navigationUl.style.fontSize = '0.8rem';
		navigationUl.style.padding = '0';
	  } else {
		h1Element.style.fontSize = '2rem';
		h1Element.style.marginTop = '50px'; 
		navigationUl.style.fontSize = '1.5rem';
		navigationUl.style.padding = '10px';
	  }
}

boutonMenu.addEventListener('click', ouvrirMenu);

boutonFermer.addEventListener('click', fermerMenu); 

window.addEventListener('scroll', changementHeader); 

window.addEventListener('resize', function() { 

	fermerMenu();

	if(window.innerWidth >= '800') {  
		ouvrirMenu(); 
		boutonFermer.style.display = 'none'; 
	}
	
});

for(let index = 0; index < boutonModale.length; index++) { 
	boutonModale[index].addEventListener('click', function() { 
		modale[dernierIndex].style.display = 'none'; 
		
		modale[index].style.display = 'block';
		
		dernierIndex = index; 
	});
}

for(let index = 0; index < boutonFermerModale.length; index++) { 
	boutonFermerModale[index].addEventListener('click', function() { 
		modale[index].style.display = 'none';
	});

}
