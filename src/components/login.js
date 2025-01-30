import "../style.css"
export default function renderLogin(app, navigate) {
  app.innerHTML = `
    <div class="w-full max-w-md p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-4">Login</h1>
      <form id="loginForm" class="space-y-4">
        <input type="email" placeholder="Email" class="w-full px-4 py-2 bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-gray-600 rounded-md" required />
        <input type="password" placeholder="Password" class="w-full px-4 py-2 bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-gray-600 rounded-md" required />
        <button class="w-full bg-zinc-900 dark:bg-zinc-950 dark:hover:bg-zinc-700 text-white py-2 rounded-md">Login</button>
      </form>
      <p class="text-center mt-4">
        Don't have an account? <a href="#" class="text-blue-500 dark:text-blue-400" id="signupLink">Sign Up</a>
      </p>
    </div>
  `;

  document.getElementById('signupLink').addEventListener('click', () => navigate('signup'));
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    navigate('chatbot'); // Simulate login and redirect to chatbot
  });
}
