const toggle = document.querySelector('.mobile-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

if (form && status) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    status.textContent = 'Sending...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.textContent = "Thanks, your message was sent. I'll get back to you soon!";
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please try emailing me directly instead.';
      }
    } catch (error) {
      status.textContent = 'Something went wrong. Please try emailing me directly instead.';
    }
  });
}