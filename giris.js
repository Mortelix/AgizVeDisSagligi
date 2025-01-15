
const users = [
    { email: 'user@example.com', password: 'Password123' } 
  ];
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorMessage = '';
  
 
    if (!email || !password) {
      errorMessage += 'E-posta adresi ve parola alanlarını doldurmalısınız. <br>';
    }
  
    if (!errorMessage) {
      let user = users.find(user => user.email === email);
  
      if (!user) {
        errorMessage += 'Kullanıcı bulunamadı. <br>';
      } else if (user.password !== password) {
        errorMessage += 'Yanlış parola. <br>';
      }
    }
  

    if (errorMessage) {
      document.getElementById('error-message').innerHTML = errorMessage;
    } else {
 
      window.location.href = 'index.html'; 
    }
  });
  