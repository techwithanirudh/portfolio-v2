import "./style.css";
import Experience from "./Experience/Experience.js";

const experience = new Experience(document.querySelector(".experience-canvas"));

const arrowSvgWrapper = document.querySelector('.arrow-svg-wrapper');
const scrollToBottom = document.querySelector('.scroll');

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'style') {
      const arrowSvgWrapperOpacity = window.getComputedStyle(arrowSvgWrapper).getPropertyValue('opacity');
      if (arrowSvgWrapperOpacity === '0') {
        scrollToBottom.style.opacity = '1';
      }
    }
  });
});

observer.observe(arrowSvgWrapper, { attributes: true });

scrollToBottom.addEventListener('click', function () {
	document.documentElement.scrollBy({
		top: 1500,
		behavior: 'smooth'
	});
});

// Function to loop between start and end timestamps
window.loopBetween = function(start, end) {
	// Add an event listener for the timeupdate event
	projectVideo.addEventListener('timeupdate', () => {
		// Check if the current time has reached the end timestamp
		if (projectVideo.currentTime >= end) {
			// Seek back to the start timestamp
			projectVideo.currentTime = start;
		}
	});
}
