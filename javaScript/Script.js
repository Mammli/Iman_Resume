// تگ های اولیه
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openPopup');
  const closeBtn = document.getElementById('closePopup');
  const popup = document.getElementById('popup');
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenuBtn = document.getElementById('closeMenu');
  const headerBtn = document.getElementById('btn1');

  // انیمیشن مدت زمان به میلی ثانیه
  const ANIM_MS = 250;

  if (!popup) return; 

  function showPopup() {
  
    popup.style.display = 'flex';
  
    requestAnimationFrame(() => {
      popup.classList.remove('hide');
      popup.classList.add('show');
    });
    document.body.style.overflow = 'hidden';
  }

  function hidePopup() {
    popup.classList.remove('show');
    popup.classList.add('hide');
    document.body.style.overflow = 'auto';
    
    setTimeout(() => {
      
      if (popup.classList.contains('hide')) popup.style.display = 'none';
    }, ANIM_MS);
  }

  if (openBtn) openBtn.addEventListener('click', showPopup);
  if (headerBtn) headerBtn.addEventListener('click', showPopup);
  if (closeBtn) closeBtn.addEventListener('click', hidePopup);

  
  window.addEventListener('click', (e) => {
    if (e.target === popup) hidePopup();
  });

  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (popup.classList.contains('show')) hidePopup();
      if (mobileMenu && mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    }
  });

  // هندل کننده موبایل منو
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
 
      const overlay = document.getElementById('menuOverlay');
      if (overlay) {
        overlay.style.display = 'block';
        requestAnimationFrame(() => overlay.classList.add('show'));
      }
      mobileMenu.style.display = 'flex';
      requestAnimationFrame(() => {
        mobileMenu.classList.add('show');
        mobileMenu.setAttribute('aria-hidden', 'false');
      });
      document.body.style.overflow = 'hidden';
      
      const firstLink = mobileMenu.querySelector('a, button');
      if (firstLink) firstLink.focus();
    });
  }

  if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener('click', () => {
      const overlay = document.getElementById('menuOverlay');
      mobileMenu.classList.remove('show');
      mobileMenu.setAttribute('aria-hidden', 'true');
      if (overlay) overlay.classList.remove('show');
      
      setTimeout(() => {
        mobileMenu.style.display = 'none';
        if (overlay) overlay.style.display = 'none';
      }, ANIM_MS);
      document.body.style.overflow = 'auto';
    });
  }

  
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && mobileMenu.classList.contains('show')) {
        const overlay = document.getElementById('menuOverlay');
        mobileMenu.classList.remove('show');
        mobileMenu.setAttribute('aria-hidden', 'true');
        if (overlay) overlay.classList.remove('show');
        setTimeout(() => {
          mobileMenu.style.display = 'none';
          if (overlay) overlay.style.display = 'none';
        }, ANIM_MS);
        document.body.style.overflow = 'auto';
      }
    });
  }

  
  const overlayEl = document.getElementById('menuOverlay');
  if (overlayEl) {
    overlayEl.addEventListener('click', () => {
      if (mobileMenu && mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        mobileMenu.setAttribute('aria-hidden', 'true');
        overlayEl.classList.remove('show');
        setTimeout(() => {
          mobileMenu.style.display = 'none';
          overlayEl.style.display = 'none';
        }, ANIM_MS);
        document.body.style.overflow = 'auto';
      }
    });
  }

  
  const mobileContactBtn = document.getElementById('mobileContactBtn');
  if (mobileContactBtn) {
    mobileContactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const overlay = document.getElementById('menuOverlay');
      mobileMenu.classList.remove('show');
      mobileMenu.setAttribute('aria-hidden', 'true');
      if (overlay) overlay.classList.remove('show');
      setTimeout(() => {
        mobileMenu.style.display = 'none';
        if (overlay) overlay.style.display = 'none';
      }, ANIM_MS);
      document.body.style.overflow = 'auto';
      
      showPopup();
    });
  }
});
