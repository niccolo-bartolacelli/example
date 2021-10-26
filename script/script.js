function goUp() {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth',
        }
    );
}

function goToSection(num) {
    let section = document.getElementById('section' + num);
    section.scrollIntoView(
        {
            behavior: 'smooth',
            block: 'center',
        }
    );
}

function fadeOut(el, tm) {
    el.style.transition += 'transform 0.25s';

    el.style.transform = 'scale(0,0)';

    el.style.transition = el.style.opacity.replace('transform 0.25s', '');
}

function fadeIn(el, tm) {
    el.style.transition += 'transform 0.25s';

    el.style.transform = 'scale(1,1)';

    el.style.transition = el.style.opacity.replace('transform 0.25s', '');
}

document.addEventListener(
    'DOMContentLoaded',
    function () {
        document.getElementById('up-btn').style['width'] = '0';
        document.getElementById('up-btn').style['height'] = '0';
    }
);

document.addEventListener(
    'scroll',
    function () {
        // Show button
        if (window.scrollY < 700) {
            document.getElementById('up-btn').style['width'] = '0';
            document.getElementById('up-btn').style['height'] = '0';
        } else {
            document.getElementById('up-btn').style['width'] = '50px';
            document.getElementById('up-btn').style['height'] = '50px';
        }

        // Resize background
        if (window.scrollY > 700) {
            document.getElementsByClassName('parallax')[1].style['background-size'] = ((100 + (window.scrollY - 700) / 100)).toString() + '% ' + (100 + (window.scrollY - 700) / 100).toString() + '%';
        }

    }
);