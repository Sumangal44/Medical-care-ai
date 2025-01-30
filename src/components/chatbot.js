import "../style.css";
import "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"
export default function renderChatbot(app) {
  app.innerHTML = `
    <div class="w-full max-w-4xl p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-4">Echo Care</h1>
      <div id="chatBox" class="h-96 bg-gray-100 dark:bg-zinc-700 p-4 overflow-y-scroll rounded-md [&::-webkit-scrollbar]:w-2
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-track]:bg-gray-100
[&::-webkit-scrollbar-thumb]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gray-300
dark:[&::-webkit-scrollbar-track]:bg-neutral-700
dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <!-- Chat messages -->
      </div>
      <div class="mt-4 flex">
        <input id="userMessage" type="text" placeholder="Type your message..." class="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-md" />
        <button id="sendMessage" class="bg-blue-500 dark:bg-zinc-600 text-white px-4 py-2 rounded-r-md"> <box-icon id='sendIcon' name='send'></box-icon> </button>
          </div>
    </div>
  `;

  const chatBox = document.getElementById('chatBox');
  const userMessage = document.getElementById('userMessage');
  const sendMessage = document.getElementById('sendMessage');
  const sendIcon = document.getElementById('sendIcon');


  sendMessage.addEventListener('click', () => {
    const message = userMessage.value.trim();
    if (message) {
      chatBox.innerHTML += `<p class="bg-gray-200 dark:bg-gray-600 p-2 rounded-md my-2">${message}</p>`;
      userMessage.value = '';
      sendIcon.textContent = 'hourglass_top';
      // Simulate AI response
      setTimeout(() => {
        chatBox.innerHTML += `<p class="bg-blue-300 dark:bg-zinc-500 text-white p-2 rounded-md my-2">AI: I'm here to help!</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1000);
    }
  });
}
