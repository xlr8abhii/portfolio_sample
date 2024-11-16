window.onload = function() {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Animate navigation
    gsap.from('nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Home page animations
    const homeTitle = document.querySelector('#home h1');
    const homeTitleChars = homeTitle.textContent.split('');
    homeTitle.innerHTML = homeTitleChars.map(char => `<span>${char}</span>`).join('');

    gsap.from('#home h1 span', {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        duration: 1,
        ease: 'back.out(1.7)'
    });

    gsap.from('#home p', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        ease: 'power3.out'
    });

    // Animate sections on scroll
    gsap.utils.toArray('section:not(#home)').forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
                fastScrollEnd: true
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: targetId, offsetY: 70 },
                ease: 'power2.inOut'
            });
        });
    });

    // Adjust scroll offset for mobile devices
    if (window.innerWidth <= 768) {
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: targetId, offsetY: 50 }, // Adjust offset for mobile
                    ease: 'power2.inOut'
                });
            });
        });
    }
};
