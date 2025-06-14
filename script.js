// script for top

    
    // script for quick buttons

   let currentSlide = 0;

    // Function to go to the next slide
    function nextSlide() {
        const items = document.querySelectorAll('.carousel-item');
        const totalSlides = items.length;
        currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
        updateSlider();
    }

    // Function to go to the previous slide
    function prevSlide() {
        const items = document.querySelectorAll('.carousel-item');
        const totalSlides = items.length;
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to the last slide
        updateSlider();
    }

    // Function to update the position of the carousel
    function updateSlider() {
        const carousel = document.querySelector('.carousel');
        const offset = -currentSlide * 100; // Shift by 100% for each slide
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Optionally, you can auto-slide every 3 seconds
    setInterval(nextSlide, 3000);
