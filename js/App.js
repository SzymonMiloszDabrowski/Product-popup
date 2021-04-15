import useFetch from './useFetch.js';
import Popup from './Popup.js';

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
    document.querySelector('.product-name').innerText = this.data.product.name;
    document.querySelector('.open-popup').addEventListener('click', () => {
      new Popup(document.querySelector('.popup')).openPopup();
    });
  }
}

export default new App();
