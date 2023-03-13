export function displayModal(index, projects) {
  const description = document.querySelector(`#index_${index}`);
  description.classList.toggle('toggle-on');
  description.classList.toggle('toggle-off');
}

export function closeModal() {
  const modalSection = document.querySelector('.modal-section');
  modalSection.classList.remove('popup');
}
