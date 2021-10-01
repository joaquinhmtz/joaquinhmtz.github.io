let hamburguerIcon = document.getElementById('hamburguer');
let menu = document.getElementById('nav-menu');

const open = () => {
    console.log('abrir')
    if (hamburguerIcon.classList.contains('active')) {
        hamburguerIcon.classList.remove('active');
        hamburguerIcon.children[0].style.transform = 'rotate(0)';
        hamburguerIcon.children[1].style.transform = 'translateX(0)';
        hamburguerIcon.children[1].style.opacity = '1';
        hamburguerIcon.children[2].style.transform = 'rotate(0)';
        menu.style.display = 'none';
        menu.style.transform = 'translateX(100%)';
    } else {
        hamburguerIcon.classList.add('active');
        hamburguerIcon.children[0].style.transform = 'rotate(45deg)';
        hamburguerIcon.children[1].style.transform = 'translateX(100%)';
        hamburguerIcon.children[1].style.opacity = '0';
        hamburguerIcon.children[2].style.transform = 'rotate(-45deg)';
        menu.style.display = 'block';
        menu.style.transform = 'translateX(0)';
    }
}

document.getElementById('hamburguer').addEventListener('click', function(e) {
    e.preventDefault();
    open();
});
