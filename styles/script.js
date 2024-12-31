document.addEventListener('DOMContentLoaded', function () {

    // ميزة البحث الفوري
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener('input', function () {
        const searchTerm = searchBox.value.toLowerCase();
        const lessons = document.querySelectorAll('.unit-card, .sidebar ul li a');
        lessons.forEach(lesson => {
            const text = lesson.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                lesson.style.display = 'block';
            } else {
                lesson.style.display = 'none';
            }
        });
    });

    // التنقل السلس بين الأقسام
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = targetId;
            }
        });
    });

    // تسليط الضوء على الوحدة أو القسم النشط
    const currentPath = window.location.pathname;
    navbarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });

    // زر العودة إلى الأعلى
    const toTopButton = document.createElement('button');
    toTopButton.innerText = '⬆️ أعلى';
    toTopButton.classList.add('to-top-button');
    document.body.appendChild(toTopButton);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });

    toTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
script