document.addEventListener('DOMContentLoaded', () => {
  const numberInput = [...document.querySelectorAll('.app-inp-number')];

  numberInput.forEach((elem) =>
    elem.addEventListener('change', () => {
      const result = numberInput.reduce(
        (result, elem) =>
          result + (Number.isNaN(elem.valueAsNumber) ? 0 : elem.valueAsNumber),
        0,
      );

      const numberOutput = [...document.querySelectorAll('.app-out-number')];
      numberOutput.forEach((elem) => (elem.textContent = result));
    }),
  );
});
