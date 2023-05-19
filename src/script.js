const toggleMenu = document.getElementById('toggleMenu');
const menuItems = document.querySelector('.details');

toggleMenu.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
});