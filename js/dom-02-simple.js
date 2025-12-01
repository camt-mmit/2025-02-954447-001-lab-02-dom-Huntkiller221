function createInputComponent() {
  const numberInput = [...document.querySelectorAll('.app-inp-number')];

  const lableElem = document.createElement('lable');

  const bElem = document.createElement('b');
  bElem.textContent = `Number ${numberInput.length + 1}: `;

  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'number');
  inputElem.classList.add('app-inp-number');

  lableElem.append(bElem);
  lableElem.append(inputElem);

  inputElem.addEventListener('change', () => {
    const numberInput = [...document.querySelectorAll('.app-inp-number')];

    const result = numberInput.reduce(
      (result, elem) =>
        result + (Number.isNaN(elem.valueAsNumber) ? 0 : elem.valueAsNumber),
      0,
    );

    const numberOutput = [...document.querySelectorAll('.app-out-number')];
    numberOutput.forEach((elem) => (elem.textContent = result));
  });

  const container = document.querySelector('.app-cmp-number-input');
  if (container) {
    container.append(lableElem);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const addButtons = [
    ...document.querySelectorAll('.app-cmp-add-number-input'),
  ];

  addButtons.forEach((elem) =>
    elem.addEventListener('click', () => {
      createInputComponent();
    }),
  );
  console.debug(addButtons);
  createInputComponent();
});
