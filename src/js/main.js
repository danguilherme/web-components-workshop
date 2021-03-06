Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	transition: 'slide', // none/fade/slide/convex/concave/zoom

	// Optional reveal.js plugins
	dependencies: [
		{ src: 'js/vendor/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'js/vendor/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'js/vendor/notes/notes.js', async: true }
	]
});

Reveal.addEventListener('ready', onReady);

function onReady() {
  setBrowserFlags();
  updateBackgroundLegend();
  
	Reveal.addEventListener( 'slidechanged', updateBackgroundLegend);
}

function updateBackgroundLegend() {
  var slide = Reveal.getCurrentSlide();
  
  if (slide.getAttribute('data-state') === 'background-with-legend') {
    var target = document.querySelector('#background-legend .legend-text');
    var content = slide.querySelector('p.background-legend').innerHTML;
    target.innerHTML = content;
  };
}

function setBrowserFlags() {
  document.getElementsByTagName('html')[0].classList.add(bowser.name.toLowerCase());
}