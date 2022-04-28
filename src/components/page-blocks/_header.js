function playHeaderVideo() {
  const video = document.querySelector('.header__video');
  if (video) {
    const header = document.querySelector('.header');
    const dur = video.duration;
    const scroll = window.scrollY;
    let percent = (scroll / (header.offsetHeight - window.innerHeight)).toFixed(2);
    video.currentTime = dur * (percent <= 1 ? percent : 1);
  }
}

window.addEventListener('scroll', playHeaderVideo);

function navGradient() {
  const nav = document.querySelector('.header__nav');
  const navLines = document.querySelectorAll('.header__nav-line');
  if (nav && navLines) {
    nav.addEventListener('mousemove', setGradient, true);

    function setGradient(e) {
      e.stopPropagation();
      let x = Math.floor(e.pageX - e.currentTarget.getBoundingClientRect().left);
      const w = e.currentTarget.offsetWidth;
      let basePercent = Math.round(x / w * 100);
      if (basePercent <= 0) {
        basePercent = 0;
      } else
      if (basePercent >= 100) {
        basePercent = 100;
      }

      let gradientWidth = 40;
      let gradientStart = basePercent - (gradientWidth / 2);
      if (gradientStart <= 0) {
        gradientStart = 0;
      } else if (gradientStart >= 60) {
        gradientStart = 60;
      };
      let gradientEnd = gradientStart + gradientWidth;

      if (gradientEnd >= 100) {
        gradientEnd = 100;
      }

      navLines.forEach(el => {
        el.setAttribute('style', `background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) ${gradientStart}%, #7461E8, rgba(0, 0, 0, 0) ${gradientEnd}%);`)
        // el.style.backgroundImage = `linear-gradient(90deg, rgba(0, 0, 0, 0) ${gradientStart}%, #7461E8, rgba(0, 0, 0, 0) ${gradientEnd}`;
      });
    }
  };

  nav.addEventListener('mouseout', () => {
    navLines.forEach(el => el.removeAttribute("style"));
  });
}

navGradient();

function headerBubbles() {
  const bubbles = document.querySelector('.header__bubbles');
  const bubbleArr = bubbles.querySelectorAll('.header__bubble');
  if (bubbles) {
    window.addEventListener('mousemove', moveBubbles);

    function moveBubbles(e) {
      let percentX = (e.pageX / window.innerWidth).toFixed(1);
      let percentY = (e.pageY / window.innerHeight).toFixed(1);

      const coeffitient = [7, -5, -3, 6];

      bubbleArr.forEach((el, index) => {
        el.setAttribute('style', `transform: translate(${coeffitient[index]*percentX*30}px, ${coeffitient[index]*percentY*10}px)`)
      })
    }

  }
};

headerBubbles();