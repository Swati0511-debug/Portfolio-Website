var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});
srtop.reveal('h3',{delay: 100});
/* SCROLL About */
srtop.reveal('#AboutMe .AboutMeContainer p',{delay: 100});
srtop.reveal('#AboutMe .AboutMeContainer .btn',{delay: 100});
/*Scroll Education*/
srtop.reveal('.Education .TimelineContainer .card',{delay: 100});
srtop.reveal('.Education .TimelineContainer .card h4',{delay: 100});
srtop.reveal('.Education .TimelineContainer .card p',{delay: 100});
srtop.reveal('.Education .TimelineContainer .card img',{delay: 100});
/*Scroll Skills*/
srtop.reveal('.SkillsContainer .row .skills',{delay:100});

/*Conatct*/
srtop.reveal('.Contact .mb-3',{delay:100});
srtop.reveal('.Contact .btn',{delay:100});

/*Projects*/
srtop.reveal('.Projects .card',{delay:100});
srtop.reveal('.Projects p',{delay:100});
srtop.reveal('.Projects h5',{delay:100});
srtop.reveal('.Projects .btn',{delay:100});
