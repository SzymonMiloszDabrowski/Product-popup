class Popup {
  constructor(element) {
    this.popup = element;
  }

  openPopup() {
    this.popup.classList.add('active');
    document.querySelector('.overlay').classList.add('active');
    document.querySelector('.close-btn').addEventListener('click', this.closePopup);
  }

  closePopup(e) {
    e.target.closest('.popup').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.close-btn').removeEventListener('click', this.closePopup);
  }
}

export default Popup;
