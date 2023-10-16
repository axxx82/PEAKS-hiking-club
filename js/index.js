const switchButton = document.getElementById('switch-state');
switchButton.checked = true;

switchButton.addEventListener('change', () => {
  const styleLink = document.getElementById('style-link');

  // Change the href attribute
  const newHref = `css/style${switchButton.checked ? 1 : 2}.css`;
  styleLink.setAttribute('href', newHref);
})