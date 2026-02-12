const inputNode = document.querySelector('.input');
const inputBtn = document.querySelector('.input-button');

function getInputValue(inputNode, inputBtn) {

  inputNode.addEventListener('keyup', (e) => {
    const inputValue = inputNode.value;
    return inputValue;
  });

  inputNode.addEventListener('keypress', function (e) {
    // If the user presses the "Enter" key on the keyboard
    if (e.key === 'Enter') {
      const inputValue = inputNode.value;
      e.preventDefault();
      return inputValue;
    }
  });

  inputBtn.addEventListener('click', (e) => {
    const inputValue = inputNode.value;
    return inputValue;
  });

}

getInputValue(inputNode, inputBtn);

export { inputValue };
