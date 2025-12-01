import { createComponent as createInputListComponent } from './input-list-component.js';
/**
 * Create input-list component.
 *
 * @param {HTMLElement} componentElem
 *
 * @returns {HTMLElement}
 */
export function createComponent(componentElem) {
  const templateElem = componentElem.querySelector('.app-tmp-section');

  if (templateElem === null) {
    throw new Error('Template .app-tmp-section is not found');
  }

  const inputListContainer = templateElem.parentElement;

  if (inputListContainer === null) {
    throw new Error('Template .app-tmp-section does not have parent');
  }

  const regenerateTitleNumbersAndStatus = () => {
    [...inputListContainer.querySelectorAll('.app-cmp-section')].forEach(
      (inputContainer, index, items) => {
        [...inputContainer.querySelectorAll('.app-title-sec-number')].forEach(
          (elem) => (elem.textContent = `${index + 1}`),
        );

        [...inputContainer.querySelectorAll('.cmd-remove-sec')].forEach(
          (elem) => (elem.disabled = items.length === 1),
        );
      },
    );
  };

  const createInputComponent = () => {
    const inputSecContainer =
      templateElem.content.cloneNode(true).firstElementChild;

    inputContainer.addEventListener('click', (ev) => {
      if (ev.target?.matches('.cmd-remove-sec') ?? false) {
        inputContainer.remove();

        regenerateTitleNumbersAndStatus();
      }
    });

    inputListContainer.append(inputSecContainer);

    regenerateTitleNumbersAndStatus();
  };

  componentElem.addEventListener('click', (ev) => {
    if (ev.target?.matches('.add-section-input')) {
      createInputComponent();
    }
  });

  createInputComponent();

  return componentElem;
}

document.addEventListener('DOMContentLoaded', () => {
  createInputListComponent(document.querySelector('body'));
});
