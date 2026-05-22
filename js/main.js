// Tea°ut 티읕 - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    setupMobileNav();
    setupHeader();
    setupSmoothScroll();
    setupReveal();
});

/* =========================================
   Mobile Nav (Hamburger + Drawer)
   - Injected so it works across all pages
   ========================================= */
function setupMobileNav() {
    const header = document.querySelector('.main-header .header-inner');
    if (!header) return;

    // Hamburger button
    const toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.setAttribute('aria-label', '메뉴 열기');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    header.appendChild(toggle);

    // Drawer
    const drawer = document.createElement('div');
    drawer.className = 'mobile-drawer';
    drawer.id = 'mobileDrawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
        <div class="drawer-backdrop" data-close></div>
        <aside class="drawer-panel">
            <div class="drawer-head">
                <a href="index.html" class="drawer-logo">
                    <img src="assets/티읕.jpg" alt="Tea°ut">
                </a>
                <button class="drawer-close" data-close aria-label="닫기">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
            <nav class="drawer-nav">
                <ul>
                    <li><a href="menu.html">메뉴</a></li>
                    <li><a href="premium.html">프리미엄 다도</a></li>
                    <li><a href="teasert.html">티저트</a></li>
                    <li><a href="story.html">티읕 스토리</a></li>
                    <li><a href="index.html#store">매장찾기</a></li>
                    <li><a href="index.html#news">새소식</a></li>
                </ul>
            </nav>
            <div class="drawer-utility">
                <a href="#">로그인</a>
                <a href="#">회원가입</a>
                <a href="#">마이페이지</a>
                <a href="#">기프트</a>
                <a href="#">고객센터</a>
            </div>
            <div class="drawer-footer">
                <p>© 2026 Tea°ut</p>
            </div>
        </aside>
    `;
    document.body.appendChild(drawer);

    function open() {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        toggle.classList.add('is-active');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', '메뉴 닫기');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '메뉴 열기');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
        if (drawer.classList.contains('is-open')) close();
        else open();
    });

    drawer.querySelectorAll('[data-close]').forEach(el => {
        el.addEventListener('click', close);
    });

    drawer.querySelectorAll('.drawer-nav a, .drawer-utility a').forEach(a => {
        a.addEventListener('click', close);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });

    // If user resizes from mobile to desktop while drawer is open, close it
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 1024 && drawer.classList.contains('is-open')) {
                close();
            }
        }, 100);
    });
}

/* =========================================
   Header scroll effect
   ========================================= */
function setupHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.pageYOffset > 60) {
                    header.classList.add('is-scrolled');
                } else {
                    header.classList.remove('is-scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* =========================================
   Smooth scroll for anchor links
   ========================================= */
function setupSmoothScroll() {
    const header = document.querySelector('.main-header');
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            if (target === '#') return;

            const targetEl = document.querySelector(target);
            if (targetEl) {
                e.preventDefault();
                const headerHeight = header?.offsetHeight || 80;
                const catNav = document.querySelector('.cat-nav');
                const catNavHeight = (catNav && getComputedStyle(catNav).position === 'sticky') ? catNav.offsetHeight : 0;
                const offset = headerHeight + catNavHeight + 20;
                const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

/* =========================================
   Reveal animation on scroll
   ========================================= */
function setupReveal() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const selectors = [
        '.menu-card', '.store-card', '.news-card',
        '.section-header', '.story-text', '.story-image',
        '.item-card', '.premium-group', '.teasert-card',
        '.health-card', '.myth-item', '.event-step',
        '.cta-card', '.feature-card', '.dagi-card'
    ];

    document.querySelectorAll(selectors.join(',')).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(el);
    });
}
