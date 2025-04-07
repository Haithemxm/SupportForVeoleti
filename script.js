document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation and progress tracking
    initNavigation();

    // Function to initialize navigation and progress tracking
    function initNavigation() {
        const sections = document.querySelectorAll('.section');
        const navDots = document.querySelectorAll('.nav-dot');
        const progressFill = document.querySelector('.progress-fill');

        // Set up intersection observer for sections
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Get the current section id
                    const currentSection = entry.target.id;

                    // Update active nav dot
                    navDots.forEach(dot => {
                        if (dot.dataset.section === currentSection) {
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    });

                    // Add a special class to the body for section-specific styling
                    document.body.className = 'viewing-' + currentSection;

                    // Add special entrance animations for sections as they come into view
                    addSectionEntranceEffects(currentSection);
                }
            });
        }, { threshold: 0.5 });

        // Observe all sections
        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // Add click event to nav dots
        navDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetSection = document.getElementById(dot.dataset.section);
                if (targetSection) {
                    // Add a subtle page transition effect
                    document.body.classList.add('page-transitioning');

                    // Remove the transition class after animation completes
                    setTimeout(() => {
                        document.body.classList.remove('page-transitioning');
                    }, 800);

                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Update progress bar on scroll
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = scrollTop / (docHeight - winHeight);
            progressFill.style.width = scrollPercent * 100 + '%';
        });

        // Add smooth scroll behavior to the whole document
        document.documentElement.style.scrollBehavior = 'smooth';

        // Add transition styles for page transitions
        const style = document.createElement('style');
        style.textContent = `
            .page-transitioning {
                animation: page-transition 0.8s ease;
            }

            @keyframes page-transition {
                0% { opacity: 1; }
                50% { opacity: 0.8; }
                100% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    // Function to add special entrance effects for each section
    function addSectionEntranceEffects(sectionId) {
        switch(sectionId) {
            case 'welcome':
                // Welcome section already has animations
                break;

            case 'message':
                // Add a subtle animation to the letter
                const letterContainer = document.querySelector('.letter-container');
                if (letterContainer) {
                    letterContainer.style.animation = 'none';
                    setTimeout(() => {
                        letterContainer.style.animation = 'container-entrance 1.5s ease-out forwards';
                    }, 100);
                }
                break;

            case 'photobook':
                // Add a subtle animation to the book
                const bookWrap = document.querySelector('.book-wrap');
                if (bookWrap) {
                    bookWrap.style.animation = 'none';
                    setTimeout(() => {
                        bookWrap.style.animation = 'book-entrance 1.5s ease-out forwards';
                    }, 100);
                }
                break;

            case 'promise':
                // Add a subtle animation to the promise content
                const promiseContent = document.querySelector('.promise-content');
                if (promiseContent) {
                    promiseContent.style.animation = 'none';
                    setTimeout(() => {
                        promiseContent.style.animation = 'message-entrance 1.2s ease-out forwards';
                    }, 100);
                }
                break;

            case 'final':
                // Add a subtle animation to the final message
                const finalMessage = document.querySelector('.final-message');
                if (finalMessage) {
                    finalMessage.style.animation = 'none';
                    setTimeout(() => {
                        finalMessage.style.animation = 'message-entrance 1.2s ease-out forwards';
                    }, 100);
                }
                break;

            case 'final-arabic':
                // Add a subtle animation to the Arabic message container
                const arabicContainer = document.querySelector('.arabic-message-container');
                if (arabicContainer) {
                    arabicContainer.style.animation = 'none';
                    setTimeout(() => {
                        arabicContainer.style.animation = 'container-entrance 1.5s ease-out forwards';
                    }, 100);
                }
                break;
        }
    }

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

    // Add letter paragraphs with enhanced animation effects
    const letterContainer = document.querySelector('.letter-paragraphs');

    // Create a wrapper for the letter content to add a scroll observer
    const letterWrapper = document.querySelector('.letter-wrapper');

    // Add a subtle shimmer effect to the letter container on load
    const letterElement = document.querySelector('.letter-container');
    setTimeout(() => {
        letterElement.style.boxShadow = '0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.02), 0 0 20px rgba(255, 204, 217, 0.3)';
        setTimeout(() => {
            letterElement.style.boxShadow = '0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.02)';
        }, 1000);
    }, 500);

    // Add letter paragraphs with staggered fade-in and enhanced effects
    letterContent.forEach((paragraph, index) => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        p.style.opacity = '0';
        p.style.transform = 'translateY(30px)';
        p.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        p.dataset.index = index;
        letterContainer.appendChild(p);

        // Add a subtle highlight effect when paragraphs appear
        setTimeout(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';

            // Add a subtle highlight effect
            if (index === 0) {
                setTimeout(() => {
                    p.style.textShadow = '0 0 10px rgba(255, 154, 158, 0.5)';
                    setTimeout(() => {
                        p.style.textShadow = '0 1px 1px rgba(255, 255, 255, 0.8)';
                    }, 1000);
                }, 800);
            }
        }, 500 + (index * 700));
    });

    // Add interactive effect for the wax seal
    const waxSeal = document.querySelector('.wax-seal');
    if (waxSeal) {
        waxSeal.addEventListener('click', function() {
            // Create a ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('seal-ripple');
            this.appendChild(ripple);

            // Add CSS for the ripple
            ripple.style.position = 'absolute';
            ripple.style.width = '100%';
            ripple.style.height = '100%';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.8s linear';

            // Add keyframes for the ripple animation if not already in the stylesheet
            if (!document.querySelector('#ripple-animation')) {
                const style = document.createElement('style');
                style.id = 'ripple-animation';
                style.textContent = `
                    @keyframes ripple {
                        to { transform: scale(2); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }

            // Show a sweet message
            const allParagraphs = document.querySelectorAll('.letter-paragraphs p');
            allParagraphs.forEach(p => {
                p.style.transition = 'all 0.5s ease';
                p.style.opacity = '0.3';
            });

            // Create a special message
            const specialMessage = document.createElement('p');
            specialMessage.textContent = '❤️ I love you more than words can say ❤️';
            specialMessage.style.position = 'absolute';
            specialMessage.style.top = '50%';
            specialMessage.style.left = '0';
            specialMessage.style.right = '0';
            specialMessage.style.textAlign = 'center';
            specialMessage.style.transform = 'translateY(-50%) scale(0.8)';
            specialMessage.style.opacity = '0';
            specialMessage.style.transition = 'all 0.5s ease';
            specialMessage.style.color = '#ff7a85';
            specialMessage.style.fontSize = '1.8rem';
            specialMessage.style.fontWeight = 'bold';
            specialMessage.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            specialMessage.style.zIndex = '10';
            letterContainer.appendChild(specialMessage);

            setTimeout(() => {
                specialMessage.style.opacity = '1';
                specialMessage.style.transform = 'translateY(-50%) scale(1)';
            }, 100);

            // Reset after animation
            setTimeout(() => {
                ripple.remove();
                allParagraphs.forEach(p => {
                    p.style.opacity = '1';
                });
                specialMessage.style.opacity = '0';
                specialMessage.style.transform = 'translateY(-50%) scale(1.2)';

                setTimeout(() => {
                    specialMessage.remove();
                }, 500);
            }, 3000);
        });
    }

    // Enhanced Book functionality
    let currentPage = 0;
    const pages = document.querySelectorAll('.page');
    const frontCover = document.querySelector('.front-cover');
    const backCover = document.querySelector('.back-cover');
    const totalPages = pages.length;
    let isAnimating = false;

    // Page counter elements
    const currentPageEl = document.querySelector('.current-page');
    const totalPagesEl = document.querySelector('.total-pages');

    // Set total pages count
    if (totalPagesEl) {
        totalPagesEl.textContent = (totalPages * 2) + 1; // Including covers
    }

    // Add subtle hover effect to photos
    document.querySelectorAll('.photo-image').forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });

        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    function initializePages() {
        // Set initial states with enhanced z-index management
        pages.forEach((page, index) => {
            page.style.zIndex = totalPages - index;
            page.dataset.page = index;
            page.style.transform = 'rotateY(0deg)';

            // Add click event to turn page when clicking on the right side
            page.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;

                // If click is on the right half of the page, go to next page
                if (x > rect.width / 2 && currentPage <= index + 1) {
                    turnPage('next');
                }
                // If click is on the left half of the page, go to previous page
                else if (x <= rect.width / 2 && currentPage > index + 1) {
                    turnPage('prev');
                }
            });
        });

        // Add click events to covers
        frontCover.addEventListener('click', function() {
            if (currentPage === 0) {
                turnPage('next');
            }
        });

        backCover.addEventListener('click', function() {
            if (currentPage === totalPages) {
                turnPage('prev');
            }
        });

        frontCover.style.zIndex = totalPages + 1;
        backCover.style.zIndex = 0;

        // Update page counter
        updatePageCounter();
    }

    function updatePageCounter() {
        if (currentPageEl) {
            // Calculate the current visible page number
            let displayPage;
            if (currentPage === 0) {
                displayPage = 1; // Front cover
            } else if (currentPage === totalPages) {
                displayPage = (totalPages * 2) + 1; // Back cover
            } else {
                displayPage = currentPage * 2; // Regular pages (2 per spread)
            }

            currentPageEl.textContent = displayPage;

            // Add a subtle animation to the counter
            currentPageEl.style.transform = 'scale(1.2)';
            setTimeout(() => {
                currentPageEl.style.transform = 'scale(1)';
            }, 300);
        }
    }

    function updatePageVisibility() {
        // Update pages with enhanced visual effects
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

        // Update cover states with enhanced effects
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

        // Update page counter
        updatePageCounter();
    }

    function turnPage(direction) {
        if (isAnimating) return;

        const nextPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
        if (nextPage < 0 || nextPage > totalPages) return;

        isAnimating = true;

        // Add a subtle book tilt effect during page turn
        const book = document.getElementById('book');
        if (book) {
            if (direction === 'next') {
                book.style.transform = 'rotateY(-3deg)';
            } else {
                book.style.transform = 'rotateY(3deg)';
            }

            setTimeout(() => {
                book.style.transform = 'rotateY(0)';
            }, 600);
        }

        const pageToTurn = direction === 'next' ?
            document.querySelector(`[data-page="${currentPage}"]`) :
            document.querySelector(`[data-page="${currentPage - 1}"]`);

        if (pageToTurn) {
            // Add enhanced turning animation
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

                // Highlight the current page's photo with a subtle glow
                highlightCurrentPhoto();
            }, 800);
        } else {
            isAnimating = false;
        }
    }

    function highlightCurrentPhoto() {
        // This function is kept for compatibility but no longer adds highlights
        // since we've reverted to the original photo styling
    }

    // Enhanced Navigation controls
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

    // Add touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const bookElement = document.getElementById('book');
    if (bookElement) {
        bookElement.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        bookElement.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }

    function handleSwipe() {
        if (touchEndX < touchStartX && currentPage < totalPages && !isAnimating) {
            // Swipe left - next page
            turnPage('next');
        } else if (touchEndX > touchStartX && currentPage > 0 && !isAnimating) {
            // Swipe right - previous page
            turnPage('prev');
        }
    }

    // Initialize book with enhanced effects
    initializePages();
    updatePageVisibility();

    // Add a subtle entrance animation for the book
    setTimeout(() => {
        highlightCurrentPhoto();
    }, 1500);

    // Arabic Message Section Enhancements
    const arabicSeal = document.querySelector('.arabic-seal');
    if (arabicSeal) {
        arabicSeal.addEventListener('click', function() {
            // Create a pulsing effect
            this.style.transform = 'scale(1.2) rotate(15deg)';

            // Create sparkle animation
            const sparkles = document.querySelectorAll('.sparkle');
            sparkles.forEach(sparkle => {
                sparkle.style.animation = 'none';
                setTimeout(() => {
                    sparkle.style.animation = 'sparkle 4s ease-in-out infinite';
                }, 10);
            });

            // Create a special effect for the paragraphs
            const paragraphs = document.querySelectorAll('.arabic-paragraph');
            paragraphs.forEach(p => {
                p.style.transition = 'all 0.5s ease';
                p.style.color = '#ff9a9e';
                p.style.textShadow = '0 0 5px rgba(255, 154, 158, 0.3)';
            });

            // Reset after animation
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
                paragraphs.forEach(p => {
                    p.style.color = '#4a4a4a';
                    p.style.textShadow = 'none';
                });
            }, 2000);
        });
    }

    // Add parallax effect to the moon - optimized for both desktop and mobile
    const arabicMoon = document.querySelector('.arabic-moon');
    const arabicSection = document.getElementById('final-arabic');

    // Check if device is mobile - defined once for all mobile optimizations
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (arabicMoon && arabicSection) {

        if (!isMobile) {
            // Desktop parallax with mouse movement
            arabicSection.addEventListener('mousemove', function(e) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                arabicMoon.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
            });
        } else {
            // Mobile parallax with device orientation
            window.addEventListener('deviceorientation', function(e) {
                if (e.beta && e.gamma) {
                    const xAxis = e.gamma / 5; // Left/right tilt
                    const yAxis = e.beta / 5; // Front/back tilt
                    arabicMoon.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
                }
            });

            // Fallback subtle animation for mobile if orientation not available
            let moonAnimationStarted = false;

            function startMoonAnimation() {
                if (!moonAnimationStarted) {
                    moonAnimationStarted = true;
                    // Add a subtle floating animation for mobile
                    arabicMoon.style.animation = 'float-moon 6s ease-in-out infinite';

                    // Add the keyframes if they don't exist
                    if (!document.querySelector('#moon-animation')) {
                        const style = document.createElement('style');
                        style.id = 'moon-animation';
                        style.textContent = `
                            @keyframes float-moon {
                                0%, 100% { transform: translate(0, 0); }
                                25% { transform: translate(5px, -5px); }
                                50% { transform: translate(0, 0); }
                                75% { transform: translate(-5px, 5px); }
                            }
                        `;
                        document.head.appendChild(style);
                    }
                }
            }

            // Start the animation when the section is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startMoonAnimation();
                    }
                });
            });

            observer.observe(arabicSection);
        }
    }

    // Add hover and touch effects to the floating hearts in Arabic section
    const arabicHearts = document.querySelectorAll('#final-arabic .floating-heart');

    arabicHearts.forEach(heart => {
        // Desktop hover effects
        heart.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(15deg)';
            this.style.opacity = '1';
        });

        heart.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.opacity = '0.8';
        });

        // Mobile touch effects
        if (isMobile) {
            heart.addEventListener('touchstart', function(e) {
                e.preventDefault(); // Prevent default touch behavior
                this.style.transform = 'scale(1.3) rotate(15deg)';
                this.style.opacity = '1';

                // Reset after a short delay
                setTimeout(() => {
                    this.style.transform = 'scale(1) rotate(0deg)';
                    this.style.opacity = '0.8';
                }, 1000);
            });
        }
    });

    // Optimize the Arabic message section for mobile scrolling
    if (isMobile) {
        // Add a special welcome animation when the Arabic section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Create a large heart that pulses and fades away
                    const welcomeHeart = document.createElement('div');
                    welcomeHeart.className = 'welcome-heart';
                    welcomeHeart.innerHTML = '❤️';
                    welcomeHeart.style.position = 'absolute';
                    welcomeHeart.style.top = '50%';
                    welcomeHeart.style.left = '50%';
                    welcomeHeart.style.transform = 'translate(-50%, -50%) scale(0)';
                    welcomeHeart.style.fontSize = '8rem';
                    welcomeHeart.style.opacity = '0';
                    welcomeHeart.style.zIndex = '10';
                    welcomeHeart.style.pointerEvents = 'none';
                    welcomeHeart.style.transition = 'all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

                    arabicSection.appendChild(welcomeHeart);

                    // Animate the heart
                    setTimeout(() => {
                        welcomeHeart.style.opacity = '1';
                        welcomeHeart.style.transform = 'translate(-50%, -50%) scale(1)';

                        setTimeout(() => {
                            welcomeHeart.style.opacity = '0';
                            welcomeHeart.style.transform = 'translate(-50%, -50%) scale(2)';

                            // Remove the heart after animation
                            setTimeout(() => {
                                welcomeHeart.remove();
                            }, 1500);
                        }, 1500);
                    }, 500);

                    // Only trigger once
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(arabicSection);
        // Make sure the section is fully visible on mobile
        const arabicMessageContainer = document.querySelector('.arabic-message-container');
        if (arabicMessageContainer) {
            // Add smooth scrolling when the section comes into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Ensure the container is properly positioned on screen
                        setTimeout(() => {
                            arabicMessageContainer.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                        }, 500);
                    }
                });
            }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

            observer.observe(arabicSection);
        }

        // Add touch effect to the seal for mobile
        const arabicSeal = document.querySelector('.arabic-seal');
        if (arabicSeal) {
            arabicSeal.addEventListener('touchstart', function(e) {
                e.preventDefault(); // Prevent default touch behavior

                // Create a more pronounced effect for mobile
                this.style.transform = 'scale(1.3) rotate(20deg)';

                // Create sparkle animation
                const sparkles = document.querySelectorAll('.sparkle');
                sparkles.forEach(sparkle => {
                    sparkle.style.animation = 'none';
                    setTimeout(() => {
                        sparkle.style.animation = 'sparkle 4s ease-in-out infinite';
                    }, 10);
                });

                // Create a special effect for the paragraphs
                const paragraphs = document.querySelectorAll('.arabic-paragraph');
                paragraphs.forEach(p => {
                    p.style.transition = 'all 0.5s ease';
                    p.style.color = '#ff9a9e';
                    p.style.textShadow = '0 0 5px rgba(255, 154, 158, 0.3)';
                });

                // Reset after animation
                setTimeout(() => {
                    this.style.transform = 'scale(1) rotate(0deg)';
                    paragraphs.forEach(p => {
                        p.style.color = '#4a4a4a';
                        p.style.textShadow = 'none';
                    });
                }, 2000);
            });
        }
    }

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
