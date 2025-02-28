var mt1 = 200; // 调整初始位置
        var ml1 = 0;
        var mt2 = 100; // mountains_behind 初始位置
        var ml2 = 800;
        var mt3 = 160; // moon 初始位置
        var ml3 = 650;

        let stars = document.getElementById('stars');
        let mountains_behind = document.getElementById('mountains_behind');
        let moon = document.getElementById('moon');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let mountains_left = document.getElementById('mountains_left');
        mountains_left.style.top = mt1 + 'px';
        mountains_left.style.left = ml1 + 'px';
        mountains_behind.style.top = mt2 + 'px';
        mountains_behind.style.left = ml2 + 'px';
        moon.style.top = mt3 + 'px';
        moon.style.left = ml3 + 'px';
        let header = document.querySelector('header');

        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            stars.style.left = value * 1.55 + 'px';
            mountains_left.style.top = mt1 + value * 0.3 + 'px'; 
            mountains_left.style.left = ml1 + value * -0.6 + 'px';
            mountains_behind.style.top = mt2 + value * 0.4 + 'px'; 
            mountains_behind.style.left = ml2 + value * -0.2 + 'px';
            moon.style.top = mt3 + value * 0.9 + 'px'; 
            moon.style.left = ml3 + value * 0.6 + 'px';
            text.style.marginRight = value * 4 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
        });
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(btn.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });

        
        document.addEventListener('mousemove', function(event) {
            let x = event.clientX / window.innerWidth - 0.5;
            let y = event.clientY / window.innerHeight - 0.5;
            moon.style.transform = `rotate(${x * 90}deg) rotateY(${y * 90}deg)`;
        });