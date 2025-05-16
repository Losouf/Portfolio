document.addEventListener("DOMContentLoaded", function() {
    function showSlides(slideshowClass) {
        let slideIndex = 0;
        let slides = document.querySelectorAll(`${slideshowClass} .mySlides`);
        
        function updateSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                slides[i].classList.remove("fade-in"); 
                slides[i].classList.remove("fade-out"); 
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block"; 
            slides[slideIndex - 1].classList.add("fade-in");

            setTimeout(function() {
                slides[slideIndex - 1].classList.remove("fade-in");
                slides[slideIndex - 1].classList.add("fade-out");
            }, 2000);

            setTimeout(updateSlides, 3000);
        }

        updateSlides();
    }

    showSlides('.slideshow-1');
    showSlides('.slideshow-2');
});