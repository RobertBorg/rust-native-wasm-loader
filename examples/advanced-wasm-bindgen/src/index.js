import('./lib.rs').then(({hello_world}) => {
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const outputElement = document.getElementById('output');

  const update = () => {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    outputElement.textContent = hello_world(firstName, lastName);
  };

  firstNameInput.addEventListener('input', update);
  lastNameInput.addEventListener('input', update);
  update();
});
