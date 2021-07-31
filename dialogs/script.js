let searchInput = document.querySelector('.users__input');
let search = document.querySelector('.users__search');
let userSelection = document.querySelector('.dialog__user-selection');
let fileSelection = document.querySelector('.dialog__file-selection');
let userSelectionButton = document.querySelector('.dialog__user-selection-button');
let fileSelectionButton = document.querySelector('.dialog__file-selection-button');

userSelectionButton.onclick =  () => {
  userSelection.classList.toggle('visible');
};
fileSelectionButton.onclick = () => {
  fileSelection.classList.toggle('visible');
};
searchInput.onfocus = function() {
  search.classList.add('active');
};
searchInput.onblur = function() {
  search.classList.remove('active');
};

