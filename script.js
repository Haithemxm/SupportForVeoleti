document.addEventListener('DOMContentLoaded', function() {
    // Message content
    const letterContent = [
        "These last two days… they were heavy. The world felt a little quieter, a little colder, while you were in the hospital. And I realized something deep — that no matter what's happening, all I want is for your heart to beat strong, for your eyes to shine again, and for your smile to light up my days like it always does.",
        "I know you were scared. I was too. But through every moment of worry, all I could think was: \"She's strong. She'll get through this. Because she always does.\"",
        "You don't even know how proud I am of you. How proud I am of the way you keep going, even when life hits hard.",
        "And even though I couldn't be right next to you every second, I hope you felt my heart beside yours. I hope you knew that someone out there was whispering: \"Hold on, love… I'm right here.\"",
        "This little website… it's my way of wrapping you in warmth, in love, in peace. It's not a hospital. It's not wires and monitors. It's us.",
        "It's the softness between heartbeats. The comfort of being loved. The promise that even when things are scary — you'll never face them alone.",
        "Take your time to heal. To breathe. To smile again.",
        "I'm with you. Always."
    ];

    const quotes = [
        "You are my calm after every storm.",
        "Love heals, and I love you.",
        "Your heart is safe with me."
    ];

    // Initialize particles
    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                out_mode: "out"
            }
        }
    });

    // Add letter paragraphs with fade-in effect
    const letterContainer = document.querySelector('.letter-paragraphs');
    letterContent.forEach((paragraph, index) => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
        p.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        letterContainer.appendChild(p);
        
        setTimeout(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
        }, index * 500);
    });

    // Book functionality
    let currentPage = 0;
    const pages = document.querySelectorAll('.page');
    const frontCover = document.querySelector('.front-cover');
    const backCover = document.querySelector('.back-cover');
    const totalPages = pages.length;
    let isAnimating = false;

    function initializePages() {
        // Set initial states
        pages.forEach((page, index) => {
            page.style.zIndex = totalPages - index;
            page.dataset.page = index;
            page.style.transform = 'rotateY(0deg)';
        });
        
        frontCover.style.zIndex = totalPages + 1;
        backCover.style.zIndex = 0;
    }

    function updatePageVisibility() {
        // Update pages
        pages.forEach((page, index) => {
            const pageNum = parseInt(page.dataset.page);
            
            if (pageNum < currentPage) {
                page.style.transform = 'rotateY(-180deg)';
                page.style.zIndex = pageNum;
            } else {
                page.style.transform = 'rotateY(0deg)';
                page.style.zIndex = totalPages - pageNum;
            }
        });

        // Update cover states
        if (currentPage === 0) {
            frontCover.style.transform = 'rotateY(0deg)';
            frontCover.style.zIndex = totalPages + 1;
        } else {
            frontCover.style.transform = 'rotateY(-180deg)';
            frontCover.style.zIndex = -1;
        }

        if (currentPage === totalPages) {
            backCover.style.zIndex = totalPages + 1;
        } else {
            backCover.style.zIndex = 0;
        }
    }

    function turnPage(direction) {
        if (isAnimating) return;
        
        const nextPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
        if (nextPage < 0 || nextPage > totalPages) return;
        
        isAnimating = true;
        const pageToTurn = direction === 'next' ? 
            document.querySelector(`[data-page="${currentPage}"]`) : 
            document.querySelector(`[data-page="${currentPage - 1}"]`);

        if (pageToTurn) {
            pageToTurn.classList.add('turning');
            
            // Update current page immediately to prevent double flips
            if (direction === 'next') {
                pageToTurn.style.transform = 'rotateY(-180deg)';
                currentPage = nextPage;
            } else {
                pageToTurn.style.transform = 'rotateY(0deg)';
                currentPage = nextPage;
            }

            // Update visibility after animation
            setTimeout(() => {
                pageToTurn.classList.remove('turning');
                updatePageVisibility();
                isAnimating = false;
            }, 600);
        } else {
            isAnimating = false;
        }
    }

    // Navigation controls
    document.querySelector('.prev-button').addEventListener('click', () => {
        if (currentPage > 0 && !isAnimating) {
            turnPage('prev');
        }
    });

    document.querySelector('.next-button').addEventListener('click', () => {
        if (currentPage < totalPages && !isAnimating) {
            turnPage('next');
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentPage > 0 && !isAnimating) {
            turnPage('prev');
        } else if (e.key === 'ArrowRight' && currentPage < totalPages && !isAnimating) {
            turnPage('next');
        }
    });

    // Initialize book
    initializePages();
    updatePageVisibility();

    // Hug button functionality
    const hugButton = document.getElementById('hugButton');
    const hugGif = document.querySelector('.hug-gif');
    const messages = document.querySelectorAll('.message');
    let isHugAnimating = false;

    hugButton.addEventListener('click', () => {
        if (isHugAnimating) return;
        isHugAnimating = true;

        // Show GIF and messages simultaneously
        hugGif.classList.remove('hidden');
        messages.forEach(message => message.classList.remove('hidden'));

        // Add a small delay before starting animations for better visual effect
        setTimeout(() => {
            hugGif.classList.add('show');
            messages.forEach(message => message.classList.add('show'));
        }, 50);

        // Reset animation state
        setTimeout(() => {
            isHugAnimating = false;
        }, 1000);
    });

    // Music functionality
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isMusicPlaying = true; // Set to true since music starts playing

    // Start playing music automatically
    window.addEventListener('load', () => {
        bgMusic.play().catch(error => {
            console.log("Auto-play prevented by browser");
            // If browser blocks autoplay, try on first interaction
            document.addEventListener('click', () => {
                bgMusic.play();
                isMusicPlaying = true;
                musicToggle.textContent = '🔇';
            }, { once: true });
        });
        musicToggle.textContent = '🔇';
    });

    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🎵';
        } else {
            bgMusic.play();
            musicToggle.textContent = '🔇';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
        entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }),
        { threshold: 0.1 }
    );

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});
