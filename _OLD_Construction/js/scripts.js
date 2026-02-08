/*!
* Semaka Construction - Custom JS
*/

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Form Validation for Request Quote
    const quoteForm = document.getElementById('contactForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simple validation logic
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const service = document.getElementById('service');
            const message = document.getElementById('message');

            // Reset previous validation states
            [name, email, service, message].forEach(el => {
                el.classList.remove('is-invalid');
            });

            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                isValid = false;
            }

            if (!email.value.trim() || !email.value.includes('@')) {
                email.classList.add('is-invalid');
                isValid = false;
            }
            
             if (!service.value.trim()) {
                service.classList.add('is-invalid');
                isValid = false;
            }

            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                isValid = false;
            }

            if (isValid) {
                // Mock success
                document.getElementById('submitSuccessMessage').classList.remove('d-none');
                document.getElementById('submitButton').classList.add('disabled');
                quoteForm.reset();
            } else {
                document.getElementById('submitErrorMessage').classList.remove('d-none');
                setTimeout(() => {
                     document.getElementById('submitErrorMessage').classList.add('d-none');
                }, 3000);
            }
        });
    }

});
