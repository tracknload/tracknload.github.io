// Add your custom JS here.


// Sticky Nav Enhancement
document.addEventListener('DOMContentLoaded', function() {
    
    const nav = document.getElementById('main-nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 100) {
            nav.classList.add('navbar-scrolled');
            
            // Show/hide navbar based on scroll direction
            if (currentScroll < lastScroll) {
                nav.classList.add('show');
            } else {
                nav.classList.remove('show');
            }
        } else {
            nav.classList.remove('navbar-scrolled');
            nav.classList.remove('show');
        }
        
        lastScroll = currentScroll;
    });

    // Function to setup button triggers
    function setupButtonTriggers() {
        const secondaryButtons = document.querySelectorAll('.btn-trigger, .cta-button');
        const consultationButton = document.querySelector('[data-tf-slider]');
        
        
        if (consultationButton) {
            secondaryButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Trigger the consultation button click
                    consultationButton.click();
                });
            });
            return true; // Successfully found and setup
        }
        return false; // Button not found yet
    }

    // Try to setup immediately
    if (!setupButtonTriggers()) {
        // If not found, retry with increasing delays
        let attempts = 0;
        const maxAttempts = 10;
        
        const retrySetup = () => {
            attempts++;
            
            if (setupButtonTriggers()) {
                return;
            }
            
            if (attempts < maxAttempts) {
                // Retry with increasing delay (500ms, 1000ms, 1500ms, etc.)
                setTimeout(retrySetup, attempts * 500);
            } else {
                console.log('Failed to find Typeform button after maximum attempts');
            }
        };
        
        // Start retrying after a short delay
        setTimeout(retrySetup, 500);
    }
});