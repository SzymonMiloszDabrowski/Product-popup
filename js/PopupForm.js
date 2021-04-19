class PopupForm {
  constructor(data) {
    this.slideIndex = 1;
    this.amountOfProduct = 1;
    this.data = data;
    this.productName = data.product.name;
    this.size = '';
    this.variant = '';
    this.shoppingList = {};
  }

  setSize(size) {
    this.size = size;
  }

  getSize() {
    return this.size;
  }

  setVariant(variant) {
    this.variant = variant;
  }

  getVariant() {
    return this.variant;
  }

  setShoppingList(shoppingList) {
    this.shoppingList = shoppingList;
  }

  getShoppingList() {
    return this.shoppingList;
  }

  setProductName() {
    document.querySelector('.popup-product-name').innerText = this.productName;
  }

  getProductName() {
    return this.productName;
  }

  setShowSlides() {
    this.showSlides(this.slideIndex);
    document
      .querySelector('.next')
      .addEventListener('click', () => this.showSlides((this.slideIndex += 1)));
    document
      .querySelector('.prev')
      .addEventListener('click', () => this.showSlides((this.slideIndex -= 1)));
  }

  showSlides(n) {
    const slides = document.getElementsByClassName('slides');

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[this.slideIndex - 1].style.display = 'block';
  }

  setSizes() {
    const sizes = this.data.sizes.items;
    Object.entries(sizes).map((element) => {
      document.querySelector(
        '.popup-sizes-container'
      ).innerHTML += `<input type="radio" class="popup-radio-input" name="sizes" id="size${element[1].priority}" required />
      <label for="size${element[1].priority}" class="popup-radio-label">${element[1].description}</label>`;
    });
    document.querySelectorAll('.popup-radio-label').forEach((element) => {
      element.addEventListener('click', (e) => {
        this.setSize(e.target.innerText);
      });
    });
  }

  setVariants() {
    const variants = this.data.multiversions[0].items;
    Object.entries(variants).map((element) => {
      let id = element[1].values_id;
      document.querySelector(
        '.popup-select-variants'
      ).innerHTML += `<option value="${element[1].values[id].name}">${element[1].values[id].name}</option>`;
    });
    document.querySelector('.popup-select-variants').addEventListener('change', (e) => {
      this.setVariant(e.target.value);
    });
  }

  setAmountOfProduct() {
    this.showAmountOfProduct();
    document.querySelector('.popup-remove-product').addEventListener('click', (e) => {
      e.preventDefault();
      if (this.amountOfProduct > 1) this.amountOfProduct -= 1;
      this.showAmountOfProduct();
    });
    document.querySelector('.popup-add-product').addEventListener('click', (e) => {
      e.preventDefault();
      console.log();
      this.amountOfProduct += 1;
      this.showAmountOfProduct();
    });
  }

  getAmountOfProduct() {
    return this.amountOfProduct;
  }

  showAmountOfProduct() {
    document.querySelector('.popup-amount-of-product').innerText = this.amountOfProduct;
  }

  handleSubmit() {
    document.querySelector('.popup-form-container').addEventListener('submit', (e) => {
      e.preventDefault();
      let shoppingList = {
        name: this.getProductName(),
        size: this.getSize(),
        variant: this.getVariant(),
        amount: this.getAmountOfProduct(),
      };
      this.setShoppingList(shoppingList);
      localStorage.setItem('shoppingList', JSON.stringify(this.getShoppingList()));
    });
  }
}

export default PopupForm;
