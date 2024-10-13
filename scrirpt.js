// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create a 'Back to Top' button
let backToTopButton = document.createElement('button');
backToTopButton.innerText = "Top";
backToTopButton.id = "backToTop";
backToTopButton.style.display = "none";
document.body.appendChild(backToTopButton);

// Show 'Back to Top' button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll back to top when 'Back to Top' button is clicked
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
