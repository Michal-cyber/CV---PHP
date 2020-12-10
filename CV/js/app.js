/**
 * ARRAY
 * */
const quotes = [
	{
		'quote': "Neberte život príliš vážne, Aj tak z neho nevyviaznete živý"
	},

	{
		'quote': "Neštastného človeka z teba spravia z teba iba vlastne myšlienky"
	},

	{
		'quote': "Dôležité vec je neprestať sa pýtať"
	},

	{
		'quote': "Ak chceš naplniť svoje sny, prebuď sa"
	},

	{
		'quote': "Ak ešte stále hladáš osobu, ktorá zmení tvoj život, pozri sa do zrkadla!"
	},

	{
		'quote': "Prekonajte strach a dosiahnete ciel",
		'name': "Napoleon Hill"
	},

	{
		'quote': "Nikdy nedosiahnete úspech bez opakovaného úsilia",
		'name': "Francoise de Maintenon"
	},

	{
		'quote': "Ak chceš byť naozaj úspešný a štastný, musíš robiť to, čo ťa naozaj baví",
		'name': "Walt Disney"
	},

	{
		'quote': "Ťažká drina sa vždy vráti"
	},

	{
		'quote': "Vyber si svoju budúcnosť skôr, ako si ona vyberie teba"
	},

	{
		'quote': "Nenechám sa odradiť. Pretože každý zlý pokus, ktorý mám za sebou, je ďaľším krokom vpred - krokom k úspechu",
		'name': "Thomas A. Edison"
	}

];

/**
 * END OF ARRAY 
 */

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1)
};

/**
 * PURE JS
 */

/**
 * QUOTES BUTTON
 */

const quoteOfArray = document.querySelector('#quote'),
	hideEl = document.querySelector('.hide');

let btn = document.querySelector('#btn');

	hideEl.style.display = 'none';

btn.addEventListener('click', function () {

	const random = Math.floor(Math.random() * quotes.length);

	if (btn.innerText === "Show something Interesting!") {
		hideEl.style.display = 'block';
		quoteOfArray.innerText = quotes[random].name ? quotes[random].quote + " - " + quotes[random].name : quotes[random].quote;
	}

});

	  
/**
 * jQUERY 
 */

// hide elements in GAMES
	const list = $('.games'),
	 ddFind = list.find('dd'),
	 dtFind = list.find('dt');

ddFind.hide();

dtFind.on('click', function(event) {
	$(this).next().slideToggle()
		   .siblings('li dd').slideUp().addClass('active');
	event.preventDefault();
});


/*
* 
* Show some links and hide some links
*/

const show = $('.show-more'),
	  findShow = show.find('.show'),
	  findHide = show.find('.hide'),
	  gallery = $('.gallery'),
	  showMe = $('.showMe');

showMe.hide();
gallery.hide();

show.on('click', (event) => {
	event.preventDefault();
	showMe.show();

	if(show.html() == 'Show more!') {
		showMe.fadeIn(200);
		gallery.fadeIn(200)
		show.html('Hide me');	
	}
	else {
		showMe.fadeOut(200);
		gallery.fadeOut(200);
		show.html('Show more!');
	}
})

/**
 * OVERLAY
 */

const overlay = $('<div/>', { id: 'overlay'});
let image = $('<img>');

overlay.appendTo('body').hide();

gallery.on('click', 'a', function(event) {
  const href = $(this).attr( 'href' );
	  image.attr('src', href);

	  overlay.html(image).show(200);
	  overlay.show(200);

  event.preventDefault();
});

overlay.on('click', function() {
	$(this).hide(200);
});

$(document).on('keyup', function(event) {
  if (event.which == 27) {
	  overlay.hide(200);
  }

})

//load interests
const interLinks = $('.interests-link-set'),
	  selectedLink = $('.interestShow').find('.selectedLink'),
	  delay = 200;

let	selectedInterest;

interLinks.hide();

 function showInterest( selected ) {
	if( selected.length ) {
		const id = selected.find('a').attr('href');
		selectedInterest = $(id);
	}
	
	const newInterests = selectedInterest.length ? selectedInterest.fadeIn(delay) : interLinks.eq(0).fadeIn(delay);
	interLinks.not(newInterests).delay(delay).hide();
	newInterests.delay(delay).fadeIn();
}
	
showInterest(selectedLink);
/**
 * SHOW ME SOME LINKS - SELECT SERIAL ANIME
 */

$('.interestShow a').on('click', function(event) {

	const li = $(this).parent();

	li.addClass('selectedLink')
	  .siblings().removeClass('selectedLink');

	showInterest(li);

	event.preventDefault();

	gallery.delay(delay).fadeOut();

})

// Get links from Interests and get them functional for gallery
function selectedLinks( link, classic) {

	let	selectedSerial = $(link).find('.' + classic);
	
		$(link).find('a').on('click', function(event) {
			event.preventDefault();

			const a = $(this),
				li = a.parent(),
				href = a.attr('href');

			if (selectedSerial.is(li)) return;
			
			selectedSerial = li;

			li.addClass(classic)
			.siblings().removeClass(classic);

			gallery.find('.gallery-set').delay(delay).fadeOut();

			$('.gallery').load(href + ' .gallery-set').delay(delay).fadeIn();

	});

}

selectedLinks('#Serials', 'selectedLink');
selectedLinks('#Anime', 'selectedLink');
selectedLinks('#Other', 'selectedLink');

