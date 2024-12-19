const card = document.querySelector('.card');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');

const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  card.classList.add('flipped');
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  card.classList.remove('flipped');
});
