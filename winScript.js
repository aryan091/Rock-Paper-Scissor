const togBtn = document.getElementById("ruleButton");
const toggleDiv = document.getElementById('ruleList');
const cross = document.getElementById('cross');

togBtn.addEventListener('click', () => {
    toggleDiv.classList.remove('hidden');
    cross.classList.remove('hidden');
  });
  
  cross.addEventListener('click', () => {
    toggleDiv.classList.add('hidden');
    cross.classList.add('hidden');
  });