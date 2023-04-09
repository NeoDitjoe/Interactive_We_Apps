
function highlightFooter() {
// Get the footer element
const footer = document.querySelector('footer');

// Add a class to change its background color
footer.classList.add('highlight');


setTimeout(function() {
  footer.classList.remove('highlight');
}, 300);
}


