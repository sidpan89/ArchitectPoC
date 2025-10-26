document.addEventListener('DOMContentLoaded', () => {

    // This hook runs once, after the first page is ready, for the initial load animation.
    barba.hooks.once(({ next }) => {
        // Set initial state for the reveal animation
        gsap.set(next.container.querySelectorAll('.animate-target'), { y: '110%' });

        // Animate content into view
        gsap.to(next.container.querySelectorAll('.animate-target'), {
            y: '0%',
            stagger: 0.05,
            ease: 'expo.out',
            duration: 1.2,
            delay: 0.5 // A brief delay for effect on initial load
        });
    });

    // Initialize Barba.js
    barba.init({
        sync: true, // Ensures leave animation completes before enter starts
        transitions: [{
            name: 'mask-reveal-transition',

            async leave({ current }) {
                // Animate the content of the current page down and out of view
                await gsap.to(current.container.querySelectorAll('.animate-target'), {
                    y: '110%',
                    stagger: 0.05,
                    ease: 'expo.in',
                    duration: 0.8
                });
            },

            enter({ next }) {
                // Set the initial state of the next page's content (below the viewport)
                gsap.set(next.container.querySelectorAll('.animate-target'), { y: '110%' });

                // Animate the new content up into view
                gsap.to(next.container.querySelectorAll('.animate-target'), {
                    y: '0%',
                    stagger: 0.05,
                    ease: 'expo.out',
                    duration: 1.2
                });
            }
        }],
        views: [{
            namespace: 'home',
            beforeEnter({ next }) {
                // Placeholder for the Three.js hero animation initialization
            }
        }]
    });

});
