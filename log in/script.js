const labelPass = document.getElementById('labelpass');
const labelLog = document.getElementById('labellog');
const logInput = document.getElementById('login');
const passInput = document.getElementById('password');

labelLog.style.visibility = 'hidden';
labelPass.style.visibility = 'hidden';

logInput.onfocus = function() {
    labelLog.style.visibility = 'visible';
    logInput.setAttribute('placeholder', '');

}

password.onfocus = function() {
    labelPass.style.visibility = 'visible';
    passInput.setAttribute('placeholder', '');
}

logInput.onblur = function() {
    if(logInput.value === '') {
        labelLog.style.visibility = 'hidden';
        logInput.setAttribute('placeholder', labelLog.textContent);
    } else {hidden
        labelLog.style.visibility = 'visible';
    }
}

passInput.onblur = function() {
    if(passInput.value === '') {
        labelPass.style.visibility = 'hidden';
        passInput.setAttribute('placeholder', labelPass.textContent)
    } else {
        labelPass.style.visibility = 'visible';
    }
}