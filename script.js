

    // ScrollBar & Animation JS
    document.addEventListener("DOMContentLoaded", function () {
        const animatedElements = document.querySelectorAll(".scroll-animation");
    
        function debounce(func, wait = 20, immediate = true) {
            let timeout;
            return function () {
                const context = this,
                    args = arguments;
                const later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
    
        function checkSlide() {
            animatedElements.forEach((element) => {
                const slideInAt =
                    window.scrollY + window.innerHeight - element.clientHeight / 2;
                const elementBottom = element.offsetTop + element.clientHeight;
                const isHalfShown = slideInAt > element.offsetTop;
                const isNotScrolledPast = window.scrollY < elementBottom;
    
                if (isHalfShown && isNotScrolledPast) {
                    element.classList.add("show");
                } else {
                    element.classList.remove("show");
                }
            });
        }
    
        window.addEventListener("scroll", debounce(checkSlide));
        checkSlide();
    });
    
    
    
    // Loading Line Top JS
    document.addEventListener("DOMContentLoaded", function () {
        const loadingLine = document.getElementById("loading-line");
    
        setTimeout(() => {
            loadingLine.style.transform = "scaleX(1)";
            setTimeout(() => {
                loadingLine.style.opacity = 0;
                setTimeout(() => {
                    loadingLine.style.display = "none";
                }, 500);
            }, 1000);
        }, 2000);
    });
    
    
    
    // Navbar Connects to sections JS
    
    document.addEventListener('DOMContentLoaded', function () {
        const navLinks = document.querySelectorAll('.menu-section a');
      
        navLinks.forEach(function (link) {
          link.addEventListener('click', function (e) {
            e.preventDefault();
      
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
      
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          });
        });
      });
    
      
    
    
