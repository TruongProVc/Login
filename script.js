document.getElementById('showRegister').addEventListener('click', function (event) {
    event.preventDefault(); 
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function (event) {
    event.preventDefault(); 
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});
