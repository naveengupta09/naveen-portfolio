// Project toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-all-projects');
  const cards = document.querySelectorAll('.card-wrapper .card');
  
  // Initially hide cards beyond the first 6
  if (cards.length > 6) {
    for (let i = 6; i < cards.length; i++) {
      cards[i].style.display = 'none';
    }
    
    toggleBtn.addEventListener('click', function() {
      const isShowingAll = toggleBtn.textContent === 'Show Less Projects';
      
      if (isShowingAll) {
        // Hide extra projects
        for (let i = 6; i < cards.length; i++) {
          cards[i].style.display = 'none';
        }
        toggleBtn.textContent = 'Show All Projects';
      } else {
        // Show all projects
        for (let i = 6; i < cards.length; i++) {
          cards[i].style.display = 'block';
        }
        toggleBtn.textContent = 'Show Less Projects';
      }
    });
  } else {
    toggleBtn.style.display = 'none';
  }
});