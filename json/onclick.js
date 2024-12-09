let navigation = document.querySelector('.navigation');
let insta = document.getElementById('instagramID');
let twi = document.getElementById('twitterID');
let git = document.getElementById('githubID');
let menu = document.querySelector('#menu-icon');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navigation.classList.toggle('open');
};

insta.onclick = (function() {
    window.open(
        'https://www.instagram.com/smartyard_ltda/',
        '_blank'
    );
});

twi.onclick = (function() {
    window.open(
        'https://twitter.com/EtecYard',
        '_blank'
    );
});

git.onclick = (function() {
    window.open(
        'https://github.com/C4ptainJohn24/SmartYard/',
        '_blank'
    );
});