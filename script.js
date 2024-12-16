
var navLinks = document.getElementById("navLinks")

function showMenu(){
    navLinks.style.right ="0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
const productItems = document.querySelectorAll('.product-item');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');

// Show modal when an image is clicked
productItems.forEach(item => {
    item.addEventListener('click', function() {
        const productInfo = this.getAttribute('data-info').split(', ');

        modalImage.src = this.querySelector('img').src; // Set the image in modal
        modalTitle.textContent = this.querySelector('p').textContent; // Set the title
        modalDescription.textContent = productInfo[0]; // Set the description
        modalPrice.textContent = productInfo[1]; // Set the price

        modalOverlay.style.display = 'flex'; // Show the modal
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none'; // Hide the modal
});

// Close modal when clicking outside the modal content
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none'; // Hide the modal
    }
});
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-sticky');
    } else {
        navbar.classList.remove('nav-sticky');
    }
};



