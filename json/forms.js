const forms = document.querySelector('.forms');
const log = document.querySelector('.regLink');
const reg = document.querySelector('.loginLink');
const abrir = document.querySelector('.login');
const fechar = document.querySelector('.fechar');

abrir.addEventListener('click', ()=> {
    forms.classList.add('active-fechar');
});

fechar.addEventListener('click', ()=> {
    forms.classList.remove('active-fechar');
});

reg.addEventListener('click', ()=> {
    forms.classList.remove('active');
});

log.addEventListener('click', ()=> {
    forms.classList.add('active');
});