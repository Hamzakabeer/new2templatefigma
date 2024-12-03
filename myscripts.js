function toggleMenu() {
    const dropdown = document.querySelector('nav ul.dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  }
  const slider = document.getElementById('slider');

        function scrollSlider(direction) {
            const scrollAmount = 300; // Adjust as needed
            slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }