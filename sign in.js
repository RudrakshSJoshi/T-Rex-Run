const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');
const BtnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

RegisterLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

BtnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

LoginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});