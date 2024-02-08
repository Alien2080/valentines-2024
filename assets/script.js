document.addEventListener('DOMContentLoaded', (event) => {
  const message = document.getElementById('message');
  const message2 = document.getElementById('message2');

  setTimeout(() => {
    message.style.width = '400px';
    message2.style.width = '700px';
  }, 0);
 
});

document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  
  noBtn.addEventListener('click', () => {
    const heartContainer = document.querySelector('.heart-container');
    
    // Calculate max dimensions for movement
    const maxX = heartContainer.offsetWidth - noBtn.offsetWidth;
    const maxY = heartContainer.offsetHeight - noBtn.offsetHeight;
    
    // Generate random positions
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Apply new positions
    // noBtn.style.right = 'auto'; // Reset to use top and left instead
    noBtn.style.bottom = `${randomY}px`;
    noBtn.style.right = `${randomX}px`;
  });

  setTimeout(() => {
    noBtn.style.opacity = '1';
    yesBtn.style.opacity = '1';
  }, 6000);


});

