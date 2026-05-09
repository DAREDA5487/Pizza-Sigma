     // Loading
        window.addEventListener('load', () => {
            setTimeout(() => document.getElementById('loading').classList.add('gone'), 800);
        });

        // Header scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('solid', window.scrollY > 60);
            const p = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
            document.getElementById('progress').style.width = p + '%';
        });

        // Hamburger
        document.getElementById('hamburger').addEventListener('click', () => {
            document.getElementById('nav').classList.toggle('open');
        });

        // Reveal on scroll
        const revealEls = document.querySelectorAll('.reveal');
        const revObs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('shown'); });
        }, { threshold: 0.12 });
        revealEls.forEach(el => revObs.observe(el));

        // Order button
        function orderItem(name, price) {
            alert(`Pesanan "${name}" (${price}) ditambahkan!\nHubungi kami via valen untuk konfirmasi.`);
        }

        // Form
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.name.value;
            if (!name) { alert('Isi NAMA WOII!'); return; }
            alert(`Terima kasih ${name}! Pesanan kamu sudah diterima.\nKami akan segera menghubungi kamu. Sigma! 🤫`);
            this.reset();
        });