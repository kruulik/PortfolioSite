import '../css/main.scss';

import Project from './projects';
import Nav from './nav';
import SweetScroll from "sweet-scroll";


document.addEventListener("DOMContentLoaded", () => {
  const containerEl = document.querySelector('.gallery-container');
  const mixer = mixitup(containerEl);
  const label = document.querySelector('.label-wrapper');
  const sweetScroll = new SweetScroll({ quickMode: true});

  mixer.toggleOn('all');
});
