
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Sticky navbar
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('sticky', window.scrollY > 0);
        });
