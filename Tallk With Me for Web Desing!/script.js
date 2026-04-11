const API = (location.hostname==='localhost' || location.hostname==='127.0.0.1') ? 'http://localhost:8080/api/chat' : '/api/chat';
const messagesEl = document.getElementById('messages');
const input = document.getElementById('inputMsg');
const composer = document.getElementById('composer');
const typingEl = document.getElementById('typing');
const languageEl = document.getElementById('language');
const newConvBtn = document.getElementById('newConv');


let history = JSON.parse(localStorage.getItem('shala:history') || '[]');
renderMessages();


newConvBtn.addEventListener('click', () => { history = []; localStorage.setItem('shala:history', JSON.stringify(history)); renderMessages(); pushBotMessage('Welcome to Shala Webs — how can I help today?'); });


composer.addEventListener('submit', async (e) => {
e.preventDefault();
const text = input.value.trim();
if(!text) return;
const lang = languageEl.value || 'en';
pushMessage('me', text);
input.value = '';
showTyping(true);


try{
const res = await fetch(API, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ message: text, history, lang })
});
const data = await res.json();
pushMessage('bot', data.reply || 'Sorry, no reply.');
}catch(err){
console.error(err);
pushMessage('bot', 'Network error — please try again later.');
}finally{
showTyping(false);
}
});


function pushMessage(from, text){
const m = { from, text, t: Date.now() };
history.push(m);
localStorage.setItem('shala:history', JSON.stringify(history));
renderMessages();
}
function pushBotMessage(text){ pushMessage('bot', text); }


function renderMessages(){
messagesEl.innerHTML = '';
if(history.length===0) pushBotMessage('Përshëndetje! Unë jam Daris — si mund t\'ju ndihmoj?');
history.slice(-400).forEach(m =>{
const d = document.createElement('div');
d.className = 'message ' + (m.from==='me'?'me':'bot');
d.innerHTML = `<div>${escapeHtml(m.text)}</div><div class="meta">${new Date(m.t).toLocaleString()}</div>`;
messagesEl.appendChild(d);
});
messagesEl.scrollTop = messagesEl.scrollHeight;
}


function showTyping(on){typingEl.textContent = on ? 'Daris is typing...' : '';}
function escapeHtml(s){return s.replace(/[&<>\"']/g, c=>({'&':'&amp;','<':'&lt;