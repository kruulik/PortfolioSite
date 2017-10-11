
const mixitup = require('mixitup');
const SweetScroll = require('sweet-scroll');
// import SweetScroll from "sweet-scroll";
// import mixitup from 'mixitup';

document.addEventListener("DOMContentLoaded", () => {
  const containerEl = document.querySelector('.gallery-container');
  const mixer = mixitup(containerEl);
  const label = document.querySelector('.label-wrapper');
  const sweetScroll = new SweetScroll({ quickMode: true});

  mixer.toggleOn('all');
});
