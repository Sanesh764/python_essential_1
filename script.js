const slides = document.querySelectorAll('.slide');
        let currentSlideIndex = 0;
        const totalSlidesSpan = document.getElementById('total-slides');
        const currentSlideSpan = document.getElementById('current-slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        function updateSlideDisplay() {
            slides.forEach((slide, index) => {
                if (index === currentSlideIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            currentSlideSpan.textContent = currentSlideIndex + 1;
            totalSlidesSpan.textContent = slides.length;
            updateNavigationButtons();
        }

        function updateNavigationButtons() {
            prevBtn.disabled = currentSlideIndex === 0;
            nextBtn.disabled = currentSlideIndex === slides.length - 1;
        }

        prevBtn.addEventListener('click', () => {
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                updateSlideDisplay();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentSlideIndex < slides.length - 1) {
                currentSlideIndex++;
                updateSlideDisplay();
            }
        });

        // Initialize presentation
        updateSlideDisplay();