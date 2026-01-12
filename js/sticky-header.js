// Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    
    // Open mobile navigation
    if (navbarToggler && mobileNavOverlay) {
        navbarToggler.addEventListener('click', function(e) {
            e.preventDefault();
            mobileNavOverlay.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    // Close mobile navigation
    if (mobileNavClose && mobileNavOverlay) {
        mobileNavClose.addEventListener('click', function() {
            mobileNavOverlay.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close mobile navigation when clicking outside menu items
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', function(e) {
            if (e.target === mobileNavOverlay) {
                mobileNavOverlay.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close mobile navigation on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNavOverlay && mobileNavOverlay.classList.contains('show')) {
            mobileNavOverlay.classList.remove('show');
            document.body.style.overflow = '';
                    }
    });
});

// Existing sticky header functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('main-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('navbar-scrolled');
            } else {
            navbar.classList.remove('navbar-scrolled');
            }
            
        lastScrollTop = scrollTop;
        });
}); 