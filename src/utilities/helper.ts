     // smooth scroll to section with optional header offset
 export const handleMenuClick = (key?: string | number) => {
    if (!key) return;
    const id = String(key);
    const el = document.getElementById(id);
    if (!el) return;
    // adjust this offset if your header height differs
    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(elementPosition - headerOffset, 0);
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    
  };