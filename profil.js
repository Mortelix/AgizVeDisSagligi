document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const currentEmail = "fasalomer78@gmail.com";
    const newEmail = document.getElementById('email').value; 
    const newPassword = document.getElementById('password').value;  
    const confirmPassword = document.getElementById('confirm-password').value; 
    const errorMessage = document.getElementById('error-message');


    if (!validateEmail(newEmail)) {
        errorMessage.textContent = "Geçersiz mail adresi.";
        return;
    }


    if (newEmail !== currentEmail) {
        errorMessage.textContent = "Bu mail adresi başka bir kullanıcıya ait.";
        return;
    }

 
    if (newPassword !== confirmPassword) {
        errorMessage.textContent = "Parolalar eşleşmiyor.";
        return;
    }


    if (!validatePassword(newPassword)) {
        errorMessage.textContent = "Parola en az 8 karakter, bir büyük harf ve bir rakam içermelidir.";
        return;
    }

  
    errorMessage.textContent = "";
    alert("Profil başarıyla güncellendi!");
});


function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
}
