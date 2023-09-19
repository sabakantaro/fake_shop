import Shop from './shop.js';
import ProductItem from './productItem.js';

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.addProductToCart();
  }

  static addProductToCart() {
    const productItem = new ProductItem();
    productItem.addToCart();
  }
}

App.init();
