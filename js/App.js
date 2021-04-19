import useFetch from './useFetch.js';
import Popup from './Popup.js';
import PopupForm from './PopupForm.js';

class App {
  constructor() {
    this.data = '';
    this.url = '';
  }

  setUrl(url) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  fetchData() {
    useFetch(this.getUrl());
  }

  setProductCard() {
    document.querySelector('.card-product-name').innerText = this.data.product.name;
    document.querySelector('.card-open-popup').addEventListener('click', () => {
      new Popup(document.querySelector('.popup')).openPopup();
    });
  }

  setPopupForm() {
    const form = new PopupForm(this.data);
    form.setProductName();
    form.setShowSlides();
    form.setSizes();
    form.setVariants();
    form.setAmountOfProduct();
    form.handleSubmit();
  }
}

export default new App();
