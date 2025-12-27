document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('keyup', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      btn.click();
    }
  });
});
