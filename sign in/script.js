const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');

for (i = 0; i < inputs.length; i++) {
    
    inputs[i].onfocus = function() {
        let thisInput = this;
        thisInput.setAttribute('placeholder', '');
        let thisLabel = document.getElementById(thisInput.id + '-label');
        thisLabel.style.visibility = 'visible';
    }
    
    inputs[i].onblur = function() {
        let thisInput = this;
        let thisLabel = document.getElementById(thisInput.id + '-label');

        if (thisInput.value === '') {
            thisLabel.style.visibility = 'hidden';
            thisInput.setAttribute('placeholder', thisLabel.textContent);
        } else {
            thisLabel.style.visibility = 'visible';
        }

    }

}

