// src/utils/scrollUtils.js

/**
 * Scrolls the window to the top of the page smoothly
 * Used in navigation links to ensure proper page positioning after navigation
 */
export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };