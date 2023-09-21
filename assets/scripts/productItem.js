import Product from './product.js';
import App from './app.js';

export default class ProductItem {
  constructor(product) {
    this.product = new Product(
      product.id,
      product.title,
      product.price,
      product.description,
      product.image
    );
  }

  addToCart() {
    if (!this.product) return;
    console.log('Product:', this.product);

    App.addProductToCart(this.product);
  }

  render() {
    const productEl = document.createElement('li');
    productEl.className = 'product-item';
    productEl.innerHTML = `
            <div>
                <img src="${this.product.image}" alt="${this.product.title}" >
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
    const addCartButton = productEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return productEl;
  }
}
