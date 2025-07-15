document.addEventListener('DOMContentLoaded', () => {
  // Press any key functionality
  const pressKeyElement = document.getElementById('press-key');
  const missionStartElement = document.getElementById('mission-start');
  
  if (pressKeyElement && missionStartElement) {
    let keyPressed = false;
    
    const showMissionButton = () => {
      if (!keyPressed) {
        keyPressed = true;
        pressKeyElement.style.display = 'none';
        missionStartElement.style.display = 'block';
      }
    };
    
    // Listen for any key press
    document.addEventListener('keydown', showMissionButton, { once: true });
    
    // Also listen for click on mobile
    pressKeyElement.addEventListener('click', showMissionButton);
    
    // Auto-show after delay for accessibility
    setTimeout(showMissionButton, 3000);
  }

  // Form validation
  const form = document.querySelector('form');
  if (form) {
    const secretInput = form.querySelector('#secret');
    const submitButton = form.querySelector('button[type="submit"]');
    
    form.addEventListener('submit', (e) => {
      const secretValue = secretInput.value.trim();
      
      // Basic validation - secret should be at least 8 characters
      if (secretValue.length < 8) {
        e.preventDefault();
        showMessage('ERROR: Invalid secret code format. Code must be at least 8 characters.', 'error');
        return;
      }
      
      // Show loading state
      submitButton.textContent = 'TRANSMITTING...';
      submitButton.disabled = true;
      
      // Simulate transmission delay
      setTimeout(() => {
        showMessage('SECRET CODE TRANSMITTED. AWAITING CONFIRMATION...', 'success');
      }, 1000);
    });
    
    // Real-time validation feedback
    secretInput.addEventListener('input', (e) => {
      const value = e.target.value.trim();
      const isValid = value.length >= 8;
      
      secretInput.style.borderColor = isValid ? 'var(--foreground-color)' : '#ff3333';
      
      if (value.length > 0 && !isValid) {
        showMessage('Code must be at least 8 characters', 'warning');
      } else {
        clearMessage();
      }
    });
  }

  // Navigation state management
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/')) {
      link.classList.add('active');
    }
  });

  // Mobile detection and responsive handling
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Add mobile-specific styling
    document.body.classList.add('mobile-device');
    
    // Show mobile warning
    const mobileWarning = document.createElement('div');
    mobileWarning.className = 'mobile-warning';
    mobileWarning.innerHTML = `
      <p>⚠️ TERMINAL OPTIMIZED FOR DESKTOP</p>
      <p>For best experience, use a desktop computer</p>
      <button onclick="this.parentElement.remove()">CONTINUE ANYWAY</button>
    `;
    mobileWarning.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--background-color);
      border: 2px solid var(--foreground-color);
      padding: 2rem;
      text-align: center;
      z-index: 2000;
    `;
    document.body.appendChild(mobileWarning);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      if (mobileWarning.parentElement) {
        mobileWarning.remove();
      }
    }, 5000);
  }

  // Utility functions
  function showMessage(text, type = 'info') {
    clearMessage();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = text;
    messageDiv.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--background-color);
      color: var(--foreground-color);
      border: 1px solid var(--foreground-color);
      padding: 1rem;
      z-index: 1001;
      max-width: 80%;
      text-align: center;
    `;
    
    if (type === 'error') {
      messageDiv.style.borderColor = '#ff3333';
      messageDiv.style.color = '#ff3333';
    } else if (type === 'success') {
      messageDiv.style.borderColor = '#33ff33';
    } else if (type === 'warning') {
      messageDiv.style.borderColor = '#ffff33';
      messageDiv.style.color = '#ffff33';
    }
    
    document.body.appendChild(messageDiv);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      if (messageDiv.parentElement) {
        messageDiv.remove();
      }
    }, 5000);
  }

  function clearMessage() {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
      existingMessage.remove();
    }
  }

  // Console easter egg
  console.log(`
    ████████╗██╗  ██╗███████╗    ██████╗ ███╗   ██╗██╗  ██╗   ██╗
    ╚══██╔══╝██║  ██║██╔════╝   ██╔═══██╗████╗  ██║██║  ╚██╗ ██╔╝
       ██║   ███████║█████╗     ██║   ██║██╔██╗ ██║██║   ╚████╔╝ 
       ██║   ██╔══██║██╔══╝     ██║   ██║██║╚██╗██║██║    ╚██╔╝  
       ██║   ██║  ██║███████╗   ╚██████╔╝██║ ╚████║███████╗██║   
       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝   
    
    ██╗    ██╗██╗███╗   ██╗███╗   ██╗██╗███╗   ██╗ ██████╗ 
    ██║    ██║██║████╗  ██║████╗  ██║██║████╗  ██║██╔════╝ 
    ██║ █╗ ██║██║██╔██╗ ██║██╔██╗ ██║██║██╔██╗ ██║██║  ███╗
    ██║███╗██║██║██║╚██╗██║██║╚██╗██║██║██║╚██╗██║██║   ██║
    ╚███╔███╔╝██║██║ ╚████║██║ ╚████║██║██║ ╚████║╚██████╔╝
     ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
    
    ███╗   ███╗ ██████╗ ██╗   ██╗███████╗
    ████╗ ████║██╔═══██╗██║   ██║██╔════╝
    ██╔████╔██║██║   ██║██║   ██║█████╗  
    ██║╚██╔╝██║██║   ██║╚██╗ ██╔╝██╔══╝  
    ██║ ╚═╝ ██║╚██████╔╝ ╚████╔╝ ███████╗
    ╚═╝     ╚═╝ ╚═════╝   ╚═══╝  ╚══════╝
    
    SHALL WE PLAY A GAME?
  `);
});