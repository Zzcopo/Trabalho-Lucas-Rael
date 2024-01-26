
document.addEventListener('DOMContentLoaded', function () {
      const body = document.body;
      const themeToggleBtn = document.getElementById('bd-theme');
      const themeText = document.getElementById('bd-theme-text');

      // Function to toggle theme class on body and save the user's preference
      function toggleTheme(theme) {
        body.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
      }

      // Event listener for theme toggle button
      themeToggleBtn.addEventListener('click', function () {
        const currentTheme = body.getAttribute('data-bs-theme');
        const newTheme = (currentTheme === 'auto') ? 'dark' : 'auto'; // Toggle between 'dark' and 'auto'
        toggleTheme(newTheme);

        // Update theme icon and text
        const themeIcon = themeToggleBtn.querySelector('.theme-icon-active use');
        themeIcon.setAttribute('href', '#' + ((newTheme === 'auto') ? 'sun-fill' : 'moon-stars-fill'));
        themeText.innerText = (newTheme === 'auto') ? 'Auto' : (newTheme === 'dark') ? 'Dark' : 'Light';
      });

      // Check user's saved preference in local storage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        toggleTheme(savedTheme);
      }
    });
