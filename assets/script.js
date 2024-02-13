document.addEventListener('DOMContentLoaded', (event) => {
  const message = document.getElementById('message');
  const message2 = document.getElementById('message2');
  const message3 = document.getElementById('message3');

  setTimeout(() => {
    message.style.width = '300px';
    message2.style.width = '350px';
    message3.style.width = '250px';
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
    noBtn.style.bottom = `${randomY}px`;
    noBtn.style.right = `${randomX}px`;
  });

  setTimeout(() => {
    noBtn.style.opacity = '1';
    yesBtn.style.opacity = '1';
  }, 11000);
});


document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const cardElements = Array.from(document.getElementById('card').children);
  const presentContainer = document.getElementById('presentContainer');
  const presentImage = document.getElementById('presentImage');
  const finalMessage = document.getElementById('finalMessage');

  yesBtn.addEventListener('click', () => {
    // Fade out all card elements except the card itself
    cardElements.forEach(el => {
      if (el.id !== 'presentContainer') {
        el.style.opacity = 0;
      }
    });

    // After fade out, display the present
    setTimeout(() => {
      cardElements.forEach(el => {
        if (el.id !== 'presentContainer') {
          el.classList.add('hidden');
        }
      });
      presentContainer.style.position = 'absolute';
      presentContainer.style.pointerEvents = 'painted';
      presentImage.classList.remove('hidden');
      setTimeout(() => {
        presentImage.style.maxWidth = '100%';
        presentImage.style.opacity = 1;
      }, 0);

    }, 500); // this matches the transition time of the card elements

    presentImage.addEventListener('click', () => {
      // Fade out the present image
      presentImage.style.opacity = 0;

      setTimeout(() => {
        presentImage.classList.add('hidden');
        finalMessage.classList.remove('hidden');
        setTimeout(() => {
          finalMessage.style.opacity = 1;
          finalMessage.style.padding = '70px';
        }, 0);
      }, 2000); // this matches the transition time of the present image
    });
  });
});

