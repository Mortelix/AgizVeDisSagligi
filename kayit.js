document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = '';
    

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage += 'Geçerli bir e-posta adresi giriniz. <br>';
    }
    
    
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      errorMessage += 'Parola en az 8 karakter, bir büyük harf ve bir rakam içermelidir. <br>';
    }
    
    
    if (password !== confirmPassword) {
      errorMessage += 'Parolalar eşleşmiyor. <br>';
    }

    if (!email || !name || !dob || !password || !confirmPassword) {
      errorMessage += 'Tüm alanlar doldurulmalıdır. <br>';
    }
    

    if (errorMessage) {
      document.getElementById('error-message').innerHTML = errorMessage;
    } else {
      document.getElementById('error-message').innerHTML = '';
      alert('Kayıt başarıyla tamamlandı!');
      
    }
  });
  