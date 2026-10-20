// Contact form validation (used only on contact.html).
// We turn off the browser's built-in bubbles (novalidate) and show our own messages,
// which screen readers announce because each message is linked with aria-describedby.
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  // Each rule returns an error message, or '' when the value is fine.
  const rules = {
    name:    v => v.trim().length < 2 ? 'Please enter your name (at least 2 characters).' : '',
    email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address, like name@example.com.',
    message: v => v.trim().length < 10 ? 'Please write a message of at least 10 characters.' : ''
  };
  function check(field) {
    const msg = rules[field.name](field.value);
    document.getElementById(field.id + '-error').textContent = msg;
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }
  // Validate a field when the user leaves it
  form.querySelectorAll('input, textarea').forEach(f => f.addEventListener('blur', () => check(f)));
  form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = '';
    const fields = [...form.querySelectorAll('input, textarea')];
    const bad = fields.filter(f => !check(f));
    if (bad.length) { bad[0].focus(); return; }   // move keyboard focus to the first problem
    // No server here: show a success message instead of sending.
    status.textContent = 'Thanks! Your message is ready to send. (This demo form does not send data.)';
    form.reset();
  });
}
