document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('input[type="checkbox"]');
      if (!dropdown.contains(event.target)) {
        toggle.checked = false;
      }
    });
  });

  moveMouse(); // initial position
setInterval(moveMouse, 800); // moves every 0.8s

  
  