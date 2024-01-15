let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slide').length;

  function showSlide(index) {
    const slides = document.querySelector('.slides');
    const newPosition = -index * 100 + '%';
    slides.style.transform = 'translateX(' + newPosition + ')';
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  // Auto change slide every 3 seconds
  setInterval(nextSlide, 3000);