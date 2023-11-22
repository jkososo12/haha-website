const nav = document.getElementById('nav');
const sidebar = document.querySelector('.bagian-sidebar');
const menuIcon = document.querySelector('.icon');

// Function to toggle sidebar/menu on smaller screens
menuIcon.addEventListener('click', () => {
  if (sidebar.style.display === 'none' || sidebar.style.display === '') {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
});
