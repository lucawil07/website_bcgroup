// Cookie Consent Banner Test Script
// Add this to browser console to test the cookie banner

console.log('%c🍪 Cookie Consent Banner Test Utilities', 'font-size: 16px; font-weight: bold; color: #0066CC;');

// Check if consent is stored
const checkConsent = () => {
  const stored = localStorage.getItem('bcgroup_cookie_consent');
  if (stored) {
    console.log('✅ Consent found:', JSON.parse(stored));
  } else {
    console.log('❌ No consent stored - banner should appear');
  }
};

// Clear consent to trigger banner
const clearConsent = () => {
  localStorage.removeItem('bcgroup_cookie_consent');
  console.log('🧹 Consent cleared - reload page to see banner');
  console.log('Run: location.reload()');
};

// Simulate expired consent
const expireConsent = () => {
  const stored = localStorage.getItem('bcgroup_cookie_consent');
  if (stored) {
    const consent = JSON.parse(stored);
    consent.timestamp = Date.now() - (366 * 24 * 60 * 60 * 1000); // 366 days ago
    localStorage.setItem('bcgroup_cookie_consent', JSON.stringify(consent));
    console.log('⏰ Consent expired - reload page to see banner');
    console.log('Run: location.reload()');
  } else {
    console.log('❌ No consent to expire');
  }
};

// Show all commands
const help = () => {
  console.log(`
%c🍪 Available Commands:
%c
checkConsent()  - Check if consent is stored
clearConsent()  - Clear consent to trigger banner
expireConsent() - Expire consent to trigger banner
help()          - Show this help message
  `, 'font-weight: bold; color: #0066CC;', 'color: #666;');
};

// Make functions available globally
window.cookieTest = {
  checkConsent,
  clearConsent,
  expireConsent,
  help
};

help();

// Auto-check on load
checkConsent();
