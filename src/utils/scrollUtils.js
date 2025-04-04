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

/**
 * Navigates to the "All Programs" page and scrolls to the top
 * @param {Function} navigate - The navigation function from react-router-dom
 */
export const navigateToAllPrograms = (navigate) => {
    navigate('/all-programs');
    scrollToTop();
};

/**
 * Navigates to the "Registration" page and scrolls to the top
 * @param {Function} navigate - The navigation function from react-router-dom
 */
export const navigateToRegistration = (navigate) => {
    navigate('/registration');
    scrollToTop();
};