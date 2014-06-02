bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: '.bullet',
  scale: true,
  hash: true,
  progress: true,
  state: true,
  forms: true
});

document.addEventListener('keydown', function(e) {
	if(e.which == 36) {// HOME
		location.href= "#1";
	}
	else if(e.which == 35){ // END
		var jlhSection = document.querySelectorAll("section").length;
		location.href= "#"+jlhSection;
	}
});