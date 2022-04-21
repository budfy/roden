function playHeaderVideo() {
  const video = document.querySelector('.header__video');
  const header = document.querySelector('.header');
  const dur = video.duration;
  const scroll = window.scrollY;
  let percent = (scroll / (header.offsetHeight - window.innerHeight)).toFixed(2);
  video.currentTime = dur * (percent <= 1 ? percent : 1);
}

window.addEventListener('scroll', playHeaderVideo)