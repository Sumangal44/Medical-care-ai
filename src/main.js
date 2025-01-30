import renderLogin from './components/login.js';
import renderSignUp from './components/signup.js';
import renderChatbot from './components/chatbot.js';

const app = document.getElementById('app');
const themeToggle = document.getElementById('themeToggle');
// Theme toggle logic
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});

// Routing logic
function navigate(route) {
  app.innerHTML = ''; // Clear app container
  if (route === 'signup') renderSignUp(app, navigate);
  else if (route === 'chatbot') renderChatbot(app);
  else renderLogin(app, navigate); // Default to login
}

// Initialize
navigate();


