function createInputComponent() {
  const numberInput = [...document.querySelectorAll('.app-inp-number')];

  const templateElem = document.querySelector('app-tmp-number-component');

  if (templateElem) {
    const inputContainer =
      templateElem.textContent.cloneNode(ture).firstElementChild;

    [...inputContainer.querySelectorAll('.app-title-number')].forEach(
      (elem) => (elem.textContent = `${numberInputs.length + 1}`),
    );

    const inputElem = inputContainer.querySelector('.app-inp-number');

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
      container.append(inputContainer);
    }
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
