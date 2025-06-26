

// Toddle 
const toggleBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});



// Chat 
  const botToken = '7107806025:AAF1VrJXHgtRDNKsr59xdg4qPwts0Tjpp-0';
  const chatId = '855288082';

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const text = `
📝 *New Contact Form Submission*:
👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
    `;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending message.');
    });
  });
  
