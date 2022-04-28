function playHeaderVideo() {
  const video = document.querySelector('.header__video');
  const header = document.querySelector('.header');
  const dur = video.duration;
  const scroll = window.scrollY;
  let percent = (scroll / (header.offsetHeight - window.innerHeight)).toFixed(2);
  video.currentTime = dur * (percent <= 1 ? percent : 1);
}

window.addEventListener('scroll', playHeaderVideo);

function navGradient() {
  const nav = document.querySelector('.header__nav');
  nav.addEventListener('mousemove', setGradient, true);

  function setGradient(e) {
    e.stopPropagation()
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

    nav.setAttribute("style", `--gradient__start:${gradientStart}%; --gradient__end:${gradientEnd}%;`);
  }
}

navGradient();