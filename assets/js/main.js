import Project from './projects';
import Nav from './nav';

document.addEventListener("DOMContentLoaded", () => {
  const containerEl = document.querySelector('.gallery-container');
  const mixer = mixitup(containerEl);
  mixer.toggleOn('.prog');

});
